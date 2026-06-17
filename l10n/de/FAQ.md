# Häufig gestellte Fragen

## Über SySL

### Warum braucht KI-generierter Code eine spezielle Lizenz?

Traditionelle Open-Source-Lizenzen (MIT, GPL, Apache-2.0) basieren auf dem Urheberrecht. Sie gehen davon aus, dass ein menschlicher Urheber das Urheberrecht am Code innehat. Aber Gerichte in den USA (Thaler v. Perlmutter, 2025–2026) und der EU haben entschieden, dass rein KI-generierte Werke nicht urheberrechtlich geschützt werden können — es gibt keinen menschlichen Urheber, also gibt es kein Urheberrecht.

Wenn KI-generierter Code kein Urheberrecht hat, kann eine traditionelle Lizenz, die auf dem Urheberrecht beruht, keinerlei Rechtskraft haben. SySL löst dies, indem sie sowohl als urheberrechtliche Lizenz (wenn Urheberrecht besteht) als auch als unabhängiger Vertrag (wenn keines besteht) fungiert.

### Ist SySL „Open Source"?

SySL erfüllt die Free-Software-Definition (Freiheit, die Software auszuführen, zu untersuchen, zu verändern und zu teilen) und den größten Teil der Open-Source-Definition, mit einer Ausnahme: SySL verlangt die Offenlegung der KI-Generierung. Diese Offenlegungspflicht ist eine Nutzungsbedingung, die von einigen Auslegungen der OSD als Einschränkung betrachtet werden kann.

SySL definiert eine **neue Kategorie** — „Synthetic Source" —, die der Open Source benachbart und mit ihr kompatibel ist, aber ein Szenario adressiert, für das traditionelle Open Source nie konzipiert wurde.

### Ist SySL eine Copyleft-Lizenz?

Ja, aber eine neue Art. Traditionelles Copyleft (GPL) verlangt, dass abgeleitete Werke unter derselben Lizenz verbreitet werden. SySLs „synthetisches Copyleft" verlangt nur, dass abgeleitete Werke **die KI-Offenlegungskette bewahren** — nicht, dass sie unter der SySL verbreitet werden.

Sie können also SySL-lizenzierten Code nehmen, ihn verändern und das Ergebnis unter MIT oder Apache-2.0 verbreiten, **solange Sie die KI-Offenlegung intakt halten**. Dies ist beabsichtigt: SySL zielt darauf ab, die Norm der Transparenz zu verbreiten, ohne Lizenzinkompatibilitäten zu schaffen.

## SySL verwenden

### Kann ich SySL-lizenzierten Code in einem proprietären Produkt verwenden?

Ja, vorausgesetzt Sie erfüllen die Offenlegungspflichten (Abschnitt 2) und die reziproken Offenlegungspflichten (Abschnitt 8). Das bedeutet:

- Behalten Sie den KI-Offenlegungshinweis in Ihrer Dokumentation.
- Wenn Sie Quellcode verbreiten, bewahren Sie die KI-Generierungsoffenlegungen auf Dateiebene.
- Wenn Sie nur Binärdateien verbreiten, stellen Sie den zugehörigen Quellcode (mit Offenlegungen) oder ein schriftliches Angebot dafür bereit.

### Kann ich SySL-Code mit Apache-2.0-Code kombinieren?

Ja. SySL ist ausdrücklich mit Apache-2.0 kompatibel. Das kombinierte Werk darf unter Apache-2.0 verbreitet werden, sofern die Offenlegungspflichten der SySL unabhängig davon erfüllt werden.

### Kann ich SySL-Code mit GPL-Code kombinieren?

Die Kompatibilität mit der GPL wurde noch nicht formal analysiert. Beide Lizenzen haben Copyleft-ähnliche Verpflichtungen (Quelloffenlegung bei der GPL, KI-Offenlegung bei der SySL). Wenn Sie SySL-Code mit GPL-Code kombinieren müssen, konsultieren Sie einen Rechtsberater oder eröffnen Sie ein Issue für eine Kompatibilitätsanalyse.

### Kann SySL zusammen mit BUSL verwendet werden?

Ja. SySL ist für gestufte Lizenzierung konzipiert. Ein Lizenzgeber kann Software gleichzeitig unter SySL und BUSL-1.1 anbieten (Doppellizenzierung). Die beiden Lizenzen dienen unterschiedlichen Zwecken:

- **BUSL-1.1**: schützt die kommerzielle Nutzung während eines Entwicklungszeitraums und wandelt sich dann in die angegebene Change License um.
- **SySL**: etabliert die Transparenznorm, dass KI-Generierung offengelegt werden muss.

Nutzer können wählen, welcher Lizenz sie folgen. Siehe Abschnitt 10.3 der Lizenz für die formelle Bestimmung zur gestuften Lizenzierung.

**Wichtig**: Wenn BUSL neben SySL für KI-generierte Software verwendet wird, sollte die BUSL-Change-License auf SySL (nicht Apache-2.0 oder MIT) festgelegt werden. Würde BUSL in eine Lizenz ohne Offenlegungspflichten (wie Apache-2.0) umgewandelt, könnten Empfänger des Codes nach dem Änderungsdatum die KI-Offenlegung entfernen — was den Zweck von SySL zunichtemachen würde. Die Festlegung der Change License auf SySL stellt sicher, dass die Transparenznorm die BUSL-Wettbewerbsverbotsfrist überdauert.

### Muss ich die KI-Nutzung offenlegen, wenn ich die Software nur intern verwende?

Die Offenlegungspflichten in Abschnitt 2 gelten, wenn Sie die Software **verbreiten**. Die interne Nutzung innerhalb einer einzelnen Organisation stellt keine Verbreitung unter der SySL dar. Wenn Sie die Software jedoch als Dienst bereitstellen, der Dritten zugänglich ist, kann Abschnitt 8.2 anwendbar sein.

### Was gilt als „KI-generiert"?

Jeglicher Code, Dokumentation, Konfiguration oder sonstiges Material, das durch ein KI-Modell oder -System erzeugt wurde, einschließlich großer Sprachmodelle (LLMs), Codegenerierungsmodelle und ähnlicher maschineller Lernsysteme. Dies umfasst Code, der teilweise generiert und dann von einem Menschen bearbeitet wurde — die Offenlegung auf Dateiebene sollte den ungefähren KI-Generierungsanteil angeben.

## Rechtliche Fragen

### Ist SySL rechtlich durchsetzbar?

SySL ist so konzipiert, dass sie nach zwei unabhängigen Rechtstheorien durchsetzbar ist:

1. **Urheberrecht**: Wenn der KI-generierte Code als urheberrechtlich schutzfähig befunden wird, fungiert SySL als traditionelle Urheberrechtslizenz.
2. **Vertragsrecht**: Wenn der Code nicht urheberrechtlich schutzfähig ist, fungiert SySL als verbindlicher Vertrag. Indem Sie die Software nutzen, stimmen Sie den Bedingungen zu.

Der duale Ansatz ist dem Fair Source License (FSL) von Sentry nachempfunden, die von mehreren Unternehmen übernommen wurde und noch nicht erfolgreich angefochten wurde.

### Was passiert, wenn sich das Urheberrecht ändert?

Wenn ein Gericht oder Gesetzgeber entscheidet, dass KI-generierter Code urheberrechtlich schutzfähig ist, tritt die Urheberrechtseinräumung der SySL (Abschnitt 3) sofort in Kraft und bietet einen klaren Lizenzierungsweg. Eine Änderung der Lizenz ist nicht erforderlich.

### Wer ist der „Autor" unter der SySL?

Der Autor wird in drei Stufen bestimmt, je nachdem, wer die KI-Generierung gesteuert hat:

1. **Unmittelbare Steuerung**: der Mensch, der unmittelbar Prompts verfasst, die Architektur entworfen und die KI angeleitet hat.
2. **Mittelbare Steuerung**: wenn ein KI-System (nicht ein Mensch) die Generierung unmittelbar gesteuert hat, der Mensch, der dieses KI-System entworfen, konfiguriert oder eingesetzt hat.
3. **Keine menschliche Beteiligung**: wenn auf keiner Ebene ein Mensch beteiligt war, die Instanz, die die Software zuerst veröffentlicht hat.

Dieser mehrstufige Ansatz trägt dem Umstand Rechnung, dass KI-Systeme (wie s eigene Agentenflotte) die Codegenerierung in Zukunft autonom steuern könnten. Die Definition stellt sicher, dass stets ein rechtlicher Anknüpfungspunkt für den Vertrag besteht.

### Warum ist das anwendbare Recht auf Japan festgelegt?

Der SySL-Autor hat seinen Sitz in einer Jurisdiktion, in der das japanische Recht einen stabilen und berechenbaren Rahmen für vertragsbasierte Softwarelizenzierung bietet. Die Wahl Japans als anwendbares Recht ist bewusst getroffen: Japan verfügt über ein gut entwickeltes Vertragsrechtssystem, ein Rechtssystem, das die Parteiautonomie respektiert, und ist neutral gegenüber den großen Rechtsordnungen (USA, EU, China), in denen SySL voraussichtlich verwendet wird.

Nutzer in anderen Rechtsordnungen behalten ihre lokalen Verbraucher- und Datenschutzrechte.

### Was, wenn ich mit der KI-Offenlegungspflicht nicht einverstanden bin?

Die Offenlegungspflicht ist der Kern von SySL. Wenn Sie die KI-Generierung nicht offenlegen können oder wollen, sollten Sie SySL-lizenzierte Software nicht verwenden. Alternative Lizenzen, die keine KI-Offenlegung verlangen, sind MIT, Apache-2.0 und BSD.

## Praktische Fragen

### Wie erstelle ich eine AI_DISCLOSURE-Datei?

Erstellen Sie eine Datei mit dem Namen `AI_DISCLOSURE` oder `AI_DISCLOSURE.md` im Wurzelverzeichnis Ihres Repositorys. Ein Minimalbeispiel:

```
AI MODELS USED:
- Claude Opus 4.6 (Anthropic)
- GLM-4 (Zhipu AI)

TOKENS CONSUMED:
- Approximately 100 billion tokens total

AI GENERATION PROPORTION:
- ~100% of source code is AI-generated
- Architecture design and quality assurance: human
```

### Kann ich den SySL-Text für mein Projekt verändern?

Sie dürfen den Lizenztext für Ihren eigenen Gebrauch verändern, aber Sie dürfen die veränderte Fassung nicht ohne Genehmigung als „the Synthetic Source License" oder „SySL" bezeichnen. Wenn Sie eine abgeleitete Lizenz erstellen, geben Sie ihr einen eigenständigen Namen.

Der Autor kann offizielle überarbeitete Fassungen der SySL veröffentlichen. Siehe Abschnitt 15 der Lizenz.

## Übernahme

### Wer verwendet SySL?

Siehe [ADOPTERS.md](./ADOPTERS.md) für die aktuelle Liste. Die ersten Adoptierenden sind die Projekte des [](https://github.com/celestia-island/)-Ökosystems.

### Wie füge ich mein Projekt zur Adoptierendenliste hinzu?

Reichen Sie einen Pull Request zu [ADOPTERS.md](./ADOPTERS.md) mit Ihrem Projektnamen, einer kurzen Beschreibung und dem Datum der Übernahme ein.
