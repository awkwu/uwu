# PREGUNTAS FRECUENTES Y SOLUCIÓN DE PROBLEMAS
# FAQ and Troubleshooting

---

## 🇪🇸 PREGUNTAS FRECUENTES - ESPAÑOL

### 📌 CONFIGURACIÓN INICIAL

**P: ¿En qué orden hago los pasos?**
R: 1. Crear cuenta Tailscale → 2. Obtener Auth Key → 3. Agregar Secret en GitHub → 4. Ejecutar Workflow → 5. Conectar por RDP

**P: ¿Mé piden dinero en algún lado?**
R: No. GitHub Actions es gratis (3,000 min/mes). Tailscale ofrece plan gratuito ilimitado. Todo es 100% gratuito.

**P: ¿Es la misma contraseña cada vez?**
R: No. Cada vez que ejecutas el workflow, genera una contraseña NUEVA accionalmente.

**P: ¿Puedo ejecutar múltiples sesiones RDP a la vez?**
R: No. Una sola sesión por workflow. Si quieres otra, debe ser en otro runners/repositorio o esperar.

---

### 🔑 PROBLEMAS CON AUTH KEY

**P: ¿Dónde encuentro el Auth Key en Tailscale?**
R: Tailscale Admin → Settings → Keys → Auth keys → Copiar uno

**P: El Auth Key no funciona, ¿qué pasó?**
R: Posibles causas:
- El key tiene espacios en blanco (copiar sin espacios)
- El key expiró (generar uno nuevo)
- El key fue invalidado en la admin console

**P: ¿Cómo sé si mi Auth Key está activo?**
R: En Tailscale Admin, bajo "Auth keys":
- ✓ Verde/activo: Puede usarse
- ✗ Gris/inactivo: No se puede usar (generar nuevo)

**P: ¿El Auth Key de GitHub vuelve a mostrar después de guardarlo?**
R: No, es correcto. GitHub nunca muestra secretos por seguridad. Solo se muestra como "●●●●●●●"

---

### ⚡ PROBLEMAS CON WORKFLOW

**P: El workflow falla en el primer paso. ¿Por qué?**
R: 99% de veces es por:
1. Secret `TAILSCALE_AUTH_KEY` no configurado
2. Secret mal copiado (con espacios)
3. Revisar en: Settings → Secrets and variables → Actions

**P: El workflow toma mucho tiempo. ¿Normal?**
R: Sí, 5-10 minutos es normal:
- 1 min: Configuración Windows y reglas firewall
- 1 min: Creación de usuario
- 2-3 min: Descarga e instalación de Tailscale
- 1 min: Conexión a Tailscale
- El resto: Esperando conexiones RDP

**P: ¿Qué significa "Maintain Connection - In progress"?**
R: Que el runner está activo y listo para recibir conexiones RDP. Es correcto.

**P: El workflow se canceló después de 60 minutos**
R: GitHub Actions tiene límite de 6 horas por workflow, pero en tu caso probablemente:
- Alcanzó el límite de 1 hora de ejecución
- Fue cancelado manualmente
- Hubo timeout de red

Solución: Ejecuta el workflow nuevamente.

---

### 📡 PROBLEMAS CON CONEXIÓN RDP

**P: Pongo la IP pero me dice "No se puede conectar"**

Revisa:
```
1. ✓ IP es correcta (copiar exacto del workflow)
2. ✓ Tienes Tailscale instalado localmente
3. ✓ Estás conectado a tu red Tailscale
4. ✓ El usuario RDP es exacto (mayúsculas)
5. ✓ La contraseña es exacta (RDP genera aleatorio)
6. ✓ Puerto 3389 no está bloqueado en tu firewall
```

**P: Ingreso usuario y contraseña pero dice "acceso denegado"**

Causas:
- Usuario: Debe ser exactamente `RDP` (mayúsculas)
- Contraseña: Debe ser la exacta del workflow (diferencian mayúsculas/minúsculas)
- Revisar: Copiar sin espacios al inicio o final

**P: ¿Necesito Tailscale instalado en mi máquina local?**
R: Sí, en tu máquina cliente necesitas:
- Windows: Tailscale instalado
- Mac: Tailscale instalado
- Linux: Tailscale instalado

Tailscale actúa como "túnel" entre tu máquina y el servidor RDP.

**P: ¿Puedo conectar desde cualquier red WiFi?**
R: Sí. Tailscale crea una red privada VPN. Funciona desde cualquier conexión, cualquier país.

---

### 🔍 CREDENCIALES Y SEGURIDAD

**P: ¿Dónde veo la contraseña del usuario RDP?**
R: En el workflow:
1. GitHub → Actions → RDP workflow (ejecutado)
2. Click en job: "secure-rdp"
3. Baja hasta: "Maintain Connection"
4. Busca:
```
=== RDP ACCESS ===
Address: 100.64.45.123
Username: RDP
Password: Aq7#mK2$xL9@
==================
```

**P: La contraseña tiene caracteres raros. ¿Es normal?**
R: Sí, es seguridad. La contraseña contiene:
- Mayúsculas (A-Z)
- Minúsculas (a-z)
- Números (0-9)
- Caracteres especiales (!@#$%^&*)

Esto hace que sea muy segura.

**P: ¿Puedo cambiar la contraseña manualmente?**
R: Sí, pero:
1. Solo funciona dentro de esa sesión RDP
2. Si ejecutas workflow nuevamente, genera contraseña nueva
3. Para cambiar de manera permanente: Editar el workflow

**P: ¿Alguien puede acceder sin la contraseña?**
R: No, porque:
- IP: Solo accesible por Tailscale (red privada)
- Usuario: Must be `RDP`
- Contraseña: Aleatoria y segura
- Firewall: Solo puerto 3389 abierto

---

### 🎯 CASOS DE USO Y LIMITACIONES

**P: ¿Puedo usar esto para jugar en nube?**
R: Sí, técnicamente. Pero:
- GitHub Actions runners tienen GPU limitada
- Ancho de banda RDP es limitado
- No está optimizado para gaming

**P: ¿Puedo instalr software en el servidor RDP?**
R: Sí, pero:
- Solo persiste mientras el workflow está activo
- Si cierras, todo se borra
- Es arquitectura efímera (temporal)

**P: ¿Cuánto tiempo puedo utilizarlo?**
R: GitHub Actions permite hasta 6 horas por workflow. Después se detiene automáticamente.

**P: ¿Puedo ejecutar múltiples workflows de RDP?**
R: Sí, pero:
- Necesitarías múltiples repositorios o ramas
- Cada uno usaría minutos de GitHub Actions
- Plan gratis: 3,000 minutos/mes total

---

## 🇬🇧 FREQUENTLY ASKED QUESTIONS - ENGLISH

### 📌 INITIAL SETUP

**Q: In what order do I follow the steps?**
A: 1. Create Tailscale account → 2. Get Auth Key → 3. Add Secret in GitHub → 4. Run Workflow → 5. Connect via RDP

**Q: Do they ask me for money anywhere?**
A: No. GitHub Actions is free (3,000 min/month). Tailscale offers unlimited free plan. Everything is 100% free.

**Q: Is it the same password every time?**
A: No. Every time you run the workflow, it generates a NEW random password.

**Q: Can I run multiple RDP sessions at once?**
A: No. One session per workflow. If you want another, it must be in another repo or wait.

---

### 🔑 AUTH KEY PROBLEMS

**Q: Where do I find the Auth Key in Tailscale?**
A: Tailscale Admin → Settings → Keys → Auth keys → Copy one

**Q: The Auth Key doesn't work, what happened?**
A: Possible causes:
- The key has whitespace (copy without spaces)
- The key expired (generate a new one)
- The key was invalidated in admin console

**Q: How do I know if my Auth Key is active?**
A: In Tailscale Admin, under "Auth keys":
- ✓ Green/active: Can be used
- ✗ Gray/inactive: Cannot be used (generate new)

**Q: Does the Auth Key show in GitHub after I save it?**
A: No, it's correct. GitHub never shows secrets for security. Only shows as "●●●●●●●"

---

### ⚡ WORKFLOW PROBLEMS

**Q: The workflow fails on the first step. Why?**
A: 99% of the time it's:
1. Secret `TAILSCALE_AUTH_KEY` not configured
2. Secret copied wrong (with spaces)
3. Check: Settings → Secrets and variables → Actions

**Q: The workflow takes a long time. Is this normal?**
A: Yes, 5-10 minutes is normal:
- 1 min: Windows configuration and firewall rules
- 1 min: User creation
- 2-3 min: Tailscale download and install
- 1 min: Tailscale connection
- Rest: Waiting for RDP connections

**Q: What does "Maintain Connection - In progress" mean?**
A: The runner is active and ready to receive RDP connections. It's correct.

**Q: The workflow was canceled after 60 minutes**
A: GitHub Actions has limits. In your case:
- Reached execution timeout
- Was manually canceled
- Network timeout occurred

Solution: Run the workflow again.

---

### 📡 RDP CONNECTION PROBLEMS

**Q: I enter the IP but it says "Cannot connect"**

Check:
```
1. ✓ IP is correct (copy exactly from workflow)
2. ✓ You have Tailscale installed locally
3. ✓ You're connected to your Tailscale network
4. ✓ Username RDP is exact (uppercase)
5. ✓ Password is exact (RDP generates random)
6. ✓ Port 3389 not blocked in your firewall
```

**Q: I enter username and password but it says "access denied"**

Causes:
- Username: Must be exactly `RDP` (uppercase)
- Password: Must be exactly from workflow (case-sensitive)
- Check: Copy without leading/trailing spaces

**Q: Do I need Tailscale installed on my local machine?**
A: Yes, on your client machine you need:
- Windows: Tailscale installed
- Mac: Tailscale installed
- Linux: Tailscale installed

Tailscale acts as a "tunnel" between your machine and RDP server.

**Q: Can I connect from any WiFi network?**
A: Yes. Tailscale creates a private VPN network. Works from anywhere, any country.

---

### 🔍 CREDENTIALS AND SECURITY

**Q: Where do I see the RDP user password?**
A: In the workflow:
1. GitHub → Actions → RDP workflow (executed)
2. Click job: "secure-rdp"
3. Scroll to: "Maintain Connection"
4. Look for:
```
=== RDP ACCESS ===
Address: 100.64.45.123
Username: RDP
Password: Aq7#mK2$xL9@
==================
```

**Q: The password has weird characters. Is this normal?**
A: Yes, it's security. The password contains:
- Uppercase (A-Z)
- Lowercase (a-z)
- Numbers (0-9)
- Special characters (!@#$%^&*)

This makes it very secure.

**Q: Can I change the password manually?**
A: Yes, but:
1. Only works within that RDP session
2. If you run workflow again, generates new password
3. To change permanently: Edit the workflow

**Q: Can someone access without the password?**
A: No, because:
- IP: Only accessible via Tailscale (private network)
- Username: Must be `RDP`
- Password: Random and secure
- Firewall: Only port 3389 open

---

### 🎯 USE CASES AND LIMITATIONS

**Q: Can I use this for cloud gaming?**
A: Yes, technically. But:
- GitHub Actions runners have limited GPU
- RDP bandwidth is limited
- Not optimized for gaming

**Q: Can I install software on the RDP server?**
A: Yes, but:
- Only persists while workflow is active
- If you close it, everything is deleted
- It's ephemeral (temporary) architecture

**Q: How long can I use it?**
A: GitHub Actions allows up to 6 hours per workflow. After that, it stops automatically.

**Q: Can I run multiple RDP workflows?**
A: Yes, but:
- You'd need multiple repos or branches
- Each would use GitHub Actions minutes
- Free plan: 3,000 minutes/month total

---

## 🆘 SOLUCIÓN AVANZADA / ADVANCED TROUBLESHOOTING

### 🔧 Editar el Workflow (Español)

**Necesitas cambiar algo del workflow?**

1. GitHub → Repositorio → `.github/workflows/main.yml`
2. Click en el ícono de editar (lápiz)
3. Realiza cambios
4. Scroll abajo: "Commit changes..."
5. Escribe un mensaje (ej: "Update RDP username")
6. Click: "Commit changes"

**Cambios posibles:**

**Cambiar nombre de usuario:**
```powershell
Buscar: New-LocalUser -Name "RDP"
Cambiar por: New-LocalUser -Name "tuNombre"
```

**Cambiar puerto RDP:**
```powershell
Buscar: localport=3389
Cambiar por: localport=9989 (nueva)
```

---

### 🔧 Edit Workflow (English)

**Need to change something in the workflow?**

1. GitHub → Repository → `.github/workflows/main.yml`
2. Click edit icon (pencil)
3. Make changes
4. Scroll down: "Commit changes..."
5. Write a message (ex: "Update RDP username")
6. Click: "Commit changes"

**Possible changes:**

**Change username:**
```powershell
Find: New-LocalUser -Name "RDP"
Change to: New-LocalUser -Name "yourName"
```

**Change RDP port:**
```powershell
Find: localport=3389
Change to: localport=9989 (new)
```

---

## 📊 TABLA DE DIAGNÓSTICO / DIAGNOSIS TABLE

| Problema | Síntoma | Solución |
|---|---|---|
| Auth Key inválido | Workflow falla paso 1 | Generar nuevo en Tailscale |
| Secret no configurado | Workflow falla paso 1 | Agregar TAILSCALE_AUTH_KEY en GitHub |
| IP incorrecta | No puedo conectarme | Copiar IP exacta del workflow |
| Firewall bloqueado | Conexión rechazada | Revisar firewall local puerto 3389 |
| Tailscale no instalado | No puedo conectarme | Instalar Tailscale localmente |
| Usuario/contraseña errada | Access denied | Copiar exactamente del workflow |
| Workflow sin Auth Key | Error de conexión | Revisar que Secret se creó correctamente |

---

## 📞 CONTACTO Y AYUDA / CONTACT AND SUPPORT

**Problemas técnicos:**
- GitHub Issues: [Repository Issues]
- Workflow Logs: GitHub → Actions → Ver logs completos

**Ayuda de Tailscale:**
- https://tailscale.com/contact/support/
- Documentación: https://tailscale.com/kb/

**Ayuda de GitHub Actions:**
- https://docs.github.com/en/actions
- Comunidad: https://github.community

---

## 📚 REFERENCIA RÁPIDA / QUICK REFERENCE

```
TAILSCALE:
1. https://tailscale.com/start → Create Account
2. https://tailscale.com/admin → Get Auth Key

GITHUB:
1. Settings → Secrets → New Secret
2. Name: TAILSCALE_AUTH_KEY
3. Secret: [Auth Key]
4. Save

WORKFLOW:
1. Actions → RDP → Run workflow
2. Wait 5-10 minutes
3. Check "Maintain Connection" for credentials

RDP:
Windows: mstsc → IP → Username: RDP → Password from workflow
Mac: Microsoft Remote Desktop → Add → Connect
Linux: Remmina → New → Connect
```

---

**Last Updated:** February 5, 2026  
**Version:** 1.0
