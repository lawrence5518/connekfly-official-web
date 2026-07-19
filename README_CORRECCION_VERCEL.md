# Corrección Vercel — npm install

## Causa exacta
El paquete anterior incluía un `package-lock.json` generado dentro del entorno de trabajo. Ese archivo apuntaba a un registro npm interno que Vercel no puede acceder. Por eso Vercel falló antes de compilar con:

`Command "npm install" exited with 1`

## Corrección aplicada
- Se eliminó `package-lock.json` del paquete.
- No se modificaron `package.json`, las dependencias, la portada ni las rutas comerciales.
- Se conserva el módulo integrado de invitación diferida.

## Subida
Subir/reemplazar el contenido del repositorio con este paquete. Confirmar que en la raíz de GitHub NO exista `package-lock.json` antes del nuevo despliegue.
