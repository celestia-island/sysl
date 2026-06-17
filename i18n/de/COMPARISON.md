# Lizenzvergleich: SySL vs. traditionelle Lizenzen

## Auf einen Blick

| | SySL 1.0 | MIT | Apache 2.0 | GPLv3 | BUSL 1.1 |
|---|:---:|:---:|:---:|:---:|:---:|
| **Entstehungsjahr** | 2026 | 1988 | 2004 | 2007 | 2016 |
| **Typ** | Synthetic Source | Permissiv | Permissiv + Patent | Starkes Copyleft | Delayed Open Source |
| **Urheberrecht erforderlich** | Nein (Vertrags-Fallback) | Ja | Ja | Ja | Ja |
| **KI-bezogen** | Ja (Kerndesign) | Nein | Nein | Nein | Nein |
| **Patenteinräumung** | Ja (bedingt: nur wenn der Autor Patente hält) | Nein | Ja | Ja | Nein |
| **KI-Training erlaubt** | Ja (ausdrücklich, §9.1) | Stumm | Stumm | Stumm | Stumm |
| **Verwirkung bei Verletzung** | Ja (§9.2, automatische Verwirkung) | Nein | Nein | Nein | Nein |
| **Copyleft** | Nur Offenlegung | Nein | Nein | Ja (stark) | Nein |
| **Kommerzielle Nutzung** | Ja (mit Offenlegung) | Ja | Ja | Ja (mit Quellcode) | Wettbewerbsverbotsfrist |
| **Verbreitungsbedingungen** | KI-Offenlegung bewahren | Urheberrechtshinweis bewahren | Urheberrechts- + Patenthinweis bewahren | Unter GPL verbreiten | Kompatibel mit FSL |
| **Haftungsausschluss** | Standard + KI-spezifisch | Standard | Standard | Standard | Standard |
| **OSI-anerkannt** | Nein (neue Kategorie) | Ja | Ja | Ja | Nein |
| **FSF-frei** | Ja (vier Freiheiten) | Ja | Ja | Ja | Nein |
| **Änderungsdatum** | Keins (dauerhaft) | k. A. | k. A. | k. A. | Wandelt sich in festgelegte Lizenz um |

## Detaillierte Analyse

### SySL vs. MIT

**Wann MIT wählen**: Ihr Code ist menschlich verfasst, Sie wünschen maximale Einfachheit und Permissivität und benötigen weder Patentschutz noch KI-spezifische Bedingungen.

**Wann SySL wählen**: Ihr Code ist wesentlich KI-generiert, Sie möchten, dass Nutzer dies wissen, und Sie möchten, dass die Lizenz auch dann funktioniert, wenn das Urheberrecht nicht greift.

**Wesentlicher Unterschied**: MIT ist eine rein urheberrechtliche Lizenz. Wenn das Urheberrecht nicht für Ihren KI-generierten Code gilt, bietet MIT keinen Rechtsrahmen. SySL fungiert sowohl als Urheberrechtslizenz als auch als Vertrag.

### SySL vs. Apache 2.0

**Wann Apache 2.0 wählen**: Ihr Code ist menschlich verfasst, Sie wünschen eine permissive Lizenz mit Patentschutz und agieren in einem Unternehmensumfeld.

**Wann SySL wählen**: Wie im MIT-Vergleich, plus: SySL ist für Kompatibilität mit Apache 2.0 konzipiert. Sie können SySL-lizenzierten Code mit Apache-2.0-lizenziertem Code kombinieren und unter Apache 2.0 verbreiten, sofern die KI-Offenlegungen bewahrt bleiben.

**Wesentlicher Unterschied**: Apache 2.0 enthält eine Patenteinräumung. SySL enthält eine äquivalente Patenteinräumung. Der kritische Unterschied ist, dass Apache 2.0 Urheberrecht voraussetzt und kein Vertrags-Fallback bietet. Die Patenteinräumung der SySL funktioniert unabhängig vom Urheberrecht.

### SySL vs. GPLv3

**Wann GPLv3 wählen**: Sie wollen starkes Copyleft — jeder, der Ihren Code verändert und weiterverbreitet, muss seine Änderungen ebenfalls unter GPL verbreiten.

**Wann SySL wählen**: Sie wollen Transparenz, aber keinen Zwang zur Quellcode-Weitergabe. SySLs „synthetisches Copyleft" verlangt nur, dass die KI-Offenlegung bewahrt wird, nicht dass das gesamte Projekt als Open Source veröffentlicht wird.

**Wesentlicher Unterschied**: Das Copyleft der GPL zielt darauf ab, Code offen zu halten. Das Copyleft der SySL zielt darauf ab, die KI-Offenlegungskette intakt zu halten. Sie können SySL-Code nehmen, proprietäre Änderungen hinzufügen und unter einer proprietären Lizenz verbreiten — solange die KI-Offenlegung erhalten bleibt.

### SySL vs. BUSL 1.1

**Wann BUSL 1.1 wählen**: Sie wollen ein kommerzielles Produkt davor schützen, von Mitbewerbern geklont zu werden, wobei der Code sich schließlich zu Open Source wandelt.

**Wann SySL wählen**: Sie wollen maximale Übernahme bei einer Transparenznorm. Es gibt keine Wettbewerbsverbotsfrist und keine automatische Umwandlung.

**Wesentlicher Unterschied**: BUSL ist eine defensive Lizenz (Schutz des Geschäfts). SySL ist eine Transparenzlizenz (Etablierung einer sozialen Norm). Sie dienen unterschiedlichen Zwecken und können über Doppellizenzierung koexistieren (SySL §11.3). Bei KI-generierten Projekten, die beide verwenden, sollte die BUSL-Change-License auf SySL festgelegt werden — nicht auf Apache-2.0 —, andernfalls verdunstet die Transparenznorm, wenn die Wettbewerbsverbotsfrist endet.

## Kompatibilitätsmatrix

Können Sie Code unter Lizenz A mit Code unter Lizenz B kombinieren?

| Lizenz A ↓ / Lizenz B → | MIT | Apache 2.0 | GPLv3 | SySL 1.0 | BUSL 1.1 |
|:---|:---:|:---:|:---:|:---:|:---:|
| **MIT** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Apache 2.0** | ✓ | ✓ | ✓ (nur v3) | ✓ | Bedingt |
| **GPLv3** | ✓ | ✓ (nur v3) | ✓ | Wird geprüft | ✗ |
| **SySL 1.0** | ✓ | ✓ | Wird geprüft | ✓ | Bedingt |
| **BUSL 1.1** | ✓ | Bedingt | ✗ | Bedingt | ✗ |

*✓ = bekannt kompatibel. ✗ = bekannt inkompatibel. „Wird geprüft" = noch nicht analysiert. „Bedingt" = hängt von spezifischen Bedingungen ab.*

## Welche Lizenz sollte ich verwenden?

```
Ist Ihr Code wesentlich KI-generiert?
  ├── Ja → Stört es Sie nicht, dass Nutzer es nicht wissen?
  │        ├── Ja → MIT oder Apache 2.0
  │        └── Nein → SySL
  └── Nein → Benötigen Sie Patentschutz?
             ├── Ja → Apache 2.0
             └── Nein → MIT
```

Speziell für KI-generierten Code:

```
Sollen abgeleitete Werke die KI-Offenlegung bewahren?
  ├── Ja → SySL
  └── Nein → MIT oder Apache 2.0 (in Anerkennung der rechtlichen Unsicherheit)
```
