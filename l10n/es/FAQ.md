# Preguntas Frecuentes

## Acerca de SySL

### ¿Por qué el código generado por IA necesita una licencia especial?

Las licencias de código abierto tradicionales (MIT, GPL, Apache-2.0) se basan en la ley de derechos de autor. Asumen que un autor humano posee los derechos de autor sobre el código. Pero los tribunales en EE. UU. (Thaler v. Perlmutter, 2025-2026) y la UE han dictaminado que las obras puramente generadas por IA no pueden ser protegidas por derechos de autor —no hay autor humano, por lo tanto, no hay derechos de autor.

Si el código generado por IA no tiene derechos de autor, una licencia tradicional que se sustenta en los derechos de autor puede carecer de fuerza legal. SySL resuelve esto operando tanto como una licencia de derechos de autor (si existen) como un contrato independiente (si no existen).

### ¿Es SySL "código abierto"?

SySL satisface la Definición de Software Libre (libertad para ejecutar, estudiar, modificar y compartir) y la mayor parte de la Definición de Código Abierto, con una excepción: SySL exige la divulgación de la generación por IA. Este requisito de divulgación es una condición de uso, que algunas interpretaciones de la OSD pueden considerar una restricción.

SySL define una **nueva categoría** —"Código Sintético"— que es adyacente y compatible con el Código Abierto, pero aborda un escenario para el que el código abierto tradicional nunca fue diseñado.

### ¿Es SySL una licencia copyleft?

Sí, pero de un nuevo tipo. El copyleft tradicional (GPL) exige que las obras derivadas se distribuyan bajo la misma licencia. El "copyleft sintético" de SySL solo exige que las obras derivadas **conserven la cadena de divulgación de IA** —no que se distribuyan bajo SySL.

Por lo tanto, puede tomar código bajo SySL, modificarlo y distribuir el resultado bajo MIT o Apache-2.0, **siempre que mantenga intacta la divulgación de IA**. Esto es intencionado: SySL busca difundir la norma de transparencia sin crear incompatibilidad de licencias.

## Uso de SySL

### ¿Puedo usar código bajo SySL en un producto propietario?

Sí, siempre que cumpla con los requisitos de divulgación (Sección 2) y los requisitos de divulgación recíproca (Sección 8). Esto significa:

- Conservar el aviso de divulgación de IA en su documentación.
- Si distribuye código fuente, mantener las divulgaciones de generación por IA a nivel de archivo.
- Si distribuye solo binarios, proporcionar el código fuente correspondiente (con divulgaciones) o una oferta por escrito para hacerlo.

### ¿Puedo combinar código SySL con código Apache-2.0?

Sí. SySL es explícitamente compatible con Apache-2.0. La obra combinada puede distribuirse bajo Apache-2.0, siempre que los requisitos de divulgación de SySL se cumplan de forma independiente.

### ¿Puedo combinar código SySL con código GPL?

La compatibilidad con GPL no ha sido analizada formalmente. Ambas licencias tienen obligaciones de tipo copyleft (divulgación de código fuente para GPL, divulgación de IA para SySL). Si necesita combinar código SySL con código GPL, consulte a un asesor legal o abra un issue para un análisis de compatibilidad.

### ¿Necesito divulgar el uso de IA si solo uso el software internamente?

Los requisitos de divulgación de la Sección 2 se aplican cuando usted **distribuye** el software. El uso interno dentro de una sola organización no constituye distribución bajo SySL. Sin embargo, si despliega el software como un servicio accesible a terceros, la Sección 8.2 puede ser aplicable.

### ¿Qué se considera "Generado por IA"?

Cualquier código, documentación, configuración u otro material producido por un modelo o sistema de IA, incluidos modelos de lenguaje de gran escala (LLMs), modelos de generación de código y sistemas similares de aprendizaje automático. Esto incluye código que fue parcialmente generado y luego editado por un humano —la divulgación a nivel de archivo debe indicar la proporción aproximada de generación por IA.

## Cuestiones Legales

### ¿Es SySL jurídicamente exigible?

SySL está diseñada para ser exigible bajo dos teorías jurídicas independientes:

1. **Derechos de autor**: si se determina que el código generado por IA es protegible por derechos de autor, SySL opera como una licencia de derechos de autor tradicional.
2. **Derecho contractual**: si el código no es protegible por derechos de autor, SySL opera como un contrato vinculante. Al usar el software, usted acepta los términos.

El enfoque de doble base está inspirado en la Fair Source License (FSL) de Sentry, que ha sido adoptada por múltiples empresas y no ha sido impugnada con éxito.

### ¿Qué sucede si cambia la ley de derechos de autor?

Si un tribunal o legislador dictamina que el código generado por IA es protegible por derechos de autor, la concesión de derechos de autor de SySL (Sección 3) entra en vigor inmediatamente, proporcionando una vía de licencia clara. No se necesita ninguna modificación de la licencia.

### ¿Quién es el "Autor" bajo SySL?

El Autor es el humano o humanos que dirigieron el proceso de generación de IA: diseño de arquitectura, ingeniería de prompts, especificación de restricciones, aseguramiento de calidad e integración. Esto refleja la realidad de que el código generado por IA no es creado por la IA en sí, sino por los humanos que guían y curan su salida.

### ¿Por qué se establece Japón como ley aplicable?

El autor de SySL reside en una jurisdicción donde la ley japonesa proporciona un marco estable y predecible para las licencias de software basadas en contrato. La elección de Japón como ley aplicable es deliberada: Japón tiene un cuerpo de derecho contractual bien desarrollado, un sistema legal que respeta la autonomía de las partes y es neutral respecto a las principales jurisdicciones (EE. UU., UE, China) donde es probable que SySL se utilice.

Los usuarios en otras jurisdicciones conservan sus derechos locales de protección al consumidor y de datos.

### ¿Qué sucede si no estoy de acuerdo con el requisito de divulgación de IA?

El requisito de divulgación es el núcleo de SySL. Si no puede o no quiere divulgar la generación por IA, no debería usar software bajo SySL. Las licencias alternativas que no requieren divulgación de IA incluyen MIT, Apache-2.0 y BSD.

## Cuestiones Prácticas

### ¿Cómo creo un archivo AI_DISCLOSURE?

Cree un archivo llamado `AI_DISCLOSURE` o `AI_DISCLOSURE.md` en la raíz de su repositorio. Un ejemplo mínimo:

```
MODELOS DE IA UTILIZADOS:
- Claude Opus 4.6 (Anthropic)
- GLM-4 (Zhipu AI)

TOKENS CONSUMIDOS:
- Aproximadamente 100 mil millones de tokens en total

PROPORCIÓN DE GENERACIÓN POR IA:
- ~100% del código fuente es generado por IA
- Diseño de arquitectura y aseguramiento de calidad: humano
```

### ¿Puedo modificar el texto de SySL para mi proyecto?

Puede modificar el texto de la licencia para su propio uso, pero no debe llamar a la versión modificada "la Licencia de Código Sintético" ni "SySL" sin permiso. Si crea una licencia derivada, asígnele un nombre distinto.

El Autor puede publicar versiones revisadas oficiales de SySL. Consulte la Sección 15 de la licencia.

## Adopción

### ¿Quién está usando SySL?

Consulte [ADOPTERS.md](./ADOPTERS.md) para ver la lista actual. Los primeros adoptantes son los proyectos del ecosistema [](https://github.com/celestia-island/).

### ¿Cómo añado mi proyecto a la lista de adoptantes?

Envíe un pull request a [ADOPTERS.md](./ADOPTERS.md) con el nombre de su proyecto, una breve descripción y la fecha de adopción.
