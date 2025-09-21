"use client"

import React, { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/Form/ContactForm";
import styles from "./ContactSection.module.css";
import { MailerApi, getAdminMailTemplate, getUserMailTemplate } from "@/lib/mailerApi";
import { SlackApi } from "@/lib/slackApi";

const ContactSection: React.FC = () => {
  const [loading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const mailerApi = new MailerApi();
  const slackApi = new SlackApi();

  const handleFormSubmit = async (formData: {
    sei: string;
    mei: string;
    phoneNumber: string;
    email: string;
    others: string;
    date1: Date | null;
    date2: Date | null;
    date3: Date | null;
  }) => {
    try {
      console.log('Form submission started');
      setIsLoading(true);
      setErrorMessage(null);
      setSuccessMessage(null);

      // 管理者宛メール送信
      const adminTemplate = getAdminMailTemplate(formData);
      console.log('Sending admin mail...');
      const adminMailResult = await mailerApi.sendMail({
        to: 'info@re-idea.jp',
        subject: adminTemplate.subject,
        content: adminTemplate.content,
      });

      console.log('Admin mail result:', adminMailResult);

      if (!adminMailResult.success) {
        console.error('Admin mail failed:', adminMailResult.error);
        throw new Error(adminMailResult.error || 'メール送信に失敗しました');
      }

      // Slack通知送信
      console.log('Sending Slack notification...');
      const slackResult = await slackApi.sendSlackNotification({
        to: formData.email,
        subject: adminTemplate.subject,
        content: adminTemplate.content,
      });

      console.log('Slack notification result:', slackResult);

      // お客様宛確認メール送信
      const userTemplate = getUserMailTemplate(formData);
      console.log('Sending user mail...');
      const userMailResult = await mailerApi.sendMail({
        to: formData.email,
        subject: userTemplate.subject,
        content: userTemplate.content,
      });

      console.log('User mail result:', userMailResult);

      if (userMailResult.success) {
        setSuccessMessage(userMailResult.message || "お問い合わせを受け付けました。確認メールをお送りしましたのでご確認ください。");
      } else {
        setSuccessMessage(userMailResult.message || "お問い合わせを受け付けました。確認メールの送信に失敗しましたが、お問い合わせ内容は正常に受信されています。");
      }

      setIsLoading(false);
    } catch (err) {
      console.error("Form submission error:", err);
      setIsLoading(false);
      const errorMessage = err instanceof Error ? err.message : '予期せぬエラーが発生しました';
      setErrorMessage(errorMessage);
      console.error("Error details:", errorMessage);
    }
  };

  return (
    <div
      id="contact"
      className={styles["contact-section"]}
    >
      <SectionTitle title="無料ご相談" subtitle="CONTACT" />
      <ContactForm
        onSubmit={handleFormSubmit}
        isLoading={loading}
        errorMessage={errorMessage}
        successMessage={successMessage}
      />
    </div>
  );
};

export default ContactSection;
