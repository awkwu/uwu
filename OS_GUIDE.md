# GUÍA POR SISTEMA OPERATIVO / OS-SPECIFIC GUIDE

---

## 🇪🇸 GUÍA POR SISTEMA OPERATIVO

### 1️⃣ CONFIGURACIÓN EN TAILSCALE (Todos los sistemas)

**Paso 1: Crear cuenta**
```
Ir a: https://tailscale.com/start
Opción: Crear cuenta
Métodos: Google, GitHub, Microsoft, o email
```

**Paso 2: Obtener Auth Key**
```
1. Acceder a: https://tailscale.com/admin
2. Panel izquierdo: "Settings" → "Keys"
3. Sección "Auth keys"
4. Botón: "Generate auth key"
5. Copiar el key completo
```

**Imagen: Diseño de Tailscale Admin**
```
┌─────────────────────────┐
│  TAILSCALE ADMIN        │
│  Settings               │
│  → Devices              │
│  → Users                │
│  → Access controls      │
│  → ACLs                 │
│  → [Keys] ← AQUÍ        │
└─────────────────────────┘
```

---

### 2️⃣ CONFIGURACIÓN EN GITHUB (Todos los sistemas)

**Paso 1: Ir a Secrets**
```
1. GitHub.com → Tu repositorio
2. Settings (pestaña superior derecha)
3. Izquierda: "Secrets and variables" → "Actions"
```

**Imagen: Navegación GitHub Settings**
```
Repository Home
    ↓
[Settings] tab (top right)
    ↓
Left sidebar → Secrets and variables → Actions
```

**Paso 2: Crear nuevo Secret**
```
1. Botón verde: "New repository secret"
2. Campo "Name": TAILSCALE_AUTH_KEY (exacto)
3. Campo "Secret": Pegar el Auth Key de Tailscale
4. Botón: "Add secret"
```

**Imagen: Formulario Add Secret**
```
┌──────────────────────────────┐
│ New repository secret        │
├──────────────────────────────┤
│ Name                         │
│ [TAILSCALE_AUTH_KEY........] │
├──────────────────────────────┤
│ Secret                       │
│ [••••••••••••••••••••••••••] │
│                              │
├──────────────────────────────┤
│ [Cancel] [Add secret]        │
└──────────────────────────────┘
```

---

### 3️⃣ EJECUTAR WORKFLOW EN GITHUB (Todos los sistemas)

**Paso 1: Ir a Actions**
```
1. GitHub.com → Tu repositorio
2. Tab: "Actions" (arriba)
3. Lista izquierda: "RDP" (workflow)
```

**Paso 2: Run Workflow**
```
1. Botón: "Run workflow" (color blanco/gris)
2. Dropdown: Branch select (main)
3. Botón: "Run workflow" (confirmar)
```

**Imagen: Workflow Selector**
```
Actions Tab
    ↓
Left sidebar:
  All workflows
  → [RDP workflow selected]
    
Main area:
  "Run workflow" button ← CLICK HERE
  Branch: main ↓
  [Run workflow] ← CONFIRM
```

---

### 4️⃣ MONITOREO DEL WORKFLOW

**Paso 1: Ver ejecución activa**
```
1. Workflow mostrará estado: "In progress"
2. Esperar 5-10 minutos aproximadamente
3. Verás los pasos ejecutándose:
   ✓ Configure Core RDP Settings (2 min)
   ✓ Create RDP User (1 min)
   ✓ Install Tailscale (2 min)
   ✓ Establish Tailscale Connection (3 min)
   ✓ Verify RDP Accessibility (1 min)
   ✓ Maintain Connection (activo)
```

**Imagen: Estado del Workflow**
```
Actions → RDP workflow
├─ Status: In progress ⟳
├─ Commit: ...
├─ Time: 5m 32s
└─ Jobs:
   ├─ ✓ Configure Core RDP Settings
   ├─ ✓ Create RDP User
   ├─ ✓ Install Tailscale
   ├─ ⟳ Establish Tailscale Connection
   └─ ... (upcoming)
```

**Paso 2: Obtener credenciales**
```
1. Click en el job: "secure-rdp"
2. Scroll hasta: "Maintain Connection"
3. Buscar:
   === RDP ACCESS ===
   Address: XX.XX.XX.XX
   Username: RDP
   Password: [contraseña aleatoria]
   ==================
4. Copiar estos datos
```

---

### 5️⃣ CONECTARSE POR RDP - WINDOWS

**Paso 1: Abrir aplicación RDP**
```
Método 1 (rápido):
1. Presionar: Windows Key + R
2. Escribir: mstsc
3. Presionar: Enter

Método 2 (búsqueda):
1. Menú Inicio
2. Escribir: "Conexión a Escritorio Remoto"
3. Hacer click
```

**Imagen: Búsqueda Windows**
```
Windows Start Menu
    ↓
[Escribir aquí]
"Conexión a Escritorio Remoto"
    ↓
[Click en resultado]
```

**Paso 2: Ingresar datos de conexión**
```
Ventana de Conexión abierta:
1. Campo "Equipo": Pegar IP de Tailscale
   Ejemplo: 100.64.45.123
2. Click: "Conectar"
   (O presionar Enter)
```

**Imagen: Conexión a Escritorio Remoto**
```
┌──────────────────────────────────┐
│ Conexión a Escritorio Remoto     │
├──────────────────────────────────┤
│                                  │
│ Equipo:                          │
│ [100.64.45.123................]   │
│                                  │
│ [Mostrar opciones ▼]              │
│                                  │
│             [Conectar]           │
│                                  │
└──────────────────────────────────┘
```

**Paso 3: Ingresar credenciales**
```
Pantalla de login:
1. Usuario: RDP (exacto)
2. Contraseña: [La del workflow]
3. Click: "OK" o Enter
```

**Imagen: Login RDP**
```
┌──────────────────────────────────┐
│ Seguridad de Windows             │
├──────────────────────────────────┤
│                                  │
│ Usuario:                         │
│ [RDP.........................]     │
│                                  │
│ Contraseña:                      │
│ [••••••••••••••••••••••••••]      │
│                                  │
│ ☐ Permitir guardar credenciales  │
│                                  │
│          [Cancelar] [OK]         │
│                                  │
└──────────────────────────────────┘
```

**¡Conectado!** ✓ Ahora tienes acceso al escritorio remoto

---

### 6️⃣ CONECTARSE POR RDP - MAC

**Requerimiento:** Microsoft Remote Desktop (gratuito)

**Paso 1: Descargar aplicación**
```
1. Abrir: App Store
2. Buscar: "Microsoft Remote Desktop"
3. Autor: Microsoft Corporation
4. Click: "Obtener" o "Instalar"
5. Esperar instalación
```

**Imagen: App Store - Microsoft Remote Desktop**
```
App Store
    ↓
Search: "Microsoft Remote Desktop"
    ↓
Result from Microsoft Corporation
    ↓
[Get] [Instalar]
```

**Paso 2: Agregar conexión**
```
1. Abrir: Microsoft Remote Desktop
2. Botón: "+ New" (agregar nueva conexión)
3. Llenar:
   - PC name: [IP de Tailscale]
   - User name: RDP
   - Contraseña: [La del workflow]
4. Save
```

**Imagen: Microsoft Remote Desktop - New Connection**
```
┌──────────────────────────────────┐
│ Add Desktop                      │
├──────────────────────────────────┤
│ PC name*                         │
│ [100.64.45.123................]   │
│                                  │
│ User name                        │
│ [RDP.........................]     │
│                                  │
│ Password                         │
│ [••••••••••••••••••••••••••]      │
│                                  │
│ [Cancel] [Add]                   │
└──────────────────────────────────┘
```

**Paso 3: Conectar**
```
1. En lista de conexiones
2. Hacer click en la conexión creada
3. Doble-click para conectar
4. Confirmar si pide validación
```

**¡Conectado!** ✓ Ahora tienes acceso al escritorio remoto

---

### 7️⃣ CONECTARSE POR RDP - LINUX

**Requiere:** Cliente RDP (Remmina recomendado)

**Paso 1: Instalar Remmina (Ubuntu/Debian)**
```
Abrir terminal y ejecutar:
sudo apt update
sudo apt install remmina remmina-plugin-rdp
```

**Paso 2: Instalar Remmina (Fedora/RHEL)**
```
Abrir terminal y ejecutar:
sudo dnf install remmina remmina-plugins-rdp
```

**Paso 3: Crear nueva conexión**
```
1. Abrir: Remmina
2. Menú: File → New
3. Conexión:
   - Nombre: Servidor RDP (ejempl)
   - Protocolo: RDP
   - Servidor: [IP Tailscale]
   - Usuario: RDP
   - Password: [Del workflow]
4. Save
```

**Imagen: Remmina - New Connection**
```
┌─────────────────────────────────┐
│ Remina Connection Parameters     │
├─────────────────────────────────┤
│ Name: [Servidor RDP............] │
│                                 │
│ Protocol: [RDP ▼]               │
│                                 │
│ Server: [100.64.45.123.......] │
│                                 │
│ Username: [RDP.................] │
│                                 │
│ Password: [••••••••••••••••••] │
│                                 │
│ [Cancel] [Save and Connect]     │
└─────────────────────────────────┘
```

**Paso 4: Conectar**
```
1. En lista de conexiones
2. Click derecho → Connect
3. O doble-click para conectar
```

**¡Conectado!** ✓ Ahora tienes acceso al escritorio remoto

---

### 8️⃣ DESCONECTARSE / TERMINAR

**Opción 1: Desconectar solo (mantener workflow)**
```
Windows/Mac/Linux:
1. En la sesión RDP
2. Botón superior derecho: "Disconnect"
   O Cerrar ventana → "Disconnect"
   Workflow sigue activo
```

**Opción 2: Detener todo (terminar workflow)**
```
1. GitHub → Actions → RDP workflow (activo)
2. Botón: "Cancel workflow"
3. Confirmar cancelación
4. Workflow se detiene
```

---

## 🇬🇧 OPERATING SYSTEM-SPECIFIC GUIDE

### 1️⃣ TAILSCALE SETUP (All systems)

**Step 1: Create account**
```
Go to: https://tailscale.com/start
Option: Create account
Methods: Google, GitHub, Microsoft, or email
```

**Step 2: Get Auth Key**
```
1. Access: https://tailscale.com/admin
2. Left panel: "Settings" → "Keys"
3. Section "Auth keys"
4. Button: "Generate auth key"
5. Copy the complete key
```

**Image: Tailscale Admin Layout**
```
┌─────────────────────────┐
│  TAILSCALE ADMIN        │
│  Settings               │
│  → Devices              │
│  → Users                │
│  → Access controls      │
│  → ACLs                 │
│  → [Keys] ← HERE        │
└─────────────────────────┘
```

---

### 2️⃣ GITHUB SETUP (All systems)

**Step 1: Go to Secrets**
```
1. GitHub.com → Your repository
2. Settings (top right tab)
3. Left: "Secrets and variables" → "Actions"
```

**Image: GitHub Settings Navigation**
```
Repository Home
    ↓
[Settings] tab (top right)
    ↓
Left sidebar → Secrets and variables → Actions
```

**Step 2: Create new Secret**
```
1. Green button: "New repository secret"
2. "Name" field: TAILSCALE_AUTH_KEY (exact)
3. "Secret" field: Paste the Tailscale Auth Key
4. Click: "Add secret"
```

**Image: Add Secret Form**
```
┌──────────────────────────────┐
│ New repository secret        │
├──────────────────────────────┤
│ Name                         │
│ [TAILSCALE_AUTH_KEY........] │
├──────────────────────────────┤
│ Secret                       │
│ [••••••••••••••••••••••••••] │
│                              │
├──────────────────────────────┤
│ [Cancel] [Add secret]        │
└──────────────────────────────┘
```

---

### 3️⃣ RUN WORKFLOW ON GITHUB (All systems)

**Step 1: Go to Actions**
```
1. GitHub.com → Your repository
2. Tab: "Actions" (top)
3. Left list: "RDP" (workflow)
```

**Step 2: Run Workflow**
```
1. Click: "Run workflow" button (white/gray)
2. Dropdown: Branch select (main)
3. Click: "Run workflow" (confirm)
```

**Image: Workflow Selector**
```
Actions Tab
    ↓
Left sidebar:
  All workflows
  → [RDP workflow selected]
    
Main area:
  "Run workflow" button ← CLICK HERE
  Branch: main ↓
  [Run workflow] ← CONFIRM
```

---

### 4️⃣ MONITOR THE WORKFLOW

**Step 1: View active execution**
```
1. Workflow will show status: "In progress"
2. Wait approximately 5-10 minutes
3. You'll see the steps executing:
   ✓ Configure Core RDP Settings (2 min)
   ✓ Create RDP User (1 min)
   ✓ Install Tailscale (2 min)
   ✓ Establish Tailscale Connection (3 min)
   ✓ Verify RDP Accessibility (1 min)
   ✓ Maintain Connection (active)
```

**Image: Workflow Status**
```
Actions → RDP workflow
├─ Status: In progress ⟳
├─ Commit: ...
├─ Time: 5m 32s
└─ Jobs:
   ├─ ✓ Configure Core RDP Settings
   ├─ ✓ Create RDP User
   ├─ ✓ Install Tailscale
   ├─ ⟳ Establish Tailscale Connection
   └─ ... (upcoming)
```

**Step 2: Get credentials**
```
1. Click on job: "secure-rdp"
2. Scroll to: "Maintain Connection"
3. Look for:
   === RDP ACCESS ===
   Address: XX.XX.XX.XX
   Username: RDP
   Password: [random password]
   ==================
4. Copy this data
```

---

### 5️⃣ CONNECT VIA RDP - WINDOWS

**Step 1: Open RDP application**
```
Method 1 (quick):
1. Press: Windows Key + R
2. Type: mstsc
3. Press: Enter

Method 2 (search):
1. Start Menu
2. Type: "Remote Desktop Connection"
3. Click result
```

**Image: Windows Search**
```
Windows Start Menu
    ↓
[Type here]
"Remote Desktop Connection"
    ↓
[Click result]
```

**Step 2: Enter connection details**
```
Connection window open:
1. "Computer" field: Paste Tailscale IP
   Example: 100.64.45.123
2. Click: "Connect"
   (Or press Enter)
```

**Image: Remote Desktop Connection**
```
┌──────────────────────────────────┐
│ Remote Desktop Connection        │
├──────────────────────────────────┤
│                                  │
│ Computer:                        │
│ [100.64.45.123................]   │
│                                  │
│ [Show Options ▼]                 │
│                                  │
│             [Connect]            │
│                                  │
└──────────────────────────────────┘
```

**Step 3: Enter credentials**
```
Login screen:
1. Username: RDP (exact)
2. Password: [From workflow]
3. Click: "OK" or Enter
```

**Image: RDP Login**
```
┌──────────────────────────────────┐
│ Windows Security                 │
├──────────────────────────────────┤
│                                  │
│ User:                            │
│ [RDP.........................]     │
│                                  │
│ Password:                        │
│ [••••••••••••••••••••••••••]      │
│                                  │
│ ☐ Allow saving credentials      │
│                                  │
│          [Cancel] [OK]           │
│                                  │
└──────────────────────────────────┘
```

**Connected!** ✓ You now have remote desktop access

---

### 6️⃣ CONNECT VIA RDP - MAC

**Requirement:** Microsoft Remote Desktop (free)

**Step 1: Download application**
```
1. Open: App Store
2. Search: "Microsoft Remote Desktop"
3. Author: Microsoft Corporation
4. Click: "Get" or "Install"
5. Wait for installation
```

**Image: App Store - Microsoft Remote Desktop**
```
App Store
    ↓
Search: "Microsoft Remote Desktop"
    ↓
Result from Microsoft Corporation
    ↓
[Get] [Install]
```

**Step 2: Add connection**
```
1. Open: Microsoft Remote Desktop
2. Button: "+ New" (add new connection)
3. Fill in:
   - PC name: [Tailscale IP]
   - User name: RDP
   - Password: [From workflow]
4. Save
```

**Image: Microsoft Remote Desktop - New Connection**
```
┌──────────────────────────────────┐
│ Add Desktop                      │
├──────────────────────────────────┤
│ PC name*                         │
│ [100.64.45.123................]   │
│                                  │
│ User name                        │
│ [RDP.........................]     │
│                                  │
│ Password                         │
│ [••••••••••••••••••••••••••]      │
│                                  │
│ [Cancel] [Add]                   │
└──────────────────────────────────┘
```

**Step 3: Connect**
```
1. In connections list
2. Click the connection you created
3. Double-click to connect
4. Confirm if validation is requested
```

**Connected!** ✓ You now have remote desktop access

---

### 7️⃣ CONNECT VIA RDP - LINUX

**Requires:** RDP Client (Remmina recommended)

**Step 1: Install Remmina (Ubuntu/Debian)**
```
Open terminal and run:
sudo apt update
sudo apt install remmina remmina-plugin-rdp
```

**Step 2: Install Remmina (Fedora/RHEL)**
```
Open terminal and run:
sudo dnf install remmina remmina-plugins-rdp
```

**Step 3: Create new connection**
```
1. Open: Remmina
2. Menu: File → New
3. Connection:
   - Name: RDP Server (example)
   - Protocol: RDP
   - Server: [Tailscale IP]
   - Username: RDP
   - Password: [From workflow]
4. Save
```

**Image: Remmina - New Connection**
```
┌─────────────────────────────────┐
│ Remmina Connection Parameters    │
├─────────────────────────────────┤
│ Name: [RDP Server..............]  │
│                                 │
│ Protocol: [RDP ▼]               │
│                                 │
│ Server: [100.64.45.123.......] │
│                                 │
│ Username: [RDP.................] │
│                                 │
│ Password: [••••••••••••••••••] │
│                                 │
│ [Cancel] [Save and Connect]     │
└─────────────────────────────────┘
```

**Step 4: Connect**
```
1. In connections list
2. Right-click → Connect
3. Or double-click to connect
```

**Connected!** ✓ You now have remote desktop access

---

### 8️⃣ DISCONNECT / TERMINATE

**Option 1: Disconnect only (keep workflow)**
```
Windows/Mac/Linux:
1. In RDP session
2. Top right button: "Disconnect"
   Or Close window → "Disconnect"
   Workflow stays active
```

**Option 2: Stop everything (terminate workflow)**
```
1. GitHub → Actions → RDP workflow (active)
2. Button: "Cancel workflow"
3. Confirm cancellation
4. Workflow stops
```

---

## 📞 Support

**Spanish:** Consulta el archivo README.md  
**English:** Check the README.md file
