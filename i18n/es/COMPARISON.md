# Comparación de licencias: SySL vs. licencias tradicionales

## Vista general

| | SySL 1.0 | MIT | Apache 2.0 | GPLv3 | BUSL 1.1 |
|---|:---:|:---:|:---:|:---:|:---:|
| **Año de creación** | 2026 | 1988 | 2004 | 2007 | 2016 |
| **Tipo** | Código Sintético | Permisiva | Permisiva + Patente | Copyleft fuerte | Código Abierto diferido |
| **Derechos de autor requeridos** | No (respaldo contractual) | Sí | Sí | Sí | Sí |
| **Diseñada para la IA** | Sí (diseño central) | No | No | No | No |
| **Concesión de patente** | Sí (condicional: solo si el Autor posee patentes) | No | Sí | Sí | No |
| **Entrenamiento de IA permitido** | Sí (explícito, §9.1) | Silente | Silente | Silente | Silente |
| **Pérdida de derechos por infracción** | Sí (§9.2, pérdida automática) | No | No | No | No |
| **Copyleft** | Solo divulgación | No | No | Sí (fuerte) | No |
| **Uso comercial** | Sí (con divulgación) | Sí | Sí | Sí (con código fuente) | Período de no competencia |
| **Términos de distribución** | Conservar divulgación de IA | Conservar aviso de derechos de autor | Conservar aviso derechos de autor + patente | Distribuir bajo GPL | Compatible con FSL |
| **Renuncia de responsabilidad** | Estándar + específica para IA | Estándar | Estándar | Estándar | Estándar |
| **Aprobada por la OSI** | No (nueva categoría) | Sí | Sí | Sí | No |
| **Libre según la FSF** | Sí (las cuatro libertades) | Sí | Sí | Sí | No |
| **Fecha de cambio** | Ninguna (perpetuo) | N/A | N/A | N/A | Convierte a la licencia designada |

## Análisis detallado

### SySL vs. MIT

**Cuándo elegir MIT**: Su código está escrito por humanos, desea máxima simplicidad y permisividad, y no necesita protección por patente ni términos específicos de IA.

**Cuándo elegir SySL**: Su código está mayoritariamente generado por IA, desea que los usuarios lo sepan, y desea que la licencia funcione incluso si los derechos de autor no aplican.

**Diferencia clave**: MIT es puramente una licencia de derechos de autor. Si los derechos de autor no cubren su código generado por IA, MIT no proporciona ningún marco legal. SySL funciona tanto como licencia de derechos de autor como contrato.

### SySL vs. Apache 2.0

**Cuándo elegir Apache 2.0**: Su código está escrito por humanos, desea una licencia permisiva con protección por patente, y opera en un entorno empresarial.

**Cuándo elegir SySL**: Igual que en la comparación con MIT, y además: SySL está diseñada para ser compatible con Apache 2.0. Puede combinar código bajo SySL con código bajo Apache-2.0 y distribuir bajo Apache 2.0, siempre que se mantengan las divulgaciones de IA.

**Diferencia clave**: Apache 2.0 tiene una concesión de patente. SySL tiene una concesión de patente equivalente. La diferencia crítica es que Apache 2.0 asume los derechos de autor y no proporciona respaldo contractual. La concesión de patente de SySL opera con independencia de los derechos de autor.

### SySL vs. GPLv3

**Cuándo elegir GPLv3**: Desea un copyleft fuerte —quien modifique y redistribuya su código debe también distribuir sus modificaciones bajo GPL.

**Cuándo elegir SySL**: Desea transparencia pero sin coacción para compartir el código fuente. El "copyleft sintético" de SySL solo exige que se mantenga la divulgación de IA, no que todo el proyecto se publique como código abierto.

**Diferencia clave**: El copyleft de la GPL trata de mantener el código abierto. El copyleft de SySL trata de mantener intacta la cadena de divulgación de IA. Puede tomar código bajo SySL, añadir modificaciones propietarias y distribuir bajo una licencia propietaria —siempre que la divulgación de IA se mantenga.

### SySL vs. BUSL 1.1

**Cuándo elegir BUSL 1.1**: Desea proteger un producto comercial de ser clonado por competidores, con el código convirtiéndose finalmente en código abierto.

**Cuándo elegir SySL**: Desea máxima adopción con una norma de transparencia. No hay período de no competencia ni conversión automática.

**Diferencia clave**: BUSL es una licencia defensiva (proteger el negocio). SySL es una licencia de transparencia (establecer una norma social). Sirven a propósitos diferentes y pueden coexistir mediante doble licencia (SySL §11.3). Para proyectos generados por IA que usan ambas, la Licencia de Cambio de BUSL debe configurarse como SySL —no como Apache-2.0— de lo contrario la norma de transparencia se evapora cuando finaliza el período de no competencia.

## Matriz de compatibilidad

¿Puede combinar código bajo la licencia A con código bajo la licencia B?

| Licencia A ↓ / Licencia B → | MIT | Apache 2.0 | GPLv3 | SySL 1.0 | BUSL 1.1 |
|:---|:---:|:---:|:---:|:---:|:---:|
| **MIT** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Apache 2.0** | ✓ | ✓ | ✓ (solo v3) | ✓ | Condicional |
| **GPLv3** | ✓ | ✓ (solo v3) | ✓ | En revisión | ✗ |
| **SySL 1.0** | ✓ | ✓ | En revisión | ✓ | Condicional |
| **BUSL 1.1** | ✓ | Condicional | ✗ | Condicional | ✗ |

*✓ = compatible confirmado. ✗ = incompatible confirmado. «En revisión» = aún no analizado. «Condicional» = depende de términos específicos.*

## ¿Qué licencia debería usar?

```
¿Su código está mayoritariamente generado por IA?
  ├── Sí → ¿Le resulta aceptable que los usuarios no lo sepan?
  │        ├── Sí → MIT o Apache 2.0
  │        └── No → SySL
  └── No → ¿Necesita protección por patente?
           ├── Sí → Apache 2.0
           └── No → MIT
```

Para código generado por IA específicamente:

```
¿Quiere que las obras derivadas conserven la divulgación de IA?
  ├── Sí → SySL
  └── No → MIT o Apache 2.0 (reconociendo la incertidumbre legal)
```
