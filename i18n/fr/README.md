# Licence de Source Synthétique (SySL)

**Une nouvelle licence logicielle conçue pour le code généré par IA — fonctionnant comme un contrat contraignant indépendant du droit d’auteur.**

[![License](https://img.shields.io/badge/license-SySL%201.0-blue)](./LICENSE.txt)

---

## Qu'est-ce que la SySL ?

La SySL est une nouvelle catégorie de licence logicielle. Elle traite un problème qu'aucune licence traditionnelle ne couvre : **que se passe-t-il lorsque le code n'est pas écrit par un humain ?**

Les licences open source traditionnelles (MIT, GPL, Apache-2.0) reposent sur le droit d'auteur. Elles supposent qu'un auteur humain détient les droits d'auteur et accorde des autorisations depuis cette position. Mais les tribunaux aux États-Unis, dans l'Union européenne et ailleurs ont jugé que les œuvres purement générées par IA **ne peuvent pas être protégées par le droit d'auteur** — il n'y a pas d'auteur humain, donc il n'y a pas de droit d'auteur.

Cela crée un vide juridique. Si le code généré par IA n'est pas protégé par le droit d'auteur, alors :

- Les licences traditionnelles qui reposent sur le droit d'auteur peuvent n'avoir **aucune force juridique**.
- N'importe qui peut utiliser, copier ou modifier le code avec des **conséquences juridiques incertaines**.
- Les contributeurs et les utilisateurs évoluent dans une **zone grise juridique**.

La SySL comble ce vide. Elle fonctionne à la fois comme une licence de droit d'auteur (si le droit d'auteur existe) et comme un contrat contraignant (si le droit d'auteur n'existe pas). Elle établit trois normes nouvelles :

1. **Transparence** : chaque copie doit divulguer que le code est généré par IA.
2. **Sécurité juridique** : la licence fonctionne quel que soit le statut du droit d'auteur.
3. **Reconnaissance des risques** : le code généré par IA présente des modes de défaillance uniques.

## Pourquoi est-ce important ?

En 2026, les modèles d'IA génèrent couramment des bases de code entières. Des projets réels existent déjà où l'IA génère 100 % du code source—des applications, des bibliothèques et des systèmes entiers, construits par des individus dirigeant des modèles d'IA plutôt qu'en écrivant du code à la main.

Ce n'est pas une hypothèse. Les logiciels générés par IA sont là. Le cadre juridique doit rattraper son retard.

La SySL est la première étape : une licence qui est honnête sur ce qu'est le code, qui l'a fait et quelles sont les règles.

## Caractéristiques principales

| Caractéristique | Description |
|---------|-------------|
| **Divulgation de l'IA** | Chaque copie et œuvre dérivée doit divulguer la génération par IA et les modèles utilisés |
| **Double fondement juridique** | Fonctionne à la fois comme licence de droit d'auteur et comme contrat indépendant |
| **Concession de brevets** | Protection par brevet équivalente à Apache-2.0 |
| **Compatible Apache-2.0** | Le code SySL peut être combiné avec du code Apache-2.0 |
| **Licences superposées** | Coexiste avec BUSL-1.1 pour la protection commerciale (double licence) |
| **Copyleft synthétique** | Les œuvres dérivées doivent préserver la divulgation de l'IA (obligation de transparence, pas de partage du code source) |
| **Exclusion spécifique à l'IA** | Exclut explicitement les modes de défaillance propres à l'IA |
| **Multilingue** | Disponible en 11 langues (l'anglais faisant foi) |

## Démarrage rapide

Pour utiliser la SySL pour votre projet :

1. Copiez `LICENSE.txt` à la racine de votre dépôt.
2. Créez un fichier `AI_DISCLOSURE` (ou `AI_DISCLOSURE.md`) décrivant :
   - Quels modèles d'IA ont été utilisés
   - Le nombre approximatif de jetons consommés
   - La proportion de code généré par IA par rapport au code écrit par un humain
3. Ajoutez un badge à votre README :

```markdown
[![License: SySL 1.0](https://img.shields.io/badge/license-SySL%201.0-blue)](https://github.com/celestia-island/sysl)
```

Ou utilisez la forme courte dans votre déclaration de licence :

```
Sous licence Synthetic Source License, Version 1.0.
Voir https://github.com/celestia-island/sysl pour le texte complet de la licence.
```

## Comparaison avec les licences traditionnelles

| Préoccupation | MIT | Apache 2.0 | GPLv3 | SySL 1.0 |
|---------|-----|------------|-------|----------|
| Nécessite le droit d'auteur pour fonctionner | Oui | Oui | Oui | **Non** (recours contractuel) |
| Gère le code généré par IA | Non | Non | Non | **Oui** (conception centrale) |
| Concession de brevets | Non | Oui | Oui | **Oui** |
| Copyleft | Non | Non | Oui (fort) | **Oui** (divulgation uniquement) |
| Divulgation de l'IA requise | Non | Non | Non | **Oui** |
| Attribution requise | Oui | Oui | Oui | **Oui** (attribution IA) |

Voir [COMPARISON.md](./COMPARISON.md) pour une analyse détaillée.

## Langues

La SySL est disponible dans les langues suivantes. La version anglaise fait foi juridiquement ; les traductions sont fournies à titre informatif.

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

## Adoptants

Projets ayant adopté la SySL :

| Projet | Description | Depuis |
|---------|-------------|-------|
|  | Plateforme d'orchestration d'IA multi-agents | 2026-06 |
| [shittim-chest](https://github.com/celestia-island/shittim-chest) | Shell Web pour plateforme IA | 2026-06 |
| [evernight](https://github.com/celestia-island/evernight) | Bibliothèque de contrôle à distance multiplateforme | 2026-06 |

*Pour ajouter votre projet, soumettez une PR à [ADOPTERS.md](./ADOPTERS.md).*

## Philosophie

La SySL repose sur la conviction que **la transparence n'est pas une restriction de la liberté — elle est une condition préalable à la confiance**.

Lorsqu'un humain écrit du code, le code porte des garanties implicites : l'auteur comprenait ce qu'il faisait, a testé les cas limites et a pris ses responsabilités. Le code généré par IA ne porte rien de tout cela. C'est une production statistique, pas une création raisonnée. Les utilisateurs méritent de savoir à quoi ils ont affaire.

La SySL ne restreint pas ce que vous pouvez faire avec le code généré par IA. Elle exige seulement que vous disiez aux gens ce qu'il est.

## Licence de la SySL elle-même

Le texte de la Licence de Source Synthétique est protégé par le droit d'auteur de langyo. Vous pouvez librement reproduire et distribuer le texte de la licence aux fins de l'octroi de licences pour vos logiciels. Vous ne pouvez pas modifier le texte de la licence et l'appeler « SySL » sans l'autorisation de l'Auteur, mais vous pouvez créer des licences dérivées sous votre propre nom.

## Contribuer

Les signalements de bogues, les corrections et les suggestions pour les futures versions de la SySL sont les bienvenus. Veuillez ouvrir une issue ou une pull request à l'adresse <https://github.com/celestia-island/sysl>.

Le processus de mise à jour des versions de la SySL est documenté dans [GOVERNANCE.md](./GOVERNANCE.md).

## Contact

- Auteur : langyo <sysl.contact@celestia.world>
- Organisation : [Celestia Island](https://github.com/celestia-island)
- Dépôt : <https://github.com/celestia-island/sysl>
