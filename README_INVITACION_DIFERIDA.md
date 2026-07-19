# ConnekFly Web — Invitación diferida integrada

Base utilizada: `connekfly_official_web_premium_v3.zip`.

## Flujo implementado

1. El usuario abre `/i/CODIGO`.
2. La página conserva el código durante 14 días en el navegador.
3. El usuario descarga la APK oficial.
4. Después de instalar, vuelve a la misma página.
5. El botón **Abrir ConnekFly y conectar** abre `connekfly://invite/CODIGO`.
6. El código queda visible como recuperación manual.

## Archivos reconstruidos

- `app/i/[code]/page.tsx`
- `app/i/[code]/InviteBridge.tsx`
- `app/globals.css`

No se modificaron Stripe, Wise, Supabase, la portada ni las rutas comerciales.
