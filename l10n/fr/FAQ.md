# Foire Aux Questions

## À propos de la SySL

### Pourquoi le code généré par IA a-t-il besoin d'une licence spéciale ?

Les licences open source traditionnelles (MIT, GPL, Apache-2.0) reposent sur le droit d'auteur. Elles supposent qu'un auteur humain détient les droits d'auteur sur le code. Mais les tribunaux aux États-Unis (Thaler c. Perlmutter, 2025-2026) et dans l'UE ont jugé que les œuvres purement générées par IA ne peuvent pas être protégées par le droit d'auteur — il n'y a pas d'auteur humain, donc il n'y a pas de droit d'auteur.

Si le code généré par IA n'est pas protégé par le droit d'auteur, une licence traditionnelle qui repose sur le droit d'auteur peut n'avoir aucune force juridique. La SySL résout ce problème en fonctionnant à la fois comme une licence de droit d'auteur (si le droit d'auteur existe) et comme un contrat indépendant (s'il n'existe pas).

### La SySL est-elle « open source » ?

La SySL satisfait la Définition du Logiciel Libre (liberté d'exécuter, d'étudier, de modifier et de partager) et la plupart de la Définition de l'Open Source, à une exception près : la SySL exige la divulgation de la génération par IA. Cette exigence de divulgation est une condition d'utilisation, que certaines interprétations de l'OSD peuvent considérer comme une restriction.

La SySL définit une **nouvelle catégorie** — « Source Synthétique » — qui est voisine et compatible avec l'Open Source, mais qui traite un scénario pour lequel l'open source traditionnel n'a jamais été conçu.

### La SySL est-elle une licence copyleft ?

Oui, mais d'un type nouveau. Le copyleft traditionnel (GPL) exige que les œuvres dérivées soient distribuées sous la même licence. Le « copyleft synthétique » de la SySL exige seulement que les œuvres dérivées **préservent la chaîne de divulgation de l'IA** — et non qu'elles soient distribuées sous la SySL.

Ainsi, vous pouvez prendre du code sous licence SySL, le modifier et distribuer le résultat sous licence MIT ou Apache-2.0, **tant que vous conservez la divulgation de l'IA intacte**. C'est délibéré : la SySL vise à diffuser la norme de transparence sans créer d'incompatibilité de licence.

## Utiliser la SySL

### Puis-je utiliser du code sous licence SySL dans un produit propriétaire ?

Oui, à condition de satisfaire aux exigences de divulgation (Section 2) et aux exigences de divulgation réciproque (Section 8). Cela signifie :

- Conserver l'avis de divulgation de l'IA dans votre documentation.
- Si vous distribuez le code source, maintenir les divulgations de génération par IA au niveau des fichiers.
- Si vous distribuez uniquement des binaires, fournir le code source correspondant (avec les divulgations) ou une offre écrite de le faire.

### Puis-je combiner du code SySL avec du code Apache-2.0 ?

Oui. La SySL est explicitement compatible avec Apache-2.0. L'œuvre combinée peut être distribuée sous Apache-2.0, à condition que les exigences de divulgation de la SySL soient satisfaites de manière indépendante.

### Puis-je combiner du code SySL avec du code GPL ?

La compatibilité avec la GPL n'a pas été formellement analysée. Les deux licences comportent des obligations de type copyleft (divulgation du code source pour la GPL, divulgation de l'IA pour la SySL). Si vous devez combiner du code SySL avec du code GPL, consultez un conseiller juridique ou ouvrez une issue pour une analyse de compatibilité.

### Dois-je divulguer l'utilisation de l'IA si j'utilise le logiciel uniquement en interne ?

Les exigences de divulgation de la Section 2 s'appliquent lorsque vous **distribuez** le logiciel. L'utilisation interne au sein d'une seule organisation ne constitue pas une distribution au sens de la SySL. Cependant, si vous déployez le logiciel en tant que service accessible à des tiers, la Section 8.2 peut s'appliquer.

### Qu'est-ce qui est considéré comme « Généré par IA » ?

Tout code, documentation, configuration ou autre matériel produit par un modèle ou un système d'IA, y compris les grands modèles de langage (LLM), les modèles de génération de code et les systèmes d'apprentissage automatique similaires. Cela inclut le code qui a été partiellement généré puis édité par un humain — la divulgation au niveau du fichier doit indiquer la proportion approximative de génération par IA.

## Questions juridiques

### La SySL est-elle juridiquement exécutoire ?

La SySL est conçue pour être exécutoire selon deux théories juridiques indépendantes :

1. **Droit d'auteur** : si le code généré par IA est jugé protégeable par le droit d'auteur, la SySL fonctionne comme une licence de droit d'auteur traditionnelle.
2. **Droit des contrats** : si le code n'est pas protégeable par le droit d'auteur, la SySL fonctionne comme un contrat contraignant. En utilisant le logiciel, vous acceptez les conditions.

L'approche à double fondement s'inspire de la Fair Source License (FSL) de Sentry, qui a été adoptée par plusieurs entreprises et n'a jamais été contestée avec succès.

### Que se passe-t-il si le droit d'auteur évolue ?

Si un tribunal ou un législateur juge que le code généré par IA est protégeable par le droit d'auteur, la concession de droits d'auteur de la SySL (Section 3) prend immédiatement effet, offrant une voie de licence claire. Aucune modification de la licence n'est nécessaire.

### Qui est l'« Auteur » au sens de la SySL ?

L'Auteur est la ou les personnes physiques qui ont dirigé le processus de génération par l'IA : conception de l'architecture, ingénierie des invites, spécification des contraintes, assurance qualité et intégration. Cela reflète la réalité que le code généré par IA n'est pas créé par l'IA elle-même, mais par les humains qui guident et organisent sa production.

### Pourquoi le droit applicable est-il celui du Japon ?

L'auteur de la SySL est basé dans une juridiction où le droit japonais fournit un cadre stable et prévisible pour les licences logicielles de nature contractuelle. Le choix du Japon comme droit applicable est délibéré : le Japon dispose d'un corpus de droit des contrats bien développé, d'un système juridique qui respecte l'autonomie des parties et est neutre par rapport aux principales juridictions (États-Unis, UE, Chine) où la SySL est susceptible d'être utilisée.

Les utilisateurs dans d'autres juridictions conservent leurs droits locaux en matière de consommation et de protection des données.

### Que faire si je ne suis pas d'accord avec l'exigence de divulgation de l'IA ?

L'exigence de divulgation est le cœur de la SySL. Si vous ne pouvez pas ou ne voulez pas divulguer la génération par IA, vous ne devez pas utiliser de logiciel sous licence SySL. Les licences alternatives qui n'exigent pas la divulgation de l'IA incluent MIT, Apache-2.0 et BSD.

## Questions pratiques

### Comment créer un fichier AI_DISCLOSURE ?

Créez un fichier nommé `AI_DISCLOSURE` ou `AI_DISCLOSURE.md` à la racine de votre dépôt. Un exemple minimal :

```
MODÈLES D'IA UTILISÉS :
- Claude Opus 4.6 (Anthropic)
- GLM-4 (Zhipu AI)

JETONS CONSOMMÉS :
- Environ 100 milliards de jetons au total

PROPORTION DE GÉNÉRATION PAR IA :
- ~100 % du code source est généré par IA
- Conception de l'architecture et assurance qualité : humain
```

### Puis-je modifier le texte de la SySL pour mon projet ?

Vous pouvez modifier le texte de la licence pour votre propre usage, mais vous ne devez pas appeler la version modifiée « Synthetic Source License » ou « SySL » sans autorisation. Si vous créez une licence dérivée, donnez-lui un nom distinct.

L'Auteur peut publier des versions révisées officielles de la SySL. Voir la Section 15 de la licence.

## Adoption

### Qui utilise la SySL ?

Voir [ADOPTERS.md](./ADOPTERS.md) pour la liste actuelle. Les premiers adoptants sont les projets de l'écosystème [](https://github.com/celestia-island/).

### Comment ajouter mon projet à la liste des adoptants ?

Soumettez une pull request à [ADOPTERS.md](./ADOPTERS.md) avec le nom de votre projet, une courte description et la date d'adoption.
