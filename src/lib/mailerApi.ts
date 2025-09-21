// メール送信API関連の型定義とAPI関数
export interface MailRequest {
  to: string;
  subject: string;
  content: string;
  projectLink?: string; // プロジェクトリンク追加
  notifySlack?: boolean;
}

export interface MailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// メールテンプレート生成関数
export const getAdminMailTemplate = (formData: {
  sei: string;
  mei: string;
  phoneNumber: string;
  email: string;
  others: string;
  projectLink?: string; // プロジェクトリンク追加
  date1: Date | null;
  date2: Date | null;
  date3: Date | null;
}) => {
  const formatDate = (date: Date | null) => {
    if (!date) return '未選択';
    return date.toLocaleString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Tokyo'
    });
  };

  // プロジェクトリンク部分を条件付きで追加
  const projectLinkSection = formData.projectLink && formData.projectLink.trim() 
    ? `■ 過去のプロジェクトリンク
${formData.projectLink}

` 
    : '';

  return {
    subject: '【海外クラファン代行】新しいお問い合わせ',
    content: `新しいお問い合わせを受け付けました。

■ お客様情報
お名前: ${formData.sei} ${formData.mei}
メールアドレス: ${formData.email}
電話番号: ${formData.phoneNumber || '未入力'}

■ 希望日時
第1希望: ${formatDate(formData.date1)}
第2希望: ${formatDate(formData.date2)}
第3希望: ${formatDate(formData.date3)}

${projectLinkSection}■ ご相談内容
${formData.others}

---
このメールは海外クラファン代行サイトから自動送信されています。`
  };
};

export const getUserMailTemplate = (formData: {
  sei: string;
  mei: string;
  phoneNumber: string;
  email: string;
  others: string;
  projectLink?: string; // プロジェクトリンク追加
  date1: Date | null;
  date2: Date | null;
  date3: Date | null;
}) => {
  // プロジェクトリンク部分を条件付きで追加
  const projectLinkSection = formData.projectLink && formData.projectLink.trim() 
    ? `■ 過去のプロジェクトリンク
${formData.projectLink}

` 
    : '';

  return {
    subject: '【海外クラファン代行】お問い合わせありがとうございます',
    content: `${formData.sei} ${formData.mei} 様

この度は、海外クラファン代行サービスにお問い合わせいただき、誠にありがとうございます。

以下の内容でお問い合わせを承りました。
担当者より2営業日以内にご連絡させていただきます。

■ お問い合わせ内容
${formData.others}

■ ご希望の相談日時
第1希望: ${formData.date1 ? formData.date1.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }) : '未選択'}
第2希望: ${formData.date2 ? formData.date2.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }) : '未選択'}
第3希望: ${formData.date3 ? formData.date3.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }) : '未選択'}

${projectLinkSection}ご不明な点がございましたら、下記までお気軽にお問い合わせください。

株式会社RE-IDEA
TEL: 03-6759-9299
Email: info@re-idea.jp

今後ともよろしくお願いいたします。`
  };
};

// Google Chat Webhook 送信用（クラス/メソッド名は互換のため据え置き）
export class SlackApi {
  private webhookUrl: string;
  
  constructor() {
    this.webhookUrl = "https://chat.googleapis.com/v1/spaces/AAQAcPmyy_I/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=b6sWbJe0Dc-oonup21GT4rq_NLj3ypf2GH95Udcejro";
    
    if (!this.webhookUrl) {
      throw new Error('GOOGLE_CHAT_WEBHOOK_URL is not set');
    }
  }

  // 旧: Slack 送信 → 新: Google Chat Webhook 送信
  async sendSlackNotification(input: {
    to: string;
    subject: string;
    content: string;
    projectLink?: string; // プロジェクトリンク追加
  }): Promise<boolean> {
    try {
      console.log('Sending Google Chat notification...');
      
      const timestamp = new Date().toLocaleString('ja-JP', {
        timeZone: 'Asia/Tokyo',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });

      // メッセージ構築
      let text =
        `*新しいお問い合わせ*\n` +
        `お問い合わせ受け取り日時: ${timestamp}\n` +
        `メールアドレス: ${input.to}\n`;

      // プロジェクトリンクがある場合は追加
      if (input.projectLink && input.projectLink.trim()) {
        text += `過去のプロジェクトリンク: ${input.projectLink}\n`;
      }

      text += `\n相談内容詳細:\n${input.content}`;

      const res = await fetch(this.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ text }),
      });

      if (res.ok) {
        console.log('Google Chat notification sent successfully');
        return true;
      } else {
        const errorText = await res.text();
        console.error('Google Chat通知エラー:', errorText);
        return false;
      }
    } catch (error) {
      console.error('Google Chat通知処理エラー:', error);
      return false;
    }
  }
}

// メール送信API クラス
export class MailerApi {
  private baseUrl: string;
  private apiKey: string;
  
  constructor() {
    this.baseUrl = process.env.API_BASE_URL || '';
    this.apiKey = process.env.MAILER_X_API_KEY || '';
  }
  
  async sendMail(mailRequest: MailRequest): Promise<MailResponse> {
    try {
      console.log('Sending mail request:', { 
        to: mailRequest.to, 
        subject: mailRequest.subject,
        hasProjectLink: !!mailRequest.projectLink 
      });
      
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mailRequest),
      });
      
      console.log('Mail API response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Mail API error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}, details: ${errorText}`);
      }
      
      const result = await response.json();
      console.log('Mail API success response:', result);
      return result;
    } catch (error) {
      console.error('メール送信エラー:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'メール送信に失敗しました'
      };
    }
  }
}