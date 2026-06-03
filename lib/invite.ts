import { APK_DOWNLOAD_URL, SITE_URL } from "@/lib/constants";

export function normalizeCode(code?: string | null): string {
  const clean = (code || "connekfly")
    .trim()
    .replace(/[^a-zA-Z0-9_-]/g, "")
    .slice(0, 48);

  return clean || "connekfly";
}

export function inviteUrl(code: string): string {
  return `${SITE_URL}/i/${encodeURIComponent(normalizeCode(code))}`;
}

export function apkDownloadUrl(code: string): string {
  const separator = APK_DOWNLOAD_URL.includes("?") ? "&" : "?";
  return `${APK_DOWNLOAD_URL}${separator}ref=${encodeURIComponent(normalizeCode(code))}`;
}
