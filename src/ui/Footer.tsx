import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faAmazon } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-4 w-full bg-slate-50 p-6">
      <div className="flex items-center justify-center gap-6 [&_a:hover]:text-blue-400">
        <a
          href="https://www.instagram.com/okinagram/"
          target="_blank"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} className="w-8" />
        </a>
        <a
          href="https://www.amazon.co.jp/s?me=A3I6MWRX1EEVQE&marketplaceID=A1VC38T7YXB528"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Amazon"
        >
          <FontAwesomeIcon icon={faAmazon} className="w-8" />
        </a>
      </div>
      <p className="flex items-center justify-center text-center">
        © 2021-2024 オールサム有限会社
      </p>
    </div>
  );
};
