# ConnekFly Web Oficial — entrada con invitación

Esta web conserva el código `CF-...` y entrega una entrada real hacia ConnekFly.

## Variables Vercel

```env
NEXT_PUBLIC_SITE_URL=https://connekfly-official-web.vercel.app
NEXT_PUBLIC_APK_DOWNLOAD_URL=https://TU-LINK-PUBLICO/connekfly.apk
NEXT_PUBLIC_SUPPORT_EMAIL=ConnekFly.app@gmail.com
```

## Flujo

`/i/CF-XXXX` muestra la invitación, permite abrir la app instalada con `connekfly://invite?code=CF-XXXX` y agrega el código al link de descarga mediante `?ref=CF-XXXX`.

Cuando la persona entra a la app y valida su acceso, Android procesa el código y Supabase crea contacto mutuo, referido y vínculo CRM.
