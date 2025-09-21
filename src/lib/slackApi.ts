// メール送信API関連の型定義とAPI関数
export interface MailRequest {
  to: string;
  subject: string;
  content: string;
  projectLink?: string; // 新規追加：プロジェクトリンク
  notifySlack?: boolean; // 互換のため名称は維持
}

export interface MailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// Google Chat Webhook 送信用（クラス/メソッド名は互換のため据え置き）
export class SlackApi {
  private webhookUrl: string;
  
  constructor() {
    this.webhookUrl = "https://chat.googleapis.com/v1/spaces/AAQAcPmyy_I/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=b6sWbJe0Dc-oonup21GT4rq_NLj3ypf2GH95Udcejro";
    
    if (!this.webhookUrl) {
      // 必要なら throw を外して呼び出し側で分岐でもOK
      throw new Error('GOOGLE_CHAT_WEBHOOK_URL is not set');
    }
  }

  // 旧: Slack 送信 → 新: Google Chat Webhook 送信
  async sendSlackNotification(input: {
    to: string;
    subject: string;
    content: string;
    projectLink?: string; // 新規追加：プロジェクトリンク
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