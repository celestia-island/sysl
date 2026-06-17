# Comparação de Licenças: SySL vs. Licenças Tradicionais

## Visão Geral

| | SySL 1.0 | MIT | Apache 2.0 | GPLv3 | BUSL 1.1 |
|---|:---:|:---:|:---:|:---:|:---:|
| **Ano de criação** | 2026 | 1988 | 2004 | 2007 | 2016 |
| **Tipo** | Código Sintético | Permissiva | Permissiva + Patente | Copyleft forte | Código Aberto Adiado |
| **Direitos autorais exigidos** | Não (fallback contratual) | Sim | Sim | Sim | Sim |
| **Consciente de IA** | Sim (design central) | Não | Não | Não | Não |
| **Concessão de patente** | Sim (condicional: apenas se o Autor detiver patentes) | Não | Sim | Sim | Não |
| **Treinamento de IA permitido** | Sim (explícito, §9.1) | Silente | Silente | Silente | Silente |
| **Perda por infração** | Sim (§9.2, perda automática) | Não | Não | Não | Não |
| **Copyleft** | Apenas divulgação | Não | Não | Sim (forte) | Não |
| **Uso comercial** | Sim (com divulgação) | Sim | Sim | Sim (com código-fonte) | Período de não concorrência |
| **Termos de distribuição** | Manter divulgação de IA | Manter aviso de direitos autorais | Manter aviso de direitos autorais + patente | Distribuir sob GPL | Compatível com FSL |
| **Renúncia de responsabilidade** | Padrão + específica para IA | Padrão | Padrão | Padrão | Padrão |
| **Aprovada pela OSI** | Não (nova categoria) | Sim | Sim | Sim | Não |
| **Livre pela FSF** | Sim (quatro liberdades) | Sim | Sim | Sim | Não |
| **Data de mudança** | Nenhuma (perpétua) | N/A | N/A | N/A | Converte para a licença designada |

## Análise Detalhada

### SySL vs. MIT

**Quando escolher MIT**: Seu código é escrito por humanos, você deseja máxima simplicidade e permissividade, e não precisa de proteção de patente ou termos específicos para IA.

**Quando escolher SySL**: Seu código é substancialmente gerado por IA, você deseja que os usuários saibam disso, e deseja que a licença funcione mesmo se os direitos autorais não se aplicarem.

**Diferença fundamental**: A MIT é puramente uma licença de direitos autorais. Se os direitos autorais não cobrirem seu código gerado por IA, a MIT não fornece arcabouço jurídico. A SySL funciona tanto como licença de direitos autorais quanto como contrato.

### SySL vs. Apache 2.0

**Quando escolher Apache 2.0**: Seu código é escrito por humanos, você deseja uma licença permissiva com proteção de patente, e atua em um ambiente corporativo.

**Quando escolher SySL**: O mesmo das comparações com a MIT, além de: a SySL foi projetada para ser compatível com a Apache 2.0. Você pode combinar código licenciado sob SySL com código licenciado sob Apache-2.0 e distribuir sob Apache 2.0, desde que as divulgações de IA sejam mantidas.

**Diferença fundamental**: A Apache 2.0 possui uma concessão de patente. A SySL possui uma concessão de patente equivalente. A diferença crítica é que a Apache 2.0 pressupõe direitos autorais e não oferece fallback contratual. A concessão de patente da SySL opera independentemente dos direitos autorais.

### SySL vs. GPLv3

**Quando escolher GPLv3**: Você deseja copyleft forte — qualquer um que modifique e redistribua seu código também deve distribuir suas modificações sob GPL.

**Quando escolher SySL**: Você deseja transparência, mas não coerção de compartilhamento de código. O "copyleft sintético" da SySL exige apenas que a divulgação de IA seja mantida, não que o projeto inteiro seja tornado código aberto.

**Diferença fundamental**: O copyleft da GPL é sobre manter o código aberto. O copyleft da SySL é sobre manter a cadeia de divulgação de IA intacta. Você pode pegar código SySL, adicionar modificações proprietárias e distribuir sob uma licença proprietária — desde que a divulgação de IA permaneça.

### SySL vs. BUSL 1.1

**Quando escolher BUSL 1.1**: Você deseja proteger um produto comercial de ser clonado por concorrentes, com o código eventualmente convertendo para código aberto.

**Quando escolher SySL**: Você deseja adoção máxima com uma norma de transparência. Não há período de não concorrência e não há conversão automática.

**Diferença fundamental**: A BUSL é uma licença defensiva (proteger o negócio). A SySL é uma licença de transparência (estabelecer uma norma social). Elas servem a propósitos diferentes e podem coexistir via licenciamento duplo (SySL §11.3). Para projetos gerados por IA que utilizam ambas, a Licença de Mudança da BUSL deve ser definida como SySL — não Apache-2.0 — caso contrário, a norma de transparência desaparece quando o período de não concorrência termina.

## Matriz de Compatibilidade

Você pode combinar código sob a licença A com código sob a licença B?

| Licença A ↓ / Licença B → | MIT | Apache 2.0 | GPLv3 | SySL 1.0 | BUSL 1.1 |
|:---|:---:|:---:|:---:|:---:|:---:|
| **MIT** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Apache 2.0** | ✓ | ✓ | ✓ (apenas v3) | ✓ | Condicional |
| **GPLv3** | ✓ | ✓ (apenas v3) | ✓ | Em análise | ✗ |
| **SySL 1.0** | ✓ | ✓ | Em análise | ✓ | Condicional |
| **BUSL 1.1** | ✓ | Condicional | ✗ | Condicional | ✗ |

*✓ = compatibilidade conhecida. ✗ = incompatibilidade conhecida. "Em análise" = ainda não analisado. "Condicional" = depende de termos específicos.*

## Qual Licença Devo Usar?

```
Seu código é substancialmente gerado por IA?
  ├── Sim → Você está confortável com usuários não sabendo?
  │         ├── Sim → MIT ou Apache 2.0
  │         └── Não → SySL
  └── Não → Você precisa de proteção de patente?
              ├── Sim → Apache 2.0
              └── Não → MIT
```

Para código gerado por IA especificamente:

```
Você deseja que os derivados mantenham a divulgação de IA?
  ├── Sim → SySL
  └── Não → MIT ou Apache 2.0 (reconhecendo a incerteza jurídica)
```
