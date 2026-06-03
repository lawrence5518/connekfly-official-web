# ConnekFly Official Web — Repo completo limpio

Esta es la web oficial limpia para APK tester.

No necesita Environment Variables en Vercel.

## APK configurada

```text
https://github.com/lawrence5518/connekfly-official-web/releases/download/v0.1-tester/connekfly-tester.apk
```

## Rutas principales

```text
https://connekfly-official-web.vercel.app/
https://connekfly-official-web.vercel.app/i/lawrence
https://connekfly-official-web.vercel.app/api/qr?code=lawrence
```

## Importante

Este paquete ya incluye una ruta Stripe desactivada para que Vercel no falle si había una ruta vieja en GitHub:

```text
app/api/stripe/checkout/route.ts
```

## Cómo subir

Sube el contenido completo de este paquete a la raíz del repo `connekfly-official-web`.

La raíz debe quedar así:

```text
app/
components/
lib/
package.json
next.config.mjs
tsconfig.json
next-env.d.ts
README.md
```

No subas la carpeta contenedora completa. Sube el contenido.
