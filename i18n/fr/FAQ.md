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
- Si vous distribuez uniquement des binaires, inclure l'avis de divulgation de l'IA et une copie (ou un lien vers) le fichier AI_DISCLOSURE.

Vous n'êtes **pas** tenu de distribuer votre code source. Le copyleft de la SySL se limite à préserver la chaîne de divulgation de l'IA.

### Puis-je combiner du code SySL avec du code Apache-2.0 ?

Oui. La SySL est explicitement compatible avec Apache-2.0. L'œuvre combinée peut être distribuée sous Apache-2.0, à condition que les exigences de divulgation de la SySL soient satisfaites de manière indépendante.

### Puis-je combiner du code SySL avec du code GPL ?

La compatibilité avec la GPL n'a pas été formellement analysée. Les deux licences comportent des obligations de type copyleft (divulgation du code source pour la GPL, divulgation de l'IA pour la SySL). Si vous devez combiner du code SySL avec du code GPL, consultez un conseiller juridique ou ouvrez une issue pour une analyse de compatibilité.

### La SySL peut-elle être utilisée avec la BUSL ?

Oui. La SySL est conçue pour la superposition de licences. Le concédant peut proposer un logiciel simultanément sous SySL et sous BUSL-1.1 (double licence). Les deux licences servent des objectifs différents :

- **BUSL-1.1** : protège l'usage commercial pendant une période de développement, puis bascule vers la Licence de Changement spécifiée.
- **SySL** : établit la norme de transparence selon laquelle la génération par IA doit être divulguée.

Les utilisateurs peuvent choisir la licence à respecter. Voir la Section 11.3 de la licence pour la disposition formelle relative aux licences superposées.

**Important** : lorsque BUSL est utilisée parallèlement à la SySL pour un logiciel Généré par IA, la Licence de Changement BUSL doit être fixée à SySL (et non Apache-2.0 ou MIT). Si BUSL bascule vers une licence sans obligation de divulgation (comme Apache-2.0), les destinataires du code après la date de changement peuvent supprimer la divulgation de l'IA — ce qui va à l'encontre de l'objectif de la SySL. Fixer la Licence de Changement à SySL garantit que la norme de transparence survit à la période de non-concurrence BUSL.

### Dois-je divulguer l'utilisation de l'IA si j'utilise le logiciel uniquement en interne ?

Non. Les exigences de divulgation de la Section 2 s'appliquent lorsque vous **distribuez** le logiciel (fournissez une copie à un tiers). L'utilisation interne au sein d'une seule organisation, y compris le déploiement SaaS où vous fournissez un service plutôt qu'une copie du logiciel, ne constitue pas une distribution au sens de la SySL.

### Qu'est-ce qui est considéré comme « Généré par IA » ?

Tout code, documentation, configuration ou autre matériel produit par un modèle ou un système d'IA, y compris les grands modèles de langage (LLM), les modèles de génération de code et les systèmes d'apprentissage automatique similaires. Cela inclut le code qui a été partiellement généré puis édité par un humain — la divulgation au niveau du fichier doit indiquer la proportion approximative de génération par IA.

## Questions juridiques

### La SySL est-elle juridiquement exécutoire ?

La SySL est conçue pour être exécutoire selon deux théories juridiques indépendantes :

1. **Droit d'auteur** : si le code généré par IA est jugé protégeable par le droit d'auteur, la SySL fonctionne comme une licence de droit d'auteur traditionnelle.
2. **Droit des contrats** : si le code n'est pas protégeable par le droit d'auteur, la SySL fonctionne comme un contrat contraignant. En utilisant le logiciel, vous acceptez les conditions.

L'approche à double fondement s'inspire de la Functional Source License (FSL, dans le cadre de l'initiative Fair Source de Sentry), qui a été adoptée par plusieurs entreprises et n'a jamais été contestée avec succès.

### Que se passe-t-il si le droit d'auteur évolue ?

Si un tribunal ou un législateur juge que le code généré par IA est protégeable par le droit d'auteur, la concession de droits d'auteur de la SySL (Section 3) prend immédiatement effet, offrant une voie de licence claire. Aucune modification de la licence n'est nécessaire.

### Qui est l'« Auteur » au sens de la SySL ?

L'Auteur est déterminé selon trois niveaux, en fonction de qui a dirigé la génération par l'IA :

1. **Direction directe** : la personne physique qui a directement rédigé les invites, conçu l'architecture et guidé l'IA.
2. **Direction indirecte** : si c'est un système d'IA (et non une personne) qui a directement dirigé la génération, la personne physique ayant conçu, configuré ou déployé ce système d'IA.
3. **Absence d'intervention humaine** : si aucune personne n'est intervenue à quelque niveau que ce soit, l'entité qui a la première publié le logiciel.

Cette approche à plusieurs niveaux reconnaît que les systèmes d'IA (comme la flotte d'agents d' elle-même) pourront à l'avenir diriger la génération de code de manière autonome. La définition garantit qu'il existe toujours un ancrage juridique pour le contrat.

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

L'Auteur peut publier des versions révisées officielles de la SySL. Voir la Section 16 de la licence.

## Adoption

### Qui utilise la SySL ?

### Comment ajouter mon projet à la liste des adoptants ?

