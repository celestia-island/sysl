# Perguntas Frequentes

## Sobre a SySL

### Por que o código gerado por IA precisa de uma licença especial?

As licenças de código aberto tradicionais (MIT, GPL, Apache-2.0) são fundamentadas na lei de direitos autorais. Elas pressupõem que um autor humano detém os direitos autorais sobre o código. Mas tribunais nos EUA (Thaler v. Perlmutter, 2025-2026) e na UE decidiram que obras puramente geradas por IA não podem ser protegidas por direitos autorais — não há autor humano, portanto não há direitos autorais.

Se o código gerado por IA não tem direitos autorais, uma licença tradicional que se apoia em direitos autorais pode não ter força legal. A SySL resolve isso operando tanto como uma licença de direitos autorais (se existirem direitos autorais) quanto como um contrato independente (se não existirem).

### A SySL é "código aberto"?

A SySL satisfaz a Definição de Software Livre (liberdade para executar, estudar, modificar e compartilhar) e a maior parte da Definição de Código Aberto, com uma exceção: a SySL exige a divulgação da geração por IA. Este requisito de divulgação é uma condição de uso, que algumas interpretações da OSD podem considerar uma restrição.

A SySL define uma **nova categoria** — "Código Sintético" — que é adjacente e compatível com o Código Aberto, mas aborda um cenário para o qual o código aberto tradicional nunca foi projetado.

### A SySL é uma licença copyleft?

Sim, mas de um novo tipo. O copyleft tradicional (GPL) exige que os trabalhos derivados sejam distribuídos sob a mesma licença. O "copyleft sintético" da SySL exige apenas que os trabalhos derivados **preservem a cadeia de divulgação de IA** — não que sejam distribuídos sob a SySL.

Portanto, você pode pegar código licenciado sob SySL, modificá-lo e distribuir o resultado sob MIT ou Apache-2.0, **desde que mantenha a divulgação de IA intacta**. Isso é intencional: a SySL visa disseminar a norma de transparência sem criar incompatibilidade de licenças.

## Usando a SySL

### Posso usar código licenciado sob SySL em um produto proprietário?

Sim, desde que você cumpra os requisitos de divulgação (Seção 2) e os requisitos de divulgação recíproca (Seção 8). Isso significa:

- Manter o aviso de divulgação de IA na sua documentação.
- Se distribuir código-fonte, manter as divulgações de geração por IA em nível de arquivo.
- Se distribuir apenas binários, incluir o aviso de divulgação de IA e uma cópia do (ou link para o) arquivo AI_DISCLOSURE.

### Posso combinar código SySL com código Apache-2.0?

Sim. A SySL é explicitamente compatível com Apache-2.0. O trabalho combinado pode ser distribuído sob Apache-2.0, desde que os requisitos de divulgação da SySL sejam cumpridos de forma independente.

### Posso combinar código SySL com código GPL?

A compatibilidade com a GPL não foi formalmente analisada. Ambas as licenças têm obrigações semelhantes a copyleft (divulgação de código-fonte para GPL, divulgação de IA para SySL). Se você precisar combinar código SySL com código GPL, consulte um advogado ou abra uma issue para uma análise de compatibilidade.

### A SySL pode ser usada em conjunto com a BUSL?

Sim. A SySL foi projetada para licenciamento em camadas. Um licenciante pode oferecer software sob ambas SySL e BUSL-1.1 simultaneamente (dupla licença). As duas licenças servem a propósitos diferentes:

- **BUSL-1.1**: protege o uso comercial durante um período de desenvolvimento e depois converte para a Licença de Mudança especificada.
- **SySL**: estabelece a norma de transparência de que a geração por IA deve ser divulgada.

Os usuários podem escolher qual licença seguir. Consulte a Seção 11.3 da licença para a disposição formal de licenciamento em camadas.

**Importante**: ao utilizar a BUSL juntamente com a SySL para software gerado por IA, a Licença de Mudança da BUSL deve ser definida como SySL (não Apache-2.0 ou MIT). Se a BUSL converter para uma licença sem obrigações de divulgação (como Apache-2.0), os destinatários do código pós-data de mudança podem remover a divulgação de IA — anulando o propósito da SySL. Definir a Licença de Mudança como SySL garante que a norma de transparência sobreviva ao período de não concorrência da BUSL.

### Preciso divulgar o uso de IA se eu usar o software apenas internamente?

Não. Os requisitos de divulgação da Seção 2 se aplicam quando você **distribui** o software (fornece uma cópia a terceiros). O uso interno dentro de uma única organização, incluindo a implantação em SaaS em que você fornece um serviço em vez de uma cópia do software, não constitui distribuição sob a SySL.

### O que conta como "Gerado por IA"?

Qualquer código, documentação, configuração ou outro material produzido por um modelo ou sistema de IA, incluindo grandes modelos de linguagem (LLMs), modelos de geração de código e sistemas similares de aprendizado de máquina. Isso inclui código que foi parcialmente gerado e depois editado por um humano — a divulgação em nível de arquivo deve indicar a proporção aproximada de geração por IA.

## Questões Jurídicas

### A SySL é juridicamente exequível?

A SySL foi projetada para ser exequível sob duas teorias jurídicas independentes:

1. **Lei de direitos autorais**: se o código gerado por IA for considerado protegível por direitos autorais, a SySL opera como uma licença de direitos autorais tradicional.
2. **Direito contratual**: se o código não for protegível por direitos autorais, a SySL opera como um contrato vinculativo. Ao usar o software, você concorda com os termos.

A abordagem de dupla base é inspirada na Fair Source License (FSL) da Sentry, que foi adotada por várias empresas e não foi contestada com sucesso.

### O que acontece se a lei de direitos autorais mudar?

Se um tribunal ou legislador decidir que o código gerado por IA é protegível por direitos autorais, a concessão de direitos autorais da SySL (Seção 3) entra em vigor imediatamente, fornecendo um caminho claro de licenciamento. Não é necessária nenhuma emenda à licença.

### Quem é o "Autor" sob a SySL?

O Autor é determinado em três níveis, conforme quem dirigiu a geração por IA:

1. **Direção direta**: o ser humano que diretamente escreveu os prompts, projetou a arquitetura e orientou a IA.
2. **Direção indireta**: se um sistema de IA (e não um ser humano) dirigiu diretamente a geração, o ser humano que projetou, configurou ou implantou esse sistema de IA.
3. **Nenhum envolvimento humano**: se nenhum ser humano esteve envolvido em qualquer nível, a entidade que primeiro publicou o software.

Esta abordagem em múltiplos níveis reconhece que sistemas de IA (como a própria frota de agentes do ) podem dirigir autonomamente a geração de código no futuro. A definição garante que sempre haja uma âncora jurídica para o contrato.

### Por que a lei aplicável é definida como a do Japão?

O autor da SySL está baseado em uma jurisdição onde a lei japonesa fornece um arcabouço estável e previsível para o licenciamento de software baseado em contrato. A escolha do Japão como lei aplicável é deliberada: o Japão possui um corpo bem desenvolvido de direito contratual, um sistema jurídico que respeita a autonomia das partes e é neutro em relação às principais jurisdições (EUA, UE, China) onde a SySL provavelmente será usada.

Os usuários em outras jurisdições mantêm seus direitos locais de consumo e proteção de dados.

### E se eu discordar do requisito de divulgação de IA?

O requisito de divulgação é o núcleo da SySL. Se você não puder ou não quiser divulgar a geração por IA, não deve usar software licenciado sob SySL. Licenças alternativas que não exigem divulgação de IA incluem MIT, Apache-2.0 e BSD.

## Questões Práticas

### Como criar um arquivo AI_DISCLOSURE?

Crie um arquivo chamado `AI_DISCLOSURE` ou `AI_DISCLOSURE.md` na raiz do seu repositório. Um exemplo mínimo:

```
MODELOS DE IA UTILIZADOS:
- Claude Opus 4.6 (Anthropic)
- GLM-4 (Zhipu AI)

TOKENS CONSUMIDOS:
- Aproximadamente 100 bilhões de tokens no total

PROPORÇÃO DE GERAÇÃO POR IA:
- ~100% do código-fonte é gerado por IA
- Projeto de arquitetura e garantia de qualidade: humanos
```

### Posso modificar o texto da SySL para o meu projeto?

Você pode modificar o texto da licença para seu próprio uso, mas não deve chamar a versão modificada de "Licença de Código Sintético" ou "SySL" sem permissão. Se você criar uma licença derivada, dê a ela um nome distinto.

O Autor pode publicar versões revisadas oficiais da SySL. Consulte a Seção 16 da licença.

## Adoção

### Quem está usando a SySL?

Consulte [ADOPTERS.md](./ADOPTERS.md) para a lista atual. Os primeiros adotantes são os projetos do ecossistema [](https://github.com/celestia-island/).

### Como adiciono meu projeto à lista de adotantes?

Envie um pull request para [ADOPTERS.md](./ADOPTERS.md) com o nome do seu projeto, uma breve descrição e a data de adoção.
