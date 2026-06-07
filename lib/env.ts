export function siteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || "https://connekfly-official-web.vercel.app";
  return raw.replace(/\/$/, "");
}

export function apkDownloadUrl(): string {
  return process.env.NEXT_PUBLIC_APK_DOWNLOAD_URL || "";
}

export function supportEmail(): string {
  return process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "ConnekFly.app@gmail.com";
}
