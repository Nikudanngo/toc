"use client";

import { ActionCodeSettings, Auth, sendSignInLinkToEmail } from "firebase/auth";
import { useState } from "react";

import { auth } from "@/config/Firebase";
import { Modal } from "@/ui/Modal";
import clsx from "clsx";

export const EmailModal = (props: { open: boolean; onClose: () => void }) => {
  const { open, onClose } = props;
  const [email, setEmail] = useState("");
  const [isSendEmail, setIsSendEmail] = useState(false);
  const actionCodeSettings = {
    // リダイレクト先のURL。このURLのドメイン（www.example.com）はFirebaseコンソールの承認済みドメインリストに含まれている必要があります。
    url: `${window.location.origin}/auth`,
    // これはtrueである必要があります。
    handleCodeInApp: true,
  };

  const onSubmit = (
    auth: Auth,
    email: string,
    actionCodeSettings: ActionCodeSettings
  ) => {
    console.log(auth, email, actionCodeSettings);
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // リンクが正常に送信されました。ユーザーに通知します。
        // 同じデバイスでリンクを開く場合、再度ユーザーにメールを要求する必要がないように、メールをローカルに保存します。
        window.localStorage.setItem("emailForSignIn", email);
        setIsSendEmail(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md z-20">
          <h2 className="text-xl font-bold mb-2">メール認証が必要です。</h2>
          <p className="mb-2">
            購入後に領収書を下記のメールアドレスへお送りいたします。
          </p>
          <div className="flex md:flex-row flex-col justify-between items-center gap-2">
            <input
              className="border p-2 w-full"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
            />
            <button
              className={clsx(
                "border p-2 w-16 bg-blue-600 text-white rounded-md hover:bg-blue-700",
                { "!bg-gray-400  !hover:bg-gray-500": isSendEmail }
              )}
              disabled={isSendEmail}
              onClick={() => onSubmit(auth, email, actionCodeSettings)}
            >
              送信
            </button>
          </div>
          {isSendEmail && (
            <p className="text-green-500 z-10 text-sm mt-2">
              認証リンクを送信しました。メールを確認してください。
            </p>
          )}
        </div>
      </Modal>
    </>
  );
};
