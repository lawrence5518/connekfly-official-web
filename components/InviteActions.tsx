"use client";

import { useMemo, useState } from "react";
import { supportEmail } from "@/lib/env";

type Props = {
  referralCode: string;
  inviteLink: string;
  appLink: string;
  downloadLink: string;
};

export function InviteActions({ referralCode, inviteLink, appLink, downloadLink }: Props) {
  const [copied, setCopied] = useState<string>("");
  const downloadReady = downloadLink.trim().length > 0;
  const mailFallback = useMemo(() => {
    const subject = encodeURIComponent("Acceso a ConnekFly");
    const body = encodeURIComponent(`Hola, quiero acceso a ConnekFly. Código: ${referralCode}`);
    return `mailto:${supportEmail()}?subject=${subject}&body=${body}`;
  }, [referralCode]);

  async function copy(value: string, label: string) {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    window.setTimeout(() => setCopied(""), 1800);
  }

  return (
    <>
      <div className="actions">
        <a className="btn primary" href={downloadReady ? downloadLink : mailFallback}>
          {downloadReady ? "Descargar ConnekFly" : "Solicitar acceso"}
        </a>

        <a className="btn secondary" href={appLink}>
          Abrir ConnekFly
        </a>

        <button className="btn ghost" onClick={() => copy(inviteLink, "Link copiado")}>
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
