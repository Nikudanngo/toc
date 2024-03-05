import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mx-3">
        <h1 className="text-5xl mt-6">お問い合わせ</h1>
        <p className="text-xl">
          商品へのお問い合わせや、お見積もりのご依頼は以下の方法で承ります。
        </p>
        <div className="flex flex-col md:flex-row mt-6 text-center">
          <div className="w-full my-6">
            <p className="my-4 text-xl flex justify-center items-center">
              MAIL
              <CiMail />
              or PHONE
              <CiPhone />
            </p>
            <p>
              メールと電話での受付は月~金 10:00~17:00の間にご対応可能です。
              <br />
              時間や担当の不在によりご対応できない場合がございます。
            </p>
            <div className="my-4">
              <a
                className="underline text-blue-600"
                href="mailto:allthumbs.co@gmail.com"
                target="_blank"
              >
                メール: allthumbs.co@gmail.com
              </a>
            </div>
            <div className="my-4">
              <a
                className="underline text-blue-600"
                href="tel:0743-72-2037"
                target="_blank"
              >
                電話: 0743-72-2037
              </a>
            </div>
          </div>
          <div className="w-full my-6">
            <p className="my-4 text-xl flex justify-center items-center">
              FORM
              <CiViewList />
            </p>
            <p>
              GoogleFormsの受付は24時間受け付けております。
              <br />
              1~2営業以内にメールにて折り返しご連絡いたします。
            </p>
            <div className="my-4">
              <a
                className="underline text-blue-600"
                href="https://forms.gle/6xMw6epBHwFLkpfs6"
                target="_blank"
              >
                リンクはこちら
              </a>
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d410.0970412333015!2d135.71116542559886!3d34.68559416679214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001239c90000001%3A0xc8b69fc668aa840f!2sRecherche!5e0!3m2!1sja!2sjp!4v1629123177581!5m2!1sja!2sjp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
