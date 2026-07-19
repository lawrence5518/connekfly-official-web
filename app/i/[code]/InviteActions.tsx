"use client";

import { useEffect, useMemo, useState } from "react";

type InviteActionsProps = {
  inviteCode: string;
  apkUrl: string;
};

const STORAGE_KEY = "connekfly.pendingInvite.v1";
const MAX_AGE_MS = 14 * 24 * 60 * 60 * 1000;

type StoredInvite = {
  code: string;
  savedAt: number;
};

function normalizeCode(value: string) {
  return value.trim().replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 80);
}

function storeInvite(code: string) {
  const normalized = normalizeCode(code);
  if (!normalized) return;

  const payload: StoredInvite = {
    code: normalized,
    savedAt: Date.now(),
  };

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // El enlace continúa funcionando aunque el navegador bloquee almacenamiento.
  }
}

function readStoredInvite(): StoredInvite | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<StoredInvite>;
    const code = normalizeCode(String(parsed.code || ""));
    const savedAt = Number(parsed.savedAt || 0);

    if (!code || !Number.isFinite(savedAt) || Date.now() - savedAt > MAX_AGE_MS) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return { code, savedAt };
  } catch {
    return null;
  }
}

export default function InviteActions({ inviteCode, apkUrl }: InviteActionsProps) {
  const normalizedCode = useMemo(() => normalizeCode(inviteCode), [inviteCode]);
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [stored, setStored] = useState(false);

  const openAppUrl = `connekfly://invite/${encodeURIComponent(normalizedCode)}`;
  const downloadUrl = `${apkUrl}${apkUrl.includes("?") ? "&" : "?"}ref=${encodeURIComponent(normalizedCode)}`;

  useEffect(() => {
    if (!normalizedCode) return;
    storeInvite(normalizedCode);
    setStored(readStoredInvite()?.code === normalizedCode);
  }, [normalizedCode]);

  function handleDownload() {
    storeInvite(normalizedCode);
    setDownloadStarted(true);
  }

  function handleOpenApp() {
    storeInvite(normalizedCode);
    window.location.assign(openAppUrl);
  }

  return (
    <div className="invite-actions-block">
      <div className="hero-actions centered invite-primary-actions">
        <button className="primary-button big" type="button" onClick={handleOpenApp}>
          Abrir ConnekFly y conectar
        </button>
        <a className="soft-button big" href={downloadUrl} onClick={handleDownload}>
          Descargar APK oficial
        </a>
      </div>

      <div className="invite-status" aria-live="polite">
        <strong>{downloadStarted ? "Después de instalar" : "Invitación preparada"}</strong>
        <span>
          {downloadStarted
            ? "Vuelve a esta página y toca “Abrir ConnekFly y conectar”."
            : stored
              ? "El código quedó guardado temporalmente en este navegador."
              : "Conservaremos este código mientras completas la instalación."}
        </span>
      </div>

      <div className="invite-fallback">
        <span>¿Android no abrió la app?</span>
        <p>
          Abre ConnekFly desde el icono y usa este código como recuperación manual: <strong>{normalizedCode}</strong>
        </p>
      </div>
    </div>
  );
}
