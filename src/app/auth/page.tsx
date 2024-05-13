"use client";

import { auth } from "@/config/Firebase";

import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Test() {
  const router = useRouter();
  useEffect(() => {
    // リンクがメールアドレスでのサインインリンクであることを確認します。
    if (isSignInWithEmailLink(auth, window.location.href)) {
      console.log(window.location.href);
      // URL経由で追加の状態パラメーターも渡すことができます。
      // これにより、サインイン操作をトリガーする前に、ユーザーの意図したアクションを継続するために使用できます。
      // 利用可能な場合は、メールアドレスを取得します。ユーザーが開始したデバイスと同じデバイスでフローを完了した場合、これが利用可能になるはずです。
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        // ユーザーが異なるデバイスでリンクを開いた場合、セッション固定攻撃を防ぐために、関連するメールアドレスを再度入力してもらいます。
        email = window.prompt("確認のためにメールアドレスを入力してください");
      }
      if (!email) return;
      // クライアントSDKはリンクからコードを解析します。
      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          // ストレージからメールアドレスを削除します。
          window.localStorage.removeItem("emailForSignIn");
          // orderページにリダイレクトします。
          router.push("/order");
          // result.userを介して新しいユーザーにアクセスできます
          // result.additionalUserInfo.profile == nullを介して利用できない追加のユーザー情報プロファイル
          // ユーザーが新規ユーザーか既存のユーザーかを確認できます
          // result.additionalUserInfo.isNewUser
        })
        .catch((error) => {
          // エラーが発生した場合、error.codeを調査できます
          // 一般的なエラーは、無効なメールアドレスや無効または期限切れのOTPです。
          console.error(error);
        });
    }
  }, [router]);
  return (
    <>
      auth
      <></>
    </>
  );
}
