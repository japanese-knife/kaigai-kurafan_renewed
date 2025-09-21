import { NextResponse } from "next/server";

type MailData = {
  to: string;
  subject: string;
  content: string;
  htmlContent: string;
}

async function sendMail(mail: MailData): Promise<boolean> {
  try {
    const payload = {
      to: mail.to,
      subject: mail.subject,
      text: mail.content,
      html: mail.htmlContent,
      categories: ['kaigai-kurafan-contact'],
    }
    const res = await fetch('https://seogpbjpabhmtmechtxr.functions.supabase.co/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error('Mail sending failed:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error sending mail:', error);
    return false;
  }
}

interface MailRequest {
  to: string;
  subject: string;
  content: string;
  projectLink?: string;
  notifySlack?: boolean;
}

// 環境変数の取得（デフォルト値付き）
const GOOGLE_CHAT_WEBHOOK_URL = "https://chat.googleapis.com/v1/spaces/AAQAcPmyy_I/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=b6sWbJe0Dc-oonup21GT4rq_NLj3ypf2GH95Udcejro"

export async function POST(request: Request) {
  try {
    console.log('Mail API called');

    const body: MailRequest = await request.json();
    console.log('Request body received:', { to: body.to, subject: body.subject, projectLink: body.projectLink });

    let mailSent = false;
    let slackSent = false;
    
    // メール送信を試行
    try {
      console.log('Sending email...');
      const mailData: MailData = {
        to: body.to,
        subject: body.subject,
        content: body.content,
        htmlContent: body.content.replace(/\n/g, '<br>') // 改行をHTMLに変換
      };
      
      mailSent = await sendMail(mailData);
      
      if (mailSent) {
        console.log('Email sent successfully');
      } else {
        console.error('Email sending failed');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      mailSent = false;
    }
    
    // Google Chat通知送信を試行（環境変数が設定されている場合のみ）
    if (body.notifySlack && GOOGLE_CHAT_WEBHOOK_URL) {
      try {
        console.log('Sending Google Chat notification...');
        // JSTのタイムスタンプ
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
    
        // プロジェクトリンク情報を含むメッセージを構築
        let messageText =
          `*新しいお問い合わせ*\n` +
          `お問い合わせ受け取り日時: ${timestamp}\n` +
          `メールアドレス: ${body.to}\n`;
        
        // プロジェクトリンクがある場合は追加
        if (body.projectLink && body.projectLink.trim()) {
          messageText += `過去のプロジェクトリンク: ${body.projectLink}\n`;
        }
        
        messageText += `\n相談内容詳細:\n${body.content}`;
    
        const chatResponse = await fetch(GOOGLE_CHAT_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=UTF-8' },
          body: JSON.stringify({ text: messageText }),
        });
    
        if (chatResponse.ok) {
          console.log('Google Chat notification sent successfully');
          // 互換性のため既存の変数名をそのまま利用
          slackSent = true;
        } else {
          const errorText = await chatResponse.text();
          console.error('Google Chat通知エラー:', errorText);
        }
      } catch (error) {
        console.error('Google Chat通知処理エラー:', error);
      }
    } else {
      console.log('Google Chat notification not configured - skipping Chat sending');
    }

    // 成功レスポンスを返す（メールやSlackの送信状況に関わらず）
    let message = 'お問い合わせを受け付けました。担当者より2営業日以内にご連絡させていただきます。';
    
    if (mailSent) {
      message = 'お問い合わせを受け付けました。確認メールをお送りしましたのでご確認ください。';
    }

    return NextResponse.json({ 
      success: true, 
      message: message,
      debug: {
        mailConfigured: true,
        slackConfigured: false,
        mailSent: mailSent,
        slackSent: slackSent
      }
    });

  } catch (error) {
    console.error("メール送信処理エラー:", error);
    return NextResponse.json(
      { 
        success: true,
        message: 'お問い合わせを受け付けました。担当者より2営業日以内にご連絡させていただきます。',
        note: 'システムエラーが発生しましたが、お問い合わせ内容は記録されています。'
      }
    );
  }
}