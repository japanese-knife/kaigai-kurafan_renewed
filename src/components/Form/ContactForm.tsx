"use client"

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import { ja } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./ContactForm.module.css";

registerLocale("ja", ja);

interface ContactFormData {
  sei: string;
  mei: string;
  phoneNumber: string;
  email: string;
  others: string;
  date1: Date | null;
  date2: Date | null;
  date3: Date | null;
}

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
  isLoading: boolean;
  errorMessage: string | null;
  successMessage: string | null;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  isLoading,
  errorMessage,
  successMessage,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    sei: "",
    mei: "",
    phoneNumber: "",
    email: "",
    others: "",
    date1: null,
    date2: null,
    date3: null,
  });
  const [emailError, setEmailError] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = !!(formData.sei && formData.mei && formData.email && !emailError && formData.others);
    setIsFormValid(isValid);
  }, [formData, emailError]);

  const handleInputChange = (field: keyof ContactFormData, value: string | Date | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (field === 'email' && typeof value === 'string') {
      setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
    }
  };

  const handleSubmit = () => {
    if (isFormValid) {
      onSubmit(formData);
    }
  };

  const datePickerProps = {
    locale: "ja",
    dateFormat: "yyyy/MM/dd HH:mm",
    showTimeSelect: true,
    timeFormat: "HH:mm",
    timeIntervals: 30,
    timeCaption: "時間",
    minDate: new Date(),
    placeholderText: "日時を選択",
    className: styles["contact-input"],
    style: { width: "100%" },
    isClearable: true,
  };

  return (
    <div className={styles["contact-form-container"]}>
      {errorMessage && (
        <div className={styles["error-message"]}>
          {errorMessage}
        </div>
      )}
      {successMessage && (
        <div className={styles["success-message"]}>
          {successMessage}
        </div>
      )}
      
      {/* 氏名入力 */}
      <div className={styles["contact-row"]}>
        <div className={styles["contact-col"]}>
          <div className={styles["contact-label"]}>姓 *</div>
          <input
            type="text"
            placeholder="例 : 山田"
            value={formData.sei}
            onChange={(e) => handleInputChange('sei', e.target.value)}
            className={styles["contact-input"]}
          />
        </div>
        <div className={styles["contact-col"]}>
          <div className={styles["contact-label"]}>名 *</div>
          <input
            type="text"
            placeholder="例 : 太郎"
            value={formData.mei}
            onChange={(e) => handleInputChange('mei', e.target.value)}
            className={styles["contact-input"]}
          />
        </div>
      </div>

      {/* 電話・メール */}
      <div className={styles["contact-row"]}>
        <div className={styles["contact-col"]}>
          <div className={styles["contact-label"]}>電話番号</div>
          <input
            type="tel"
            placeholder="例 : 0123-456-789"
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            className={styles["contact-input"]}
          />
        </div>
        <div className={styles["contact-col"]}>
          <div className={styles["contact-label"]}>メールアドレス *</div>
          <input
            type="email"
            placeholder="例 : abc@example.com"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={
              styles["contact-input"] + (emailError ? " " + styles["contact-input-error"] : "")
            }
          />
          {emailError && (
            <div style={{ color: "red", fontSize: 12, marginTop: 4 }}>
              メールアドレスの形式が正しくありません。
            </div>
          )}
        </div>
      </div>

      {/* 希望日時 */}
      <div>
        <div className={styles["contact-label"]} style={{ marginBottom: 8 }}>無料ご相談希望日時</div>
        <div className={styles["contact-row-dates"]}>
          <DatePicker
            selected={formData.date1}
            onChange={(date) => handleInputChange('date1', date)}
            {...datePickerProps}
            placeholderText="第1希望"
          />
          <DatePicker
            selected={formData.date2}
            onChange={(date) => handleInputChange('date2', date)}
            {...datePickerProps}
            placeholderText="第2希望"
          />
          <DatePicker
            selected={formData.date3}
            onChange={(date) => handleInputChange('date3', date)}
            {...datePickerProps}
            placeholderText="第3希望"
          />
        </div>
      </div>

      {/* ご相談内容 */}
      <div>
        <div className={styles["contact-label"]}>ご相談内容 *</div>
        <textarea
          placeholder="海外クラウドファンディングへ掲載希望の商品の説明を簡単にご記入ください。"
          value={formData.others}
          onChange={(e) => handleInputChange('others', e.target.value)}
          rows={4}
          className={styles["contact-input"] + " " + styles["contact-textarea"]}
        />
      </div>

      {/* 送信ボタン */}
      <div className={styles["contact-send-btn-wrapper"]}>
        <button
          onClick={handleSubmit}
          disabled={!isFormValid || isLoading}
          className={styles["submit-button"]}
        >
          {isLoading ? "送信中..." : "送信"}
        </button>
      </div>
    </div>
  );
};

export default ContactForm;