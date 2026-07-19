"use client";

import { useEffect } from "react";

type InviteBridgeProps = {
  inviteCode: string;
  apkUrl: string;
};

const STORAGE_KEY = "connekfly.pendingInvite.v1";
const STORAGE_TTL_MS = 14 * 24 * 60 * 60 * 1000;

function normalizeInviteCode(value: string): string {
  return value.trim().replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 80);
}

function persistInvite(code: string): void {
  const normalized = normalizeInviteCode(code);
  if (!normalized) return;

  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        code: normalized,
        savedAt: Date.now(),
        expiresAt: Date.now() + STORAGE_TTL_MS,
      }),
    );
  } catch {
    // El flujo principal sigue disponible aunque el navegador bloquee storage.
  }
}

export default function InviteBridge({ inviteCode, apkUrl }: InviteBridgeProps) {
  const normalizedCode = normalizeInviteCode(inviteCode);
  const encodedCode = encodeURIComponent(normalizedCode);
  const separator = apkUrl.includes("?") ? "&" : "?";
  const downloadUrl = `${apkUrl}${separator}ref=${encodedCode}`;
  const deepLinkUrl = `connekfly://invite/${encodedCode}`;

  useEffect(() => {
    persistInvite(normalizedCode);
  }, [normalizedCode]);

  function openConnekFly(): void {
    persistInvite(normalizedCode);
    window.location.href = deepLinkUrl;
  }

  function prepareDownload(): void {
    persistInvite(normalizedCode);
  }

  return (
    <div className="invite-bridge">
      <div className="hero-actions centered invite-actions">
        <button
          className="primary-button big"
          type="button"
          onClick={openConnekFly}
        >
          Abrir ConnekFly y conectar
        </button>

        <a
          className="soft-button big"
          href={downloadUrl}
          onClick={prepareDownload}
        >
          Descargar APK oficial
        </a>
      </div>

      <section className="invite-help" aria-label="Pasos para completar la invitación">
        <strong>Después de instalar</strong>
        <p>
          Regresa a esta misma página y pulsa “Abrir ConnekFly y conectar”.
          El código permanecerá visible como respaldo.
        </p>
      </section>

      <section className="invite-manual" aria-label="Código de recuperación manual">
        <span>Recuperación manual</span>
        <p>
          Si Android no abre la app, inicia ConnekFly desde el icono e ingresa:
        </p>
        <strong>{normalizedCode}</strong>
      </section>
    </div>
  );
}
