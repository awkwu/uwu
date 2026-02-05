# RDP Remote Desktop con Tailscale

[English Version](#english-version) | [Versión en Español](#versión-en-español)

---

## Versión en Español

### 📋 Descripción del Proyecto

Este proyecto automatiza la configuración de un **escritorio remoto (RDP)** en una máquina Windows utilizando **GitHub Actions** e integración con **Tailscale** para acceso seguro en red.

**Características principales:**
- ✅ Automatización completa de configuración RDP
- ✅ Conexión segura a través de Tailscale
- ✅ Creación automática de usuario con contraseña aleatoria segura
- ✅ Configuración de firewall automática
- ✅ Control total mediante GitHub Actions

---

### 🚀 Guía de Instalación y Uso

#### Paso 1: Requisitos Previos

✓ Cuenta de GitHub con acceso al repositorio  
✓ Cuenta de Tailscale (registrarse en https://tailscale.com)  
✓ Token de autenticación de Tailscale (Auth Key)  

**Imagen: Ubicación del Auth Key en Tailscale**
```
[Aquí va la imagen de: https://tailscale.com/admin/authkeys]
- Acceder a Tailscale Admin Console
- Ir a "Settings" → "Keys"
- Crear o copiar un "Auth Key"
```

---

#### Paso 2: Configurar el Secret en GitHub

1. Ir a tu repositorio en GitHub
2. Navegar a **Settings** → **Secrets and variables** → **Actions**

**Imagen: Ubicación de Secrets en GitHub**
```
GitHub → Repository → Settings → Secrets and variables → Actions
```

3. Hacer clic en **"New repository secret"**
4. Llenar los datos:
   - **Name:** `TAILSCALE_AUTH_KEY`
   - **Secret:** Pegar el Auth Key de Tailscale (copiar completo)

5. Hacer clic en **"Add secret"**

**Imagen: Formulario de nuevo secret**
```
[Aquí va la imagen del formulario de crear nuevo secret]
- Name input field con "TAILSCALE_AUTH_KEY"
- Secret input field
- "Add secret" button
```

---

#### Paso 3: Ejecutar el Workflow

1. Ir a **Actions** en tu repositorio
2. Seleccionar el workflow **"RDP"**
3. Hacer clic en **"Run workflow"**
4. Confirmar que quieres ejecutar

**Imagen: Panel de Actions en GitHub**
```
[Aquí va la imagen del botón "Run workflow"]
GitHub → Actions → RDP workflow → Run workflow
```

---

#### Paso 4: Monitoreo de Ejecución

El workflow realizará automáticamente:

1. **Configuración RDP Base**
   - Habilita Remote Desktop en Windows
   - Desactiva Network Level Authentication (si es necesario)
   - Abre el puerto 3389 en firewall

2. **Creación de Usuario**
   - Crea usuario: `RDP`
   - Genera contraseña segura aleatoria
   - Agrega a grupos de Administradores y Remote Desktop Users

3. **Instalación de Tailscale**
   - Descarga e instala Tailscale versión 1.82.0
   - Configura conexión automática

4. **Conexión Tailscale**
   - Conecta con el Auth Key proporcionado
   - Asigna nombre del host automático
   - Obtiene IP de Tailscale

5. **Verificación de Acceso**
   - Comprueba que el puerto 3389 está accesible
   - Valida la conexión TCP

6. **Mantener Conexión Activa**
   - El runner se mantiene activo
   - Espera conexiones RDP

**Imagen: Logs de ejecución exitosa**
```
[Aquí va la imagen del workflow completado]
- ✓ Configure Core RDP Settings
- ✓ Create RDP User with Secure Password
- ✓ Install Tailscale
- ✓ Establish Tailscale Connection
- ✓ Verify RDP Accessibility
- ✓ Maintain Connection
```

---

#### Paso 5: Conectarse por RDP

En la sección **"Maintain Connection"** del workflow, verás:

```
=== RDP ACCESS ===
Address: [IP de Tailscale]
Username: RDP
Password: [Contraseña generada]
==================
```

**En tu máquina local:**

**Windows:**
1. Abre el menú Inicio
2. Escribe "Conexión a Escritorio Remoto"
3. Ingresa: `[IP_TAILSCALE]`
4. Usuario: `RDP`
5. Contraseña: (copiar del workflow)

**Imagen: Conexión a Escritorio Remoto en Windows**
```
[Aquí va la imagen de "Conexión a Escritorio Remoto"]
- Campo de dirección del equipo
- Botón "Conectar"
```

**Mac/Linux:**
Usar cliente RDP disponible (Microsoft Remote Desktop, Remmina, etc.)

---

#### Paso 6: Finalizar la Sesión

En GitHub Actions:
1. Ir a la sección de **Workflows** en ejecución
2. Hacer clic en el workflow activo
3. Hacer clic en **"Cancel workflow"** para terminar

---

### ⚙️ Personalización Avanzada

#### Cambiar el nombre de usuario RDP
En `.github/workflows/main.yml`, línea con `New-LocalUser -Name "RDP"`:
Cambiar `"RDP"` por el nombre deseado

#### Cambiar la versión de Tailscale
En `.github/workflows/main.yml`, buscar:
```powershell
$tsUrl = "https://pkgs.tailscale.com/stable/tailscale-setup-1.82.0-amd64.msi"
```
Reemplazar `1.82.0` por la versión deseada

#### Cambiar puerto RDP (avanzado)
Modificar `localport=3389` en la regla de firewall del workflow

---

### 🔒 Seguridad

- ✅ Las contraseñas se generan aleatoriamente
- ✅ Se usan caracteres especiales y números
- ✅ El Auth Key de Tailscale está protegido en GitHub Secrets
- ✅ La conectividad se valida automáticamente

---

### ❓ Preguntas Frecuentes

**P: ¿Por qué mi workflow falla?**
R: Comprueba que:
- El Secret `TAILSCALE_AUTH_KEY` está configurado correctamente
- El Auth Key no ha expirado en Tailscale
- La máquina Windows está disponible

**P: ¿Puedo usar esto gratis?**
R: GitHub Actions tiene 3,000 minutos/mes gratis. Tailscale ofrece plan gratuito.

**P: ¿Qué pasa después de desconectarme?**
R: El runner sigue activo. Puedes reconectar en cualquier momento desde RDP.

---

## English Version

### 📋 Project Description

This project automates the configuration of a **Remote Desktop (RDP)** on a Windows machine using **GitHub Actions** and integration with **Tailscale** for secure network access.

**Key Features:**
- ✅ Complete RDP configuration automation
- ✅ Secure connection through Tailscale
- ✅ Automatic user creation with secure random password
- ✅ Automatic firewall configuration
- ✅ Full control via GitHub Actions

---

### 🚀 Installation and Usage Guide

#### Step 1: Prerequisites

✓ GitHub account with repository access  
✓ Tailscale account (register at https://tailscale.com)  
✓ Tailscale authentication token (Auth Key)  

**Image: Location of Auth Key in Tailscale**
```
[Image goes here: https://tailscale.com/admin/authkeys]
- Access Tailscale Admin Console
- Go to "Settings" → "Keys"
- Create or copy an "Auth Key"
```

---

#### Step 2: Configure Secret in GitHub

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**

**Image: Location of Secrets in GitHub**
```
GitHub → Repository → Settings → Secrets and variables → Actions
```

3. Click **"New repository secret"**
4. Fill in the details:
   - **Name:** `TAILSCALE_AUTH_KEY`
   - **Secret:** Paste the Tailscale Auth Key (complete copy)

5. Click **"Add secret"**

**Image: New secret form**
```
[Image goes here: new secret form]
- Name input field with "TAILSCALE_AUTH_KEY"
- Secret input field
- "Add secret" button
```

---

#### Step 3: Run the Workflow

1. Go to **Actions** in your repository
2. Select the **"RDP"** workflow
3. Click **"Run workflow"**
4. Confirm that you want to execute it

**Image: Actions Panel in GitHub**
```
[Image goes here: "Run workflow" button]
GitHub → Actions → RDP workflow → Run workflow
```

---

#### Step 4: Monitor Execution

The workflow will automatically perform:

1. **Base RDP Configuration**
   - Enables Remote Desktop on Windows
   - Disables Network Level Authentication (if needed)
   - Opens port 3389 in firewall

2. **User Creation**
   - Creates user: `RDP`
   - Generates secure random password
   - Adds to Administrator and Remote Desktop User groups

3. **Tailscale Installation**
   - Downloads and installs Tailscale version 1.82.0
   - Configures automatic connection

4. **Tailscale Connection**
   - Connects with provided Auth Key
   - Automatically assigns hostname
   - Obtains Tailscale IP

5. **Access Verification**
   - Checks that port 3389 is accessible
   - Validates TCP connection

6. **Keep Connection Active**
   - Runner remains active
   - Waits for RDP connections

**Image: Successful execution logs**
```
[Image goes here: completed workflow]
- ✓ Configure Core RDP Settings
- ✓ Create RDP User with Secure Password
- ✓ Install Tailscale
- ✓ Establish Tailscale Connection
- ✓ Verify RDP Accessibility
- ✓ Maintain Connection
```

---

#### Step 5: Connect via RDP

In the **"Maintain Connection"** section of the workflow, you'll see:

```
=== RDP ACCESS ===
Address: [Tailscale IP]
Username: RDP
Password: [Generated Password]
==================
```

**On your local machine:**

**Windows:**
1. Open Start menu
2. Type "Remote Desktop Connection"
3. Enter: `[TAILSCALE_IP]`
4. Username: `RDP`
5. Password: (copy from workflow)

**Image: Remote Desktop Connection on Windows**
```
[Image goes here: "Remote Desktop Connection"]
- Computer address field
- Connect button
```

**Mac/Linux:**
Use available RDP client (Microsoft Remote Desktop, Remmina, etc.)

---

#### Step 6: End the Session

In GitHub Actions:
1. Go to the **Workflows** section in progress
2. Click on the active workflow
3. Click **"Cancel workflow"** to terminate

---

### ⚙️ Advanced Customization

#### Change RDP Username
In `.github/workflows/main.yml`, line with `New-LocalUser -Name "RDP"`:
Change `"RDP"` to desired username

#### Change Tailscale Version
In `.github/workflows/main.yml`, find:
```powershell
$tsUrl = "https://pkgs.tailscale.com/stable/tailscale-setup-1.82.0-amd64.msi"
```
Replace `1.82.0` with desired version

#### Change RDP Port (advanced)
Modify `localport=3389` in the firewall rule of the workflow

---

### 🔒 Security

- ✅ Passwords are generated randomly
- ✅ Special characters and numbers are used
- ✅ Tailscale Auth Key is protected in GitHub Secrets
- ✅ Connectivity is automatically validated

---

### ❓ Frequently Asked Questions

**Q: Why does my workflow fail?**
A: Check that:
- The `TAILSCALE_AUTH_KEY` secret is configured correctly
- The Auth Key hasn't expired in Tailscale
- The Windows machine is available

**Q: Can I use this for free?**
A: GitHub Actions has 3,000 free minutes/month. Tailscale offers a free plan.

**Q: What happens after I disconnect?**
A: The runner stays active. You can reconnect anytime via RDP.

---

## 📞 Support

For issues or questions:
- GitHub Issues: `[Agregar enlace al repositorio]`
- Tailscale Support: https://tailscale.com/contact/support/
- GitHub Actions Docs: https://docs.github.com/en/actions

---

## 📄 License

[Specify your license here]

---

## ⭐ Contribuciones

¿Tienes mejoras? Las contribuciones son bienvenidas. Por favor, abre un Pull Request.

---

**Last Updated:** February 5, 2026  
**Maintainer:** awkwu
