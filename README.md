# Mi Neuroseguimiento

Diario personal de seguimiento neurológico con instrumentos clínicos validados,
diseñado para llevar a la consulta con el especialista.

**Versión:** 2.1.0 · **Catálogo clínico:** v2.1.0 · **Revisión:** 2026-11
**Autoría:** Miguel Ángel Layunta López

---

## Qué es

Una aplicación web progresiva (PWA) de un solo archivo que permite a una persona
con una enfermedad neurológica registrar su evolución y generar un informe
estructurado de una página para su neurólogo.

Funciona sin conexión, sin servidor y sin cuenta de usuario. Todos los datos
permanecen en el navegador del dispositivo.

## Qué no es

- No es un producto sanitario. No tiene marcado CE ni ha sido evaluado por
  ninguna agencia reguladora.
- No diagnostica, no interpreta clínicamente los resultados y no recomienda
  cambios de tratamiento.
- No detecta emergencias ni envía avisos automáticos.
- No sustituye la valoración de un profesional sanitario.

## Características

| Área | Detalle |
|---|---|
| Catálogo clínico | 33 patologías agrupadas en 10 familias |
| Instrumentos | 19 escalas validadas; 15 con ítems operativos |
| Diario | Síntomas, episodios, mejorías y posibles efectos adversos |
| Mediciones | 11 variables, con contexto y protocolo |
| Bienestar | Estado percibido y horas de sueño |
| Medicación | Pautas diarias y calendario declarativo |
| Informe | Una página, con gráficas de evolución por patología |
| Accesibilidad | Objetivos táctiles de 46 px, `aria-live`, `focus-visible` |
| Tema | Modo claro y oscuro, con detección del sistema |
| Privacidad | Local-first, sin telemetría ni envío de datos |

## Instalación

### Uso local

1. Descarga `index.html`.
2. Ábrelo con cualquier navegador moderno.

No requiere servidor, ni instalación, ni conexión a internet.

### Publicación web

1. Sube `index.html`, `sw.js`, `manifest.json` y la carpeta `icons/` a tu
   servidor o a GitHub Pages.
2. Añade `<link rel="manifest" href="./manifest.json">` dentro de `<head>`.
3. Accede por HTTPS para que se active el modo instalable.

## Estructura del proyecto

    /
    ├── index.html                      Aplicación completa (autocontenida)
    ├── sw.js                           Service worker para uso sin conexión
    ├── manifest.json                   Manifiesto de instalación
    ├── icons/                          Iconos de la aplicación
    ├── manual-usuario.html             Manual de usuario
    ├── manual-tecnico-sanitario.html   Manual técnico y clínico
    ├── README.md                       Este archivo
    └── LICENSE                         Condiciones de uso

## Rigor clínico

Cada instrumento declara su versión, su ventana temporal, su método de
puntuación, su cita bibliográfica completa y sus condiciones de licencia.

Los instrumentos cuya licencia no permite distribuir los ítems se publican
como ficha documentada, sin las preguntas. Es una decisión deliberada, no una
omisión. Consulta la sección **Método y validación** dentro de la aplicación.

## Privacidad

- Los datos se guardan en `localStorage`, sin cifrado.
- No hay servidor, ni cuentas, ni analítica, ni cookies de seguimiento.
- La exportación JSON no está cifrada y contiene toda la información.
- La ubicación solo se solicita si el usuario pulsa el botón correspondiente.

## Estado del proyecto

Fase 1 (rigor clínico) en curso. Las fases 2 (validación profesional) y
3 (cumplimiento legal y regulatorio) están planificadas. Consulta la hoja de
ruta en la aplicación y en el manual técnico.

## Licencia

Todos los derechos reservados. Se concede permiso para uso personal y para
evaluación clínica o académica. Consulta `LICENSE`.

Los instrumentos clínicos incluidos conservan la autoría y las condiciones de
uso de sus autores originales. Esta licencia no concede ningún derecho sobre
ellos.
