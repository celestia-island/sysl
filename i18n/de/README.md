# Synthetic Source License (SySL)

**Eine neuartige Softwarelizenz, konzipiert für KI-generierten Code — sie wirkt als verbindlicher Vertrag unabhängig vom Urheberrecht.**

[![License](https://img.shields.io/badge/license-SySL%201.0-blue)](./LICENSE.txt)

---

## Was ist SySL?

SySL ist eine neue Kategorie von Softwarelizenzen. Sie löst ein Problem, das keine traditionelle Lizenz behandelt: **Was passiert, wenn der Code nicht von einem Menschen geschrieben wurde?**

Traditionelle Open-Source-Lizenzen (MIT, GPL, Apache-2.0) basieren auf dem Urheberrecht. Sie gehen davon aus, dass ein menschlicher Urheber das Urheberrecht innehat und von dieser Position aus Nutzungsrechte einräumt. Aber Gerichte in den Vereinigten Staaten, der Europäischen Union und anderswo haben entschieden, dass rein KI-generierte Werke **nicht urheberrechtlich geschützt werden können** — es gibt keinen menschlichen Urheber, also gibt es kein Urheberrecht.

Dies schafft ein rechtliches Vakuum. Wenn KI-generierter Code kein Urheberrecht hat, dann:

- Können traditionelle Lizenzen, die auf dem Urheberrecht beruhen, **keinerlei Rechtskraft** haben.
- Kann jeder den Code mit **ungewissen rechtlichen Folgen** nutzen, kopieren oder verändern.
- Bewegen sich Mitwirkende und Nutzer in einer **rechtlichen Grauzone**.

SySL füllt dieses Vakuum. Sie fungiert sowohl als urheberrechtliche Lizenz (wenn Urheberrecht besteht) als auch als verbindlicher Vertrag (wenn kein Urheberrecht besteht). Sie etabliert drei neue Normen:

1. **Transparenz**: Jede Kopie muss offenlegen, dass der Code KI-generiert ist.
2. **Rechtssicherheit**: Die Lizenz funktioniert unabhängig vom Urheberrechtsstatus.
3. **Risikoanerkennung**: KI-generierter Code weist besondere Versagensmodi auf.

## Warum ist das von Bedeutung?

Im Jahr 2026 generieren KI-Modelle routinemäßig gesamte Codebasen. Es gibt bereits reale Projekte, bei denen KI 100 % des Quellcodes generiert—komplette Anwendungen, Bibliotheken und Systeme, die von Personen erstellt werden, die KI-Modelle steuern, anstatt Code von Hand zu schreiben.

Das ist keine Hypothese. KI-generierte Software ist Realität. Der rechtliche Rahmen muss aufholen.

SySL ist der erste Schritt: eine Lizenz, die ehrlich darüber ist, was der Code ist, wer ihn gemacht hat und welche Regeln gelten.

## Kernfunktionen

| Funktion | Beschreibung |
|----------|-------------|
| **KI-Offenlegung** | Jede Kopie und jedes abgeleitete Werk muss die KI-Generierung und die verwendeten Modelle offenlegen |
| **Doppelte Rechtsgrundlage** | Fungiert sowohl als Urheberrechtslizenz als auch als unabhängiger Vertrag |
| **Patenteinräumung** | Entspricht dem Patentschutz der Apache-2.0 |
| **Apache-2.0-kompatibel** | SySL-Code kann mit Apache-2.0-Code kombiniert werden |
| **Gestufte Lizenzierung** | Koexistenz mit BUSL-1.1 für kommerziellen Schutz (Doppellizenzierung) |
| **Synthetisches Copyleft** | Abgeleitete Werke müssen die KI-Offenlegung bewahren (nicht den Quellcode, nur die Offenlegung) |
| **KI-spezifischer Haftungsausschluss** | Schließt ausdrücklich KI-spezifische Versagensmodi aus |
| **Mehrsprachig** | In 11 Sprachen verfügbar (Englisch rechtlich bindend) |

## Schnellstart

So verwenden Sie SySL für Ihr Projekt:

1. Kopieren Sie `LICENSE.txt` in das Wurzelverzeichnis Ihres Repositorys.
2. Erstellen Sie eine `AI_DISCLOSURE`- (oder `AI_DISCLOSURE.md`-)Datei, die beschreibt:
   - Welche KI-Modelle verwendet wurden
   - Ungefähr verbrauchte Token
   - Den Anteil von KI-generiertem zu menschengeschriebenem Code
3. Fügen Sie einen Badge zu Ihrer README hinzu:

```markdown
[![License: SySL 1.0](https://img.shields.io/badge/license-SySL%201.0-blue)](https://github.com/celestia-island/sysl)
```

Oder verwenden Sie die Kurzform in Ihrer Lizenzerklärung:

```
Lizenziert unter der Synthetic Source License, Version 1.0.
Siehe https://github.com/celestia-island/sysl für den vollständigen Lizenztext.
```

## Vergleich mit traditionellen Lizenzen

| Aspekt | MIT | Apache 2.0 | GPLv3 | SySL 1.0 |
|--------|-----|------------|-------|----------|
| Benötigt Urheberrecht zur Funktion | Ja | Ja | Ja | **Nein** (Vertragsrückgriff) |
| Behandelt KI-generierten Code | Nein | Nein | Nein | **Ja** (Kernkonzept) |
| Patenteinräumung | Nein | Ja | Ja | **Ja** |
| Copyleft | Nein | Nein | Ja (stark) | **Ja** (nur Offenlegung) |
| KI-Offenlegung erforderlich | Nein | Nein | Nein | **Ja** |
| Namensnennung erforderlich | Ja | Ja | Ja | **Ja** (KI-Namensnennung) |

Siehe [COMPARISON.md](./COMPARISON.md) für eine detaillierte Analyse.

## Sprachen

SySL ist in den folgenden Sprachen verfügbar. Die englische Fassung ist rechtlich bindend; Übersetzungen dienen Informationszwecken.

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

## Adoptierende

Projekte, die SySL übernommen haben:

| Projekt | Beschreibung | Seit |
|---------|-------------|------|
|  | Multi-Agent-KI-Orchestrierungsplattform | 2026-06 |
| [shittim-chest](https://github.com/celestia-island/shittim-chest) | KI-Plattform-Webshell | 2026-06 |
| [evernight](https://github.com/celestia-island/evernight) | Plattformübergreifende Fernsteuerungsbibliothek | 2026-06 |

*Um Ihr Projekt hinzuzufügen, reichen Sie einen PR zu [ADOPTERS.md](./ADOPTERS.md) ein.*

## Philosophie

SySL basiert auf der Überzeugung, dass **Transparenz keine Freiheitsbeschränkung ist — sie ist eine Voraussetzung für Vertrauen**.

Wenn ein Mensch Code schreibt, trägt der Code implizite Gewährleistungen: Der Autor verstand, was er tat, testete Grenzfälle und übernahm Verantwortung. KI-generierter Code trägt nichts davon. Er ist statistische Ausgabe, keine durchdachte Schöpfung. Nutzer verdienen es zu wissen, womit sie es zu tun haben.

SySL schränkt nicht ein, was Sie mit KI-generiertem Code tun können. Sie verlangt nur, dass Sie den Leuten sagen, was er ist.

## Lizenz von SySL selbst

Der Text der Synthetic Source License ist urheberrechtlich geschützt durch langyo. Sie dürfen den Lizenztext zum Zwecke der Lizenzierung Ihrer Software frei vervielfältigen und verbreiten. Sie dürfen den Lizenztext nicht verändern und als „SySL" bezeichnen, ohne die Genehmigung des Autors, aber Sie dürfen abgeleitete Lizenzen unter Ihrem eigenen Namen erstellen.

## Mitwirken

Fehlermeldungen, Korrekturen und Vorschläge für zukünftige Fassungen der SySL sind willkommen. Bitte eröffnen Sie ein Issue oder einen Pull Request unter <https://github.com/celestia-island/sysl>.

Der Prozess für SySL-Versionsaktualisierungen ist in [GOVERNANCE.md](./GOVERNANCE.md) dokumentiert.

## Kontakt

- Autor: langyo <sysl.contact@celestia.world>
- Organisation: [Celestia Island](https://github.com/celestia-island)
- Repository: <https://github.com/celestia-island/sysl>
