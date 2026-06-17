# Licença de Código Sintético (SySL)

**A primeira licença de código aberto projetada para software cujo código é 100% gerado por IA.**

[![License](https://img.shields.io/badge/license-SySL%201.0-blue)](./LICENSE.txt)

---

## O que é SySL?

SySL é uma nova categoria de licença de software. Ela aborda um problema que nenhuma licença tradicional resolve: **o que acontece quando o código não é escrito por um ser humano?**

As licenças de código aberto tradicionais (MIT, GPL, Apache-2.0) são fundamentadas na lei de direitos autorais. Elas pressupõem que um autor humano detém os direitos autorais e concede permissões a partir dessa posição. Mas tribunais nos Estados Unidos, na União Europeia e em outros lugares decidiram que obras puramente geradas por IA **não podem ser protegidas por direitos autorais** — não há autor humano, portanto não há direitos autorais.

Isso cria um vácuo jurídico. Se o código gerado por IA não tem direitos autorais, então:

- Licenças tradicionais que se apoiam em direitos autorais podem não ter **força legal**.
- Qualquer pessoa pode usar, copiar ou modificar o código com **consequências jurídicas incertas**.
- Contribuidores e usuários operam em uma **zona cinzenta jurídica**.

A SySL preenche esse vácuo. Ela opera tanto como uma licença de direitos autorais (se existirem direitos autorais) quanto como um contrato vinculativo (se não existirem direitos autorais). Ela estabelece três novas normas:

1. **Transparência**: cada cópia deve divulgar que o código é gerado por IA.
2. **Certeza Jurídica**: a licença funciona independentemente da situação dos direitos autorais.
3. **Reconhecimento de Risco**: o código gerado por IA tem modos de falha únicos.

## Por que isso importa?

Em 2026, modelos de IA geram bases de código inteiras rotineiramente. O projeto [](https://github.com/celestia-island/) — uma plataforma multiagente de orquestração de IA — é uma base de código 100% gerada por IA, composta por mais de 850.000 linhas de Rust, 56 crates e mais de 2.200 testes. Levou 4,3 meses para uma pessoa, usando 100 bilhões de tokens de geração por IA.

Isso não é hipotético. O software gerado por IA chegou. O arcabouço jurídico precisa alcançá-lo.

A SySL é o primeiro passo: uma licença que é honesta sobre o que o código é, quem o fez e quais são as regras.

## Principais Características

| Característica | Descrição |
|----------------|-----------|
| **Divulgação de IA** | Toda cópia e trabalho derivado devem divulgar a geração por IA e os modelos utilizados |
| **Dupla Base Jurídica** | Funciona tanto como licença de direitos autorais quanto como contrato independente |
| **Concessão de Patente** | Equivalente à proteção de patente da Apache-2.0 |
| **Compatível com Apache-2.0** | Código SySL pode ser combinado com código Apache-2.0 |
| **Copyleft Sintético** | Trabalhos derivados devem preservar a divulgação de IA (não o código-fonte, apenas a divulgação) |
| **Isenção Específica para IA** | Isenta explicitamente os modos de falha únicos da IA |
| **Multi-idioma** | Disponível em 11 idiomas (inglês juridicamente vinculativo) |

## Início Rápido

Para usar a SySL no seu projeto:

1. Copie `LICENSE.txt` para a raiz do seu repositório.
2. Crie um arquivo `AI_DISCLOSURE` (ou `AI_DISCLOSURE.md`) descrevendo:
   - Quais modelos de IA foram utilizados
   - Quantidade aproximada de tokens consumidos
   - A proporção de código gerado por IA vs. escrito por humanos
3. Adicione um selo ao seu README:

```markdown
[![License: SySL 1.0](https://img.shields.io/badge/license-SySL%201.0-blue)](https://github.com/celestia-island/sysl)
```

Ou use a forma abreviada na sua declaração de licença:

```
Licenciado sob a Licença de Código Sintético, Versão 1.0.
Consulte https://github.com/celestia-island/sysl para o texto completo da licença.
```

## Comparação com Licenças Tradicionais

| Aspecto | MIT | Apache 2.0 | GPLv3 | SySL 1.0 |
|---------|-----|------------|-------|----------|
| Precisa de direitos autorais para funcionar | Sim | Sim | Sim | **Não** (contrato como alternativa) |
| Lida com código gerado por IA | Não | Não | Não | **Sim** (projeto central) |
| Concessão de patente | Não | Sim | Sim | **Sim** |
| Copyleft | Não | Não | Sim (forte) | **Sim** (apenas divulgação) |
| Divulgação de IA exigida | Não | Não | Não | **Sim** |
| Atribuição exigida | Sim | Sim | Sim | **Sim** (atribuição de IA) |

Consulte [COMPARISON.md](./COMPARISON.md) para uma análise detalhada.

## Idiomas

A SySL está disponível nos seguintes idiomas. A versão em inglês é juridicamente vinculativa; as traduções são informativas.

| Idioma | README | LICENSE | FAQ |
|--------|--------|---------|-----|
| English (vinculativo) | [README.md](./README.md) | [LICENSE.txt](./LICENSE.txt) | [FAQ.md](./FAQ.md) |
| 简体中文 | [l10n/zh-Hans/README.md](./l10n/zh-Hans/README.md) | [l10n/zh-Hans/LICENSE.txt](./l10n/zh-Hans/LICENSE.txt) | [l10n/zh-Hans/FAQ.md](./l10n/zh-Hans/FAQ.md) |
| 繁體中文 | [l10n/zh-Hant/README.md](./l10n/zh-Hant/README.md) | [l10n/zh-Hant/LICENSE.txt](./l10n/zh-Hant/LICENSE.txt) | [l10n/zh-Hant/FAQ.md](./l10n/zh-Hant/FAQ.md) |
| 日本語 | [l10n/ja/README.md](./l10n/ja/README.md) | [l10n/ja/LICENSE.txt](./l10n/ja/LICENSE.txt) | [l10n/ja/FAQ.md](./l10n/ja/FAQ.md) |
| 한국어 | [l10n/ko/README.md](./l10n/ko/README.md) | [l10n/ko/LICENSE.txt](./l10n/ko/LICENSE.txt) | [l10n/ko/FAQ.md](./l10n/ko/FAQ.md) |
| Français | [l10n/fr/README.md](./l10n/fr/README.md) | [l10n/fr/LICENSE.txt](./l10n/fr/LICENSE.txt) | [l10n/fr/FAQ.md](./l10n/fr/FAQ.md) |
| Español | [l10n/es/README.md](./l10n/es/README.md) | [l10n/es/LICENSE.txt](./l10n/es/LICENSE.txt) | [l10n/es/FAQ.md](./l10n/es/FAQ.md) |
| Русский | [l10n/ru/README.md](./l10n/ru/README.md) | [l10n/ru/LICENSE.txt](./l10n/ru/LICENSE.txt) | [l10n/ru/FAQ.md](./l10n/ru/FAQ.md) |
| Deutsch | [l10n/de/README.md](./l10n/de/README.md) | [l10n/de/LICENSE.txt](./l10n/de/LICENSE.txt) | [l10n/de/FAQ.md](./l10n/de/FAQ.md) |
| Português | [l10n/pt/README.md](./l10n/pt/README.md) | [l10n/pt/LICENSE.txt](./l10n/pt/LICENSE.txt) | [l10n/pt/FAQ.md](./l10n/pt/FAQ.md) |
| العربية | [l10n/ar/README.md](./l10n/ar/README.md) | [l10n/ar/LICENSE.txt](./l10n/ar/LICENSE.txt) | [l10n/ar/FAQ.md](./l10n/ar/FAQ.md) |

## Adotantes

Projetos que adotaram a SySL:

| Projeto | Descrição | Desde |
|---------|-----------|-------|
| [](https://github.com/celestia-island/) | Plataforma multiagente de orquestração de IA | 2026-06 |
| [shittim-chest](https://github.com/celestia-island/shittim-chest) | Shell web para plataforma de IA | 2026-06 |
| [evernight](https://github.com/celestia-island/evernight) | Biblioteca multiplataforma de controle remoto | 2026-06 |

*Para adicionar seu projeto, envie um PR para [ADOPTERS.md](./ADOPTERS.md).*

## Filosofia

A SySL é construída sobre a crença de que **a transparência não é uma restrição à liberdade — é um pré-requisito para a confiança**.

Quando um humano escreve código, o código carrega garantias implícitas: o autor entendeu o que estava fazendo, testou casos extremos e assumiu responsabilidade. O código gerado por IA não carrega nada disso. Ele é resultado estatístico, não criação racional. Os usuários merecem saber com qual dos dois estão lidando.

A SySL não restringe o que você pode fazer com o código gerado por IA. Ela apenas exige que você diga às pessoas o que ele é.

## Licença da Própria SySL

O texto da Licença de Código Sintético é protegido por direitos autorais de langyo. Você pode reproduzir e distribuir livremente o texto da licença para fins de licenciamento de seu software. Você não pode modificar o texto da licença e chamá-lo de "SySL" sem a permissão do Autor, mas pode criar licenças derivadas sob seu próprio nome.

## Contribuindo

Relatos de bugs, correções e sugestões para versões futuras da SySL são bem-vindos. Abra uma issue ou pull request em <https://github.com/celestia-island/sysl>.

O processo para atualizações de versão da SySL está documentado em [GOVERNANCE.md](./GOVERNANCE.md).

## Contato

- Autor: langyo <langyo.china@gmail.com>
- Organização: [Celestia Island](https://github.com/celestia-island)
- Repositório: <https://github.com/celestia-island/sysl>
