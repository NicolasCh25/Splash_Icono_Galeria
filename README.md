# 📱 Taller 2 - Aplicaciones Móviles  
## 📌 Sistema de Captura y Gestión de Imágenes

---

## 📖 Descripción del proyecto
Este proyecto consiste en el desarrollo de una aplicación móvil híbrida utilizando Ionic Framework junto con Angular.  
La aplicación permite al usuario interactuar con diferentes funcionalidades como la generación de alertas, captura de fotografías mediante la cámara del dispositivo y visualización de imágenes en formato de galería.

Además, se integró Capacitor para ejecutar la aplicación en dispositivos Android, permitiendo el acceso a funcionalidades nativas como la cámara y el almacenamiento.

Como parte de la mejora visual de la aplicación, se implementó un **ícono personalizado** y un **Splash Screen**, lo que permite brindar una experiencia más profesional al usuario al momento de instalar y abrir la aplicación.

---

## 🎯 Objetivo
Desarrollar una aplicación móvil funcional que permita aplicar los conocimientos adquiridos sobre Ionic y Angular, incluyendo interacción con el usuario, uso de hardware del dispositivo y despliegue en entorno móvil.

---

## 👨‍💻 Integrante
- Nicolás Chiguano  

---

## 🎨 Personalización de la Aplicación (Ícono y Splash Screen)

### 📌 Descripción
Se realizó la personalización visual de la aplicación mediante la implementación de:

- Un **ícono personalizado**, visible en el menú del dispositivo móvil  
- Un **Splash Screen**, mostrado al iniciar la aplicación  

Esto mejora la identidad visual de la app y la experiencia del usuario.

---

### 📁 Estructura utilizada
Se creó una carpeta en la raíz del proyecto llamada:

```
resources/
 ├── icon.png
 └── splash.png
```

- `icon.png`: Imagen base del ícono (1024x1024 px)  
- `splash.png`: Imagen base del splash (2732x2732 px)

---

### ⚙️ Generación de recursos

Para generar automáticamente todos los tamaños necesarios para Android, se utilizó la herramienta de Capacitor:

```bash
npm install @capacitor/assets --save-dev
npx @capacitor/assets generate
```

Este proceso crea todas las versiones del ícono y splash en las carpetas nativas del proyecto Android.

---

### 🔄 Sincronización con el proyecto

Después de generar los recursos, se ejecutaron los siguientes comandos:

```bash
ionic build
npx cap sync
```

---

### 📱 Ejecución en dispositivo

Para ejecutar la aplicación en un dispositivo físico Android:

```bash
npx cap run android
```

También se utilizó Android Studio para la ejecución directa en el celular mediante conexión USB y depuración activada.

---

### ⚠️ Consideraciones importantes

- Los nombres de las imágenes deben ser exactamente:
  - `icon.png`
  - `splash.png`
- La carpeta `resources` debe estar en la raíz del proyecto
- Es necesario desinstalar la aplicación del dispositivo para visualizar cambios en el ícono
- Android Studio no genera los recursos automáticamente, solo ejecuta la aplicación

---

## 📸 Evidencias de funcionamiento

### 🏠 Pantalla principal (Tab1 - Alerta)
![Pantalla principal](./tab1.jpeg)

**Descripción:**  
Esta pantalla corresponde a la pestaña Tab1.  
En esta sección se muestra un botón llamado "Mostrar Alerta", el cual al ser presionado despliega una alerta en pantalla.

---

### 📷 Captura de imágenes (Tab2 - Cámara)
![Tab2 Cámara](./tab2.jpeg)

**Descripción:**  
Permite acceder a la cámara del dispositivo para capturar imágenes en tiempo real.

---

### 🖼️ Galería de imágenes (Tab3)
![Galería](./tab3.jpeg)

**Descripción:**  
Se visualizan las imágenes capturadas en formato de galería.

---

### 🚀 Splash Screen
![Splash](./splash.jpeg)

**Descripción:**  
Pantalla de carga personalizada que aparece al iniciar la aplicación.

---

### 📱 Ícono de la aplicación
![Icono](./icon.jpeg)

**Descripción:**  
Ícono personalizado visible en el dispositivo móvil.

---

### 📱 Ejecución en Android
![Android](./android.jpeg)

**Descripción:**  
Aplicación ejecutándose correctamente en un dispositivo Android.
