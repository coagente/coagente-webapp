# 📧 Configuración de EmailJS para Formulario de Contacto

Este documento explica cómo configurar EmailJS para que el formulario de contacto envíe correos a `info@coagente.com`.

## 🚀 Pasos para Configurar EmailJS

### 1. Crear Cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Regístrate con tu email (puedes usar `info@coagente.com`)
3. Confirma tu email

### 2. Configurar Servicio de Email
1. En el dashboard, ve a **"Email Services"**
2. Click en **"Add New Service"**
3. Selecciona **"Gmail"** (recomendado para empresas)
4. Sigue las instrucciones para conectar tu cuenta Gmail
5. **Anota el Service ID** (ej: `service_op14y7a`)

### 3. Crear Template de Email
1. Ve a **"Email Templates"**
2. Click en **"Create New Template"**
3. Configura el template con estos valores:

**Template Name:** `Contacto Coagente`

**Subject:** `Nuevo contacto desde coagente.com - {{from_name}}`

**Content:**
```
Nuevo mensaje de contacto desde el sitio web de Coagente:

Nombre: {{from_name}}
Email: {{from_email}}
Empresa: {{company}}
Tipo de Proyecto: {{project_type}}
Presupuesto: {{budget}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de coagente.com
```

**To Email:** `info@coagente.com`
**From Name:** `{{from_name}}`
**From Email:** `{{from_email}}`
**Reply To:** `{{reply_to}}`

4. **Anota el Template ID** (ej: `template_xyz789`)

### 4. Obtener Public Key
1. Ve a **"Account" > "General"**
2. Copia tu **Public Key** (ej: `abcdefg123456`)

### 5. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_op14y7a
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_wmhhsin
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=Evbsb35ak4Bwhndib
```

**⚠️ Importante:** Reemplaza los valores de ejemplo con tus valores reales.

### 6. Desplegar Cambios

```bash
# Instalar dependencias (si no está instalado)
npm install

# Construir y desplegar
npm run build
flyctl deploy
```

### 7. Configurar Variables en Fly.io

```bash
# Configurar variables de entorno en producción
flyctl secrets set NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
flyctl secrets set NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id  
flyctl secrets set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

## ✅ Verificar Funcionamiento

1. Ve a https://coagente-webapp.fly.dev/
2. Llena el formulario de contacto
3. Verifica que el email llegue a `info@coagente.com`

## 📊 Límites Gratuitos

EmailJS Plan Gratuito incluye:
- **200 emails por mes**
- **2 servicios de email**
- **1 template**
- **Soporte básico**

Para más volumen, considera actualizar al plan pagado.

## 🔧 Troubleshooting

### Error: "Failed to send email"
- Verifica que las variables de entorno estén correctas
- Revisa que el servicio esté conectado correctamente
- Verifica que el template ID sea correcto

### No llegan los emails
- Revisa la carpeta de spam
- Verifica que el email de destino sea correcto en el template
- Asegúrate de que el servicio Gmail esté autorizado

### Errores de CORS
- EmailJS maneja CORS automáticamente, no debería haber problemas

## 📞 Soporte

Si tienes problemas:
1. Revisa la documentación de EmailJS: https://www.emailjs.com/docs/
2. Verifica la consola del navegador para errores
3. Contacta soporte de EmailJS si es necesario

---
✨ **Una vez configurado, los emails llegarán automáticamente a info@coagente.com cada vez que alguien complete el formulario.** 