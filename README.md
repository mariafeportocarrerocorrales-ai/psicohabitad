# Proyecto de Reconocimiento de Lenguaje de Señas

Este proyecto utiliza Teachable Machine y TensorFlow.js para reconocer gestos de lenguaje de señas en tiempo real.

## Características

- Reconocimiento de gestos en tiempo real usando la cámara web
- Modelo entrenado con Teachable Machine
- Interfaz web simple y moderna
- Soporte para 5 gestos: "hola", "gracias", "donde?", "ayuda", "enojado"

## Requisitos

- Node.js (versión 16 o superior)
- Navegador web moderno con soporte para WebRTC
- Cámara web

## Instalación

1. Clona o descarga este repositorio
2. Instala las dependencias:
```bash
npm install
```

## Uso

1. Inicia el servidor de desarrollo:
```bash
npm run dev
```

2. Abre tu navegador en `http://localhost:3000`

3. Haz clic en "Iniciar Cámara" y permite el acceso a tu cámara web

4. Realiza los gestos frente a la cámara para ver las predicciones en tiempo real

## Comandos disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Vista previa de la construcción de producción

## Estructura del proyecto

```
psicohabitad/
├── index.html          # Página principal
├── my-pose-model/      # Modelo entrenado de Teachable Machine
│   ├── model.json      # Arquitectura del modelo
│   ├── weights.bin     # Pesos del modelo
│   └── metadata.json   # Metadatos del modelo
├── package.json        # Configuración de npm
├── vite.config.js      # Configuración de Vite
└── README.md           # Este archivo
```

## Notas técnicas

- El modelo utiliza PoseNet para detectar poses corporales
- Las predicciones se actualizan en tiempo real usando requestAnimationFrame
- Requiere HTTPS en producción para acceso a la cámara

