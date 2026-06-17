# 합성 소스 라이선스 (SySL)

**AI 생성 코드를 위해 설계된 새로운 소프트웨어 라이선스——저작권과 독립적인 구속력 있는 계약으로 작동합니다.**

[![License](https://img.shields.io/badge/license-SySL%201.0-blue)](./LICENSE.txt)

---

## SySL이란 무엇인가?

SySL은 새로운 범주의 소프트웨어 라이선스입니다. 기존의 어떤 라이선스도 다루지 못하는 문제를 해결합니다: **코드가 사람이 작성한 것이 아니라면 어떻게 되는가?**

전통적인 오픈소스 라이선스(MIT, GPL, Apache-2.0)는 저작권법에 기반을 둡니다. 이들은 인간 저작자가 저작권을 보유하고 그 지위로부터 권한을 부여한다고 가정합니다. 그러나 미국, 유럽연합 및 기타 지역의 법원은 순수하게 AI가 생성한 저작물은 **저작권 보호를 받을 수 없다**---인간 저작자가 없으므로 저작권도 존재하지 않는다---고 판시했습니다.

이는 법적 공백을 초래합니다. AI 생성 코드에 저작권이 없다면:

- 저작권에 의존하는 전통적 라이선스는 **법적 효력이 없을** 수 있습니다.
- 누구든지 **불확실한 법적 결과**를 감수하고 코드를 사용, 복제, 수정할 수 있습니다.
- 기여자와 사용자는 **법적 회색 지대**에서 활동하게 됩니다.

SySL은 이 공백을 메웁니다. 이는 저작권 라이선스(저작권이 존재하는 경우)이자 구속력 있는 계약(저작권이 존재하지 않는 경우)으로 작동합니다. 다음과 같은 세 가지 새로운 규범을 수립합니다:

1. **투명성**: 모든 사본은 코드가 AI 생성되었음을 공개해야 합니다.
2. **법적 확실성**: 라이선스는 저작권 상태와 무관하게 작동합니다.
3. **위험 인지**: AI 생성 코드에는 고유한 실패 양상이 존재합니다.

## 이것이 중요한 이유

2026년, AI 모델은 일상적으로 전체 코드베이스를 생성합니다. AI가 소스 코드의 100%를 생성하는 실제 프로젝트가 이미 존재합니다——개인이 AI 모델을 지휘하여 구축한 완전한 애플리케이션, 라이브러리, 시스템입니다.

이것은 가상의 시나리오가 아닙니다. AI 생성 소프트웨어는 이미 현실입니다. 법적 프레임워크가 이를 따라잡아야 합니다.

SySL은 그 첫걸음입니다: 코드가 무엇인지, 누가 만들었는지, 그리고 규칙이 무엇인지에 대해 정직한 라이선스입니다.

## 주요 특징

| 특징 | 설명 |
|---------|-------------|
| **AI 생성 공개** | 모든 사본과 파생물은 AI 생성 사실과 사용된 모델을 공개해야 함 |
| **이중 법적 기반** | 저작권 라이선스 및 독립 계약의 두 가지로 기능 |
| **특허 허여** | Apache-2.0과 동등한 특허 보호 |
| **Apache-2.0 호환** | SySL 코드는 Apache-2.0 코드와 결합 가능 |
| **계층적 라이선싱** | BUSL-1.1과 공존하여 상업적 보호 가능 (이중 라이선스) |
| **합성 카피레프트** | 파생물은 AI 공개를 보존해야 함 (소스 코드가 아닌 공개만) |
| **AI 특유의 보증 부인** | AI 고유의 실패 양상을 명시적으로 부인 |
| **다국어** | 11개 언어로 제공 (영어가 법적 구속력 보유) |

## 빠른 시작

프로젝트에 SySL을 사용하려면:

1. 저장소 루트에 `LICENSE.txt`를 복사합니다.
2. 다음 내용을 설명하는 `AI_DISCLOSURE`(또는 `AI_DISCLOSURE.md`) 파일을 생성합니다:
   - 어떤 AI 모델이 사용되었는지
   - 대략적으로 소비된 토큰 수
   - AI 생성 코드와 사람이 작성한 코드의 비율
3. README에 배지를 추가합니다:

```markdown
[![License: SySL 1.0](https://img.shields.io/badge/license-SySL%201.0-blue)](https://github.com/celestia-island/sysl)
```

또는 라이선스 선언에 단축 형식을 사용합니다:

```
Licensed under the Synthetic Source License, Version 1.0.
See https://github.com/celestia-island/sysl for the full license text.
```

## 전통적 라이선스와의 비교

| 관심사 | MIT | Apache 2.0 | GPLv3 | SySL 1.0 |
|---------|-----|------------|-------|----------|
| 작동에 저작권 필요 | 예 | 예 | 예 | **아니오** (계약 대비책) |
| AI 생성 코드 처리 | 아니오 | 아니오 | 아니오 | **예** (핵심 설계) |
| 특허 허여 | 아니오 | 예 | 예 | **예** |
| 카피레프트 | 아니오 | 아니오 | 예 (강력함) | **예** (공개만) |
| AI 공개 요구 | 아니오 | 아니오 | 아니오 | **예** |
| 저작자 표시 요구 | 예 | 예 | 예 | **예** (AI 저작자 표시) |

자세한 분석은 [COMPARISON.md](./COMPARISON.md)를 참조하십시오.

## 언어

SySL은 다음 언어로 제공됩니다. 영어 버전이 법적 구속력을 가지며, 번역은 정보 제공용입니다.

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

## 도입 프로젝트

SySL을 도입한 프로젝트:

| 프로젝트 | 설명 | 도입 시기 |
|---------|-------------|-------|
|  | 멀티 에이전트 AI 오케스트레이션 플랫폼 | 2026-06 |
| [shittim-chest](https://github.com/celestia-island/shittim-chest) | AI 플랫폼 웹 셸 | 2026-06 |
| [evernight](https://github.com/celestia-island/evernight) | 크로스 플랫폼 원격 제어 라이브러리 | 2026-06 |

*프로젝트를 추가하려면 [ADOPTERS.md](./ADOPTERS.md)에 PR을 제출하십시오.*

## 철학

SySL은 **투명성은 자유에 대한 제한이 아니라 신뢰의 전제 조건**이라는 신념에 기반을 둡니다.

사람이 코드를 작성할 때, 그 코드는 암묵적인 보증을 수반합니다: 저작자는 자신이 무엇을 하고 있는지 이해했고, 경계 조건을 테스트했으며, 책임을 졌다는 것입니다. AI 생성 코드는 이러한 어떤 것도 수반하지 않습니다. 그것은 통계적 출력이지, 추론된 창작물이 아닙니다. 사용자는 자신이 무엇을 다루고 있는지 알 권리가 있습니다.

SySL은 AI 생성 코드로 무엇을 할 수 있는지 제한하지 않습니다. 단지 그것이 무엇인지 사람들에게 알리도록 요구할 뿐입니다.

## SySL 자체의 라이선스

합성 소스 라이선스 텍스트는 langyo에게 저작권이 있습니다. 귀하는 소프트웨어 라이선스 부여 목적으로 라이선스 텍스트를 자유롭게 복제 및 배포할 수 있습니다. 저작자의 허가 없이 라이선스 텍스트를 수정하고 이를 "SySL"이라고 칭할 수 없지만, 귀하의 이름으로 파생 라이선스를 만들 수는 있습니다.

## 기여

버그 보고, 정정 및 향후 SySL 버전에 대한 제안을 환영합니다. <https://github.com/celestia-island/sysl>에서 이슈나 풀 리퀘스트를 열어 주십시오.

SySL 버전 업데이트 절차는 [GOVERNANCE.md](./GOVERNANCE.md)에 문서화되어 있습니다.

## 연락처

- 저작자: langyo <sysl.contact@celestia.world>
- 단체: [Celestia Island](https://github.com/celestia-island)
- 저장소: <https://github.com/celestia-island/sysl>
