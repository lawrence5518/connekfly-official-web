import { siteUrl, apkDownloadUrl as envApkDownloadUrl } from "@/lib/env";

export function normalizeCode(code?: string | null): string {
  const clean = (code || "connekfly")
    .trim()
    .replace(/[^a-zA-Z0-9_-]/g, "")
    .slice(0, 48);

  return clean || "connekfly";
}

export function inviteUrl(code: string): string {
  return `${siteUrl()}/i/${encodeURIComponent(normalizeCode(code))}`;
}

export function appInviteUrl(code: string): string {
  return `connekfly://invite?code=${encodeURIComponent(normalizeCode(code))}`;
}

export function apkDownloadUrl(code: string): string {
  const external = envApkDownloadUrl();
  if (!external) return "";

  const separator = external.includes("?") ? "&" : "?";
  return `${external}${separator}ref=${encodeURIComponent(normalizeCode(code))}`;
}
