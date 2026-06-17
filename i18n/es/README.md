# Licencia de Código Sintético (SySL)

**Una nueva licencia de software diseñada para código generado por IA — que opera como un contrato vinculante independiente de los derechos de autor.**

[![License](https://img.shields.io/badge/license-SySL%201.0-blue)](./LICENSE.txt)

---

## ¿Qué es SySL?

SySL es una nueva categoría de licencia de software. Aborda un problema que ninguna licencia tradicional maneja: **¿qué sucede cuando el código no es escrito por un humano?**

Las licencias de código abierto tradicionales (MIT, GPL, Apache-2.0) se basan en la ley de derechos de autor. Asumen que un autor humano posee los derechos de autor y otorga permisos desde esa posición. Pero los tribunales en Estados Unidos, la Unión Europea y otros lugares han dictaminado que las obras puramente generadas por IA **no pueden ser protegidas por derechos de autor** —no hay autor humano, por lo tanto, no hay derechos de autor.

Esto crea un vacío legal. Si el código generado por IA no tiene derechos de autor, entonces:

- Las licencias tradicionales que se sustentan en los derechos de autor pueden carecer de **fuerza legal**.
- Cualquiera puede usar, copiar o modificar el código con **consecuencias legales inciertas**.
- Los contribuyentes y usuarios operan en una **zona gris legal**.

SySL llena este vacío. Opera tanto como una licencia de derechos de autor (si existen derechos de autor) como un contrato vinculante (si no existen derechos de autor). Establece tres nuevas normas:

1. **Transparencia**: cada copia debe divulgar que el código es generado por IA.
2. **Certeza jurídica**: la licencia funciona independientemente de la situación de los derechos de autor.
3. **Reconocimiento de riesgos**: el código generado por IA presenta modos de fallo únicos.

## ¿Por qué es importante esto?

En 2026, los modelos de IA generan rutinariamente bases de código completas. El proyecto [](https://github.com/celestia-island/) —una plataforma de orquestación de IA multiagente— es una base de código 100% generada por IA que comprende más de 850.000 líneas de Rust, 56 crates y más de 2.200 pruebas. Le tomó a una persona 4,3 meses utilizando 100 mil millones de tokens de generación de IA.

Esto no es una hipótesis. El software generado por IA ya está aquí. El marco legal necesita ponerse al día.

SySL es el primer paso: una licencia honesta sobre qué es el código, quién lo hizo y cuáles son las reglas.

## Características Principales

| Característica | Descripción |
|---------|-------------|
| **Divulgación de IA** | Cada copia y obra derivada debe divulgar la generación por IA y los modelos utilizados |
| **Doble base jurídica** | Funciona tanto como licencia de derechos de autor como contrato independiente |
| **Concesión de patentes** | Equivalente a la protección de patentes de Apache-2.0 |
| **Compatible con Apache-2.0** | El código SySL puede combinarse con código Apache-2.0 |
| **Licenciamiento en Capas** | Coexiste con BUSL-1.1 para protección comercial (doble licencia) |
| **Copyleft Sintético** | Las obras derivadas deben preservar la divulgación de IA (obligación de transparencia, no de compartir código fuente) |
| **Exención específica de IA** | Renuncia explícitamente a los modos de fallo únicos de la IA |
| **Multilingüe** | Disponible en 11 idiomas (inglés jurídicamente vinculante) |

## Inicio Rápido

Para usar SySL en su proyecto:

1. Copie `LICENSE.txt` en la raíz de su repositorio.
2. Cree un archivo `AI_DISCLOSURE` (o `AI_DISCLOSURE.md`) que describa:
   - Qué modelos de IA se utilizaron
   - Tokens aproximados consumidos
   - La proporción de código generado por IA frente a código escrito por humanos
3. Añada una insignia a su README:

```markdown
[![License: SySL 1.0](https://img.shields.io/badge/license-SySL%201.0-blue)](https://github.com/celestia-island/sysl)
```

O utilice la forma abreviada en su declaración de licencia:

```
Licensed under the Synthetic Source License, Version 1.0.
See https://github.com/celestia-island/sysl for the full license text.
```

## Comparación con Licencias Tradicionales

| Aspecto | MIT | Apache 2.0 | GPLv3 | SySL 1.0 |
|---------|-----|------------|-------|----------|
| Necesita derechos de autor para funcionar | Sí | Sí | Sí | **No** (respaldo contractual) |
| Maneja código generado por IA | No | No | No | **Sí** (diseño central) |
| Concesión de patentes | No | Sí | Sí | **Sí** |
| Copyleft | No | No | Sí (fuerte) | **Sí** (solo divulgación) |
| Requiere divulgación de IA | No | No | No | **Sí** |
| Requiere atribución | Sí | Sí | Sí | **Sí** (atribución de IA) |

Consulte [COMPARISON.md](./COMPARISON.md) para un análisis detallado.

## Idiomas

SySL está disponible en los siguientes idiomas. La versión en inglés es jurídicamente vinculante; las traducciones son informativas.

SySL is available in the following languages. The English version is legally binding; translations are provided for informational purposes only.

| Language | README | LICENSE | FAQ | COMPARISON |
|----------|--------|---------|-----|------------|
| English (binding) | [README.md](../../README.md) | [LICENSE.txt](../../LICENSE.txt) | [FAQ.md](../../FAQ.md) | [COMPARISON.md](../../COMPARISON.md) |
| 简体中文 | [README.md](../../i18n/zhs/README.md) | [LICENSE.txt](../../i18n/zhs/LICENSE.txt) | [FAQ.md](../../i18n/zhs/FAQ.md) | [COMPARISON.md](../../i18n/zhs/COMPARISON.md) |
| 繁體中文 | [README.md](../../i18n/zht/README.md) | [LICENSE.txt](../../i18n/zht/LICENSE.txt) | [FAQ.md](../../i18n/zht/FAQ.md) | [COMPARISON.md](../../i18n/zht/COMPARISON.md) |
| 日本語 | [README.md](../../i18n/ja/README.md) | [LICENSE.txt](../../i18n/ja/LICENSE.txt) | [FAQ.md](../../i18n/ja/FAQ.md) | [COMPARISON.md](../../i18n/ja/COMPARISON.md) |
| 한국어 | [README.md](../../i18n/ko/README.md) | [LICENSE.txt](../../i18n/ko/LICENSE.txt) | [FAQ.md](../../i18n/ko/FAQ.md) | [COMPARISON.md](../../i18n/ko/COMPARISON.md) |
| Français | [README.md](../../i18n/fr/README.md) | [LICENSE.txt](../../i18n/fr/LICENSE.txt) | [FAQ.md](../../i18n/fr/FAQ.md) | [COMPARISON.md](../../i18n/fr/COMPARISON.md) |
| Español | [README.md](../../i18n/es/README.md) | [LICENSE.txt](../../i18n/es/LICENSE.txt) | [FAQ.md](../../i18n/es/FAQ.md) | [COMPARISON.md](../../i18n/es/COMPARISON.md) |
| Русский | [README.md](../../i18n/ru/README.md) | [LICENSE.txt](../../i18n/ru/LICENSE.txt) | [FAQ.md](../../i18n/ru/FAQ.md) | [COMPARISON.md](../../i18n/ru/COMPARISON.md) |
| Deutsch | [README.md](../../i18n/de/README.md) | [LICENSE.txt](../../i18n/de/LICENSE.txt) | [FAQ.md](../../i18n/de/FAQ.md) | [COMPARISON.md](../../i18n/de/COMPARISON.md) |
| Português | [README.md](../../i18n/pt/README.md) | [LICENSE.txt](../../i18n/pt/LICENSE.txt) | [FAQ.md](../../i18n/pt/FAQ.md) | [COMPARISON.md](../../i18n/pt/COMPARISON.md) |
| العربية | [README.md](../../i18n/ar/README.md) | [LICENSE.txt](../../i18n/ar/LICENSE.txt) | [FAQ.md](../../i18n/ar/FAQ.md) | [COMPARISON.md](../../i18n/ar/COMPARISON.md) |

## Adoptantes

Proyectos que han adoptado SySL:

| Proyecto | Descripción | Desde |
|---------|-------------|-------|
| [](https://github.com/celestia-island/) | Plataforma de orquestación de IA multiagente | 2026-06 |
| [shittim-chest](https://github.com/celestia-island/shittim-chest) | Shell web de plataforma de IA | 2026-06 |
| [evernight](https://github.com/celestia-island/evernight) | Biblioteca de control remoto multiplataforma | 2026-06 |

*Para añadir su proyecto, envíe un PR a [ADOPTERS.md](./ADOPTERS.md).*

## Filosofía

SySL se basa en la creencia de que **la transparencia no es una restricción a la libertad —es un prerrequisito para la confianza**.

Cuando un humano escribe código, el código conlleva garantías implícitas: el autor entendía lo que hacía, probó los casos límite y asumió la responsabilidad. El código generado por IA no conlleva nada de esto. Es una salida estadística, no una creación razonada. Los usuarios merecen saber con qué están tratando.

SySL no restringe lo que puede hacer con el código generado por IA. Solo exige que le diga a la gente qué es.

## Licencia de la Propia SySL

El texto de la Licencia de Código Sintético está protegido por derechos de autor por langyo. Usted puede reproducir y distribuir libremente el texto de la licencia con el propósito de licenciar su software. No puede modificar el texto de la licencia y llamarlo "SySL" sin el permiso del Autor, pero puede crear licencias derivadas bajo su propio nombre.

## Contribuciones

Se aceptan informes de errores, correcciones y sugerencias para futuras versiones de SySL. Por favor, abra un issue o pull request en <https://github.com/celestia-island/sysl>.

El proceso para las actualizaciones de versión de SySL está documentado en [GOVERNANCE.md](./GOVERNANCE.md).

## Contacto

- Autor: langyo <sysl.contact@celestia.world>
- Organización: [Celestia Island](https://github.com/celestia-island)
- Repositorio: <https://github.com/celestia-island/sysl>
