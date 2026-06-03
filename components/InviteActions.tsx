"use client";

import { useState } from "react";

type Props = {
  referralCode: string;
  inviteLink: string;
  downloadLink: string;
};

export function InviteActions({ referralCode, inviteLink, downloadLink }: Props) {
  const [copied, setCopied] = useState("");

  async function copy(value: string, label: string) {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    window.setTimeout(() => setCopied(""), 1800);
  }

  return (
    <>
      <div className="actions">
        <a className="btn primary" href={downloadLink}>
          Descargar APK
        </a>

        <button className="btn secondary" onClick={() => copy(inviteLink, "Link copiado")}>
          Copiar link
        </button>

        <button className="btn ghost" onClick={() => copy(referralCode, "Código copiado")}>
          Copiar código
        </button>
      </div>

      {copied ? <div className="status">{copied}</div> : null}
    </>
  );
}
