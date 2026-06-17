# Comparaison de licences : SySL vs. licences traditionnelles

## Vue d'ensemble

| | SySL 1.0 | MIT | Apache 2.0 | GPLv3 | BUSL 1.1 |
|---|:---:|:---:|:---:|:---:|:---:|
| **Année de création** | 2026 | 1988 | 2004 | 2007 | 2016 |
| **Type** | Source Synthétique | Permissive | Permissive + Brevet | Copyleft fort | Open Source différé |
| **Droit d'auteur requis** | Non (recours contractuel) | Oui | Oui | Oui | Oui |
| **Conçu pour l'IA** | Oui (conception centrale) | Non | Non | Non | Non |
| **Concession de brevet** | Oui (conditionnelle : seulement si l'Auteur détient des brevets) | Non | Oui | Oui | Non |
| **Entraînement d'IA autorisé** | Oui (explicite, §9.1) | Silencieux | Silencieux | Silencieux | Silencieux |
| **Déchéance en cas de contrefaçon** | Oui (§9.2, déchéance automatique) | Non | Non | Non | Non |
| **Copyleft** | Divulgation uniquement | Non | Non | Oui (fort) | Non |
| **Usage commercial** | Oui (avec divulgation) | Oui | Oui | Oui (avec code source) | Période de non-concurrence |
| **Conditions de distribution** | Conserver la divulgation de l'IA | Conserver l'avis de droit d'auteur | Conserver avis droit d'auteur + brevet | Distribuer sous GPL | Compatible avec FSL |
| **Clause de non-responsabilité** | Standard + spécifique à l'IA | Standard | Standard | Standard | Standard |
| **Approuvé par l'OSI** | Non (nouvelle catégorie) | Oui | Oui | Oui | Non |
| **Libre au sens de la FSF** | Oui (les quatre libertés) | Oui | Oui | Oui | Non |
| **Date de changement** | Aucune (perpétuel) | N/A | N/A | N/A | Convertit vers la licence désignée |

## Analyse détaillée

### SySL vs. MIT

**Quand choisir MIT** : Votre code est rédigé par un humain, vous voulez une simplicité et une permissivité maximales, et vous n'avez pas besoin de protection par brevet ni de conditions spécifiques à l'IA.

**Quand choisir SySL** : Votre code est largement généré par IA, vous voulez que les utilisateurs le sachent, et vous voulez que la licence fonctionne même si le droit d'auteur ne s'applique pas.

**Différence clé** : MIT est purement une licence de droit d'auteur. Si le droit d'auteur ne couvre pas votre code généré par IA, MIT ne fournit aucun cadre juridique. La SySL fonctionne à la fois comme licence de droit d'auteur et comme contrat.

### SySL vs. Apache 2.0

**Quand choisir Apache 2.0** : Votre code est rédigé par un humain, vous voulez une licence permissive avec protection par brevet, et vous évoluez dans un environnement d'entreprise.

**Quand choisir SySL** : Comme pour la comparaison avec MIT, et de plus : la SySL est conçue pour être compatible avec Apache 2.0. Vous pouvez combiner du code sous licence SySL avec du code sous licence Apache-2.0 et distribuer sous Apache 2.0, à condition que les divulgations de l'IA soient conservées.

**Différence clé** : Apache 2.0 comporte une concession de brevet. La SySL comporte une concession de brevet équivalente. La différence critique est qu'Apache 2.0 suppose le droit d'auteur et n'offre aucun recours contractuel. La concession de brevet de la SySL fonctionne indépendamment du droit d'auteur.

### SySL vs. GPLv3

**Quand choisir GPLv3** : Vous voulez un copyleft fort — quiconque modifie et redistribue votre code doit également distribuer ses modifications sous GPL.

**Quand choisir SySL** : Vous voulez la transparence sans contrainte de partage du code source. Le « copyleft synthétique » de la SySL exige seulement que la divulgation de l'IA soit conservée, et non que l'ensemble du projet soit publié en open source.

**Différence clé** : Le copyleft de la GPL vise à maintenir le code ouvert. Le copyleft de la SySL vise à maintenir intacte la chaîne de divulgation de l'IA. Vous pouvez prendre du code sous SySL, ajouter des modifications propriétaires et distribuer sous une licence propriétaire — tant que la divulgation de l'IA subsiste.

### SySL vs. BUSL 1.1

**Quand choisir BUSL 1.1** : Vous voulez protéger un produit commercial du clonage par des concurrents, le code se convertissant finalement vers l'open source.

**Quand choisir SySL** : Vous voulez une adoption maximale avec une norme de transparence. Il n'y a ni période de non-concurrence ni conversion automatique.

**Différence clé** : BUSL est une licence défensive (protéger l'entreprise). La SySL est une licence de transparence (établir une norme sociale). Elles servent des objectifs différents et peuvent coexister par double licence (SySL §11.3). Pour les projets générés par IA utilisant les deux, la Licence de Changement de BUSL devrait être fixée à SySL — et non à Apache-2.0 — sinon la norme de transparence s'évapore à la fin de la période de non-concurrence.

## Matrice de compatibilité

Pouvez-vous combiner du code sous la licence A avec du code sous la licence B ?

| Licence A ↓ / Licence B → | MIT | Apache 2.0 | GPLv3 | SySL 1.0 | BUSL 1.1 |
|:---|:---:|:---:|:---:|:---:|:---:|
| **MIT** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Apache 2.0** | ✓ | ✓ | ✓ (v3 uniquement) | ✓ | Conditionnel |
| **GPLv3** | ✓ | ✓ (v3 uniquement) | ✓ | En cours d'examen | ✗ |
| **SySL 1.0** | ✓ | ✓ | En cours d'examen | ✓ | Conditionnel |
| **BUSL 1.1** | ✓ | Conditionnel | ✗ | Conditionnel | ✗ |

*✓ = compatible avéré. ✗ = incompatible avéré. « En cours d'examen » = pas encore analysé. « Conditionnel » = dépend des conditions spécifiques.*

## Quelle licence devrais-je utiliser ?

```
Votre code est-il largement généré par IA ?
  ├── Oui → Êtes-vous à l'aise avec le fait que les utilisateurs ne le sachent pas ?
  │         ├── Oui → MIT ou Apache 2.0
  │         └── Non → SySL
  └── Non → Avez-vous besoin d'une protection par brevet ?
             ├── Oui → Apache 2.0
             └── Non → MIT
```

Pour le code généré par IA spécifiquement :

```
Voulez-vous que les œuvres dérivées conservent la divulgation de l'IA ?
  ├── Oui → SySL
  └── Non → MIT ou Apache 2.0 (en reconnaissant l'incertitude juridique)
```
