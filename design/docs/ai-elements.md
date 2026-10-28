# AI Elements

Переносимые композиции — AiTrace, AiMessage, AiPromptInput, AiModelSelector, AiSuggestions, AiConfirmation и AiQuestionnaire; остальные внедряются связанными задачами. Представления получают данные и callbacks; транспорт, разрешения, история и persistence принадлежат потребителю.

## AiTrace

Канонический исходник Risinka: `packages/daemon/src/library/shadcn/ai-trace-source.ts`. Повторная сборка воспроизводит его для Nova и Vega. `library(add, names: ["ai-trace"])` устанавливает Trace через CLI и записывает обычную связь с библиотекой. Каталог и демо не попадают в bundle потребителя.

Пропсы: title, description, icon, status (pending/running/error, отсутствие — завершение), children. Раскрытие: defaultOpen либо обязательная пара open/onOpenChange. Без children строка не обещает раскрытия. Четыре состояния — `design/pages/components/ai-trace/`.

## Поле, выбор и подсказки

AiPromptInput, AiPromptInputTextarea и AiPromptInputFooter — каркас на InputGroup; AiPromptAttachment показывает только переданные сведения и действие удаления. Текст, IME, загрузка и отправка принадлежат приложению.

AiModelSelector получает модели/ступени/подписи и callbacks, сохраняет одно меню с фактическим ползунком; onModelChange подтверждает сохранение. Модель и defaultEffort не выбираются внутри. effortControl — слот потребителя: стандартный Slider либо шкала с его собственными отметками; общая композиция не требует расширения ticks. Фокус и клавиатура списка — Base UI RadioGroup.

AiSuggestions получает список id/label/text/icon и вызывает onSelect(text). Сам компонент ничего не отправляет. У окна выбор заполняет только пустой черновик нового разговора, у Dictly может быть своя политика.

Канонические source/example — ai-prompt-input-source.ts, ai-model-selector-source.ts, ai-suggestions-source.ts. Новая сборка Nova/Vega создаёт те же модули, локальные элементы и четыре состояния каждого. Копии окна проверяются как точные projectSource/RISINKA_RULES проекции; каталог и примеры в bundle не входят.

## Сообщения

AiMessage задаёт выравнивание и Bubble, AiMessageBody принимает содержимое потребителя, footer — его действия. AiMessageAttachment получает только имя, описание и значок; пути и доступность не вычисляет. AiMessageMarker — служебная отметка. Канонический исходник — ai-message-source.ts; четыре состояния и обычный library(add, names: ["ai-message"]) воспроизводятся для Nova/Vega.

## Подтверждения и вопросы

AiConfirmation получает весь список opaque решений, их подписи, иконки, варианты и callback. Содержимое заявки задаёт потребитель; автоматического фокуса, интерпретации id и транспортного слоя нет.

AiQuestionnaire использует официальный Questionnaire и FormData: обязательные вопросы, варианты, свои слова (Textarea через публичный render), password, шаги назад/вперёд и retry без потери черновика. Подписи, данные, представление ошибки и async onAnswer задаёт потребитель. Ключ запроса задаёт границу черновика. @shadcn/react — официальный runtime Questionnaire, AI SDK не используется.

| Паттерн | Источник и демо | Примитивы официального примера | Данные потребителя | Внедрение |
|---|---|---|---|---|
| Chat | [Base UI](https://ui.shadcn.com/docs/ai-elements/base/chat) · [демо](https://ui.shadcn.com/docs/ai-elements/base/chat) | bubble, button, code-block, dropdown-menu, empty, input-group, message, message-scroller, tooltip, trace | Общая рамка ленты; прокрутка через отдельную пробу Message Scroller | [#611](https://github.com/karpov2/risinka/issues/611) |
| Message | [Base UI](https://ui.shadcn.com/docs/ai-elements/base/message) · [демо](https://ui.shadcn.com/docs/ai-elements/base/message) | bubble, button, message, tooltip | Owner/agent, footer действий, даты и сохранённые вложения | [#601](https://github.com/karpov2/risinka/issues/601) |
| Prompt Input | [Base UI](https://ui.shadcn.com/docs/ai-elements/base/prompt-input) · [демо](https://ui.shadcn.com/docs/ai-elements/base/prompt-input) | attachment, dropdown-menu, input-group | Общее поле проекта/создания, вложения, send/stop, черновик | [#602](https://github.com/karpov2/risinka/issues/602) |
| Model Selector | [Base UI](https://ui.shadcn.com/docs/ai-elements/base/model-selector) · [демо](https://ui.shadcn.com/docs/ai-elements/base/model-selector) | dropdown-menu, input-group | Фактический каталог и усилия; сохранить принятое единое меню и #597 | [#602](https://github.com/karpov2/risinka/issues/602) |
| Suggestion | [Base UI](https://ui.shadcn.com/docs/ai-elements/base/suggestion) · [демо](https://ui.shadcn.com/docs/ai-elements/base/suggestion) | bubble, button, input-group, message | Начальные подсказки подставляют текст для отправки владельцем | [#602](https://github.com/karpov2/risinka/issues/602) |
| Reasoning | [Base UI](https://ui.shadcn.com/docs/ai-elements/base/reasoning) · [демо](https://ui.shadcn.com/docs/ai-elements/base/reasoning) | bubble, button, message, trace | Полученный think-текст, работа/завершение; без выдуманной длительности | [#603](https://github.com/karpov2/risinka/issues/603) |
| Tool | [Base UI](https://ui.shadcn.com/docs/ai-elements/base/tool) · [демо](https://ui.shadcn.com/docs/ai-elements/base/tool) | bubble, button, code-block, item, message, sheet, trace | Input/result, ошибка, diff и сохранённые снимки текущего вызова | [#603](https://github.com/karpov2/risinka/issues/603) |
| Chain of Thought | [Base UI](https://ui.shadcn.com/docs/ai-elements/base/chain-of-thought) · [демо](https://ui.shadcn.com/docs/ai-elements/base/chain-of-thought) | badge, bubble, button, code-block, message, trace | Сводка хода с раскрываемыми фактическими шагами | [#603](https://github.com/karpov2/risinka/issues/603) |
| Confirmation | [Base UI](https://ui.shadcn.com/docs/ai-elements/base/confirmation) · [демо](https://ui.shadcn.com/docs/ai-elements/base/confirmation) | bubble, button, item, message, trace | Native запрос разрешения со всеми opaque решениями, не только парой кнопок | [#606](https://github.com/karpov2/risinka/issues/606) |
| Plan | [Base UI](https://ui.shadcn.com/docs/ai-elements/base/plan) · [демо](https://ui.shadcn.com/docs/ai-elements/base/plan) | bubble, button, message, trace | Заранее известные шаги; требует сопоставления событий обоих провайдеров | [#604](https://github.com/karpov2/risinka/issues/604) |
| Task | [Base UI](https://ui.shadcn.com/docs/ai-elements/base/task) · [демо](https://ui.shadcn.com/docs/ai-elements/base/task) | bubble, button, message, trace | Фактические шаги работы, появляются по ходу | [#604](https://github.com/karpov2/risinka/issues/604) |
| Queue | [Base UI](https://ui.shadcn.com/docs/ai-elements/base/queue) · [демо](https://ui.shadcn.com/docs/ai-elements/base/queue) | bubble, button, message, trace | Актуальный todo-list: TodoWrite уже распознаётся, Codex нужно исследовать | [#604](https://github.com/karpov2/risinka/issues/604) |
| Subagent | [Base UI](https://ui.shadcn.com/docs/ai-elements/base/subagent) · [демо](https://ui.shadcn.com/docs/ai-elements/base/subagent) | badge, bubble, button, code-block, message, trace | Вложенные Trace по parent/id, живое состояние отдельно от результата | [#605](https://github.com/karpov2/risinka/issues/605) |
| Terminal | [Base UI](https://ui.shadcn.com/docs/ai-elements/base/terminal) · [демо](https://ui.shadcn.com/docs/ai-elements/base/terminal) | bubble, button, code-block, message, trace | Команды и реальный вывод; готовый result не изображать потоком | [#607](https://github.com/karpov2/risinka/issues/607) |
| Stack Trace | [Base UI](https://ui.shadcn.com/docs/ai-elements/base/stack-trace) · [демо](https://ui.shadcn.com/docs/ai-elements/base/stack-trace) | bubble, button, code-block, message, trace | Проверенно распознанная ошибка и переход к своему файлу | [#607](https://github.com/karpov2/risinka/issues/607) |
| File Tree | [Base UI](https://ui.shadcn.com/docs/ai-elements/base/file-tree) · [демо](https://ui.shadcn.com/docs/ai-elements/base/file-tree) | button, collapsible | Подтверждённые изменения текущей работы; не любой прочитанный путь | [#608](https://github.com/karpov2/risinka/issues/608) |
| Test Results | [Base UI](https://ui.shadcn.com/docs/ai-elements/base/test-results) · [демо](https://ui.shadcn.com/docs/ai-elements/base/test-results) | bubble, button, code-block, message, trace | Структурированный результат runner; текущего tool.result текста недостаточно для гарантированных счётчиков | [#608](https://github.com/karpov2/risinka/issues/608) |
| Context | [Base UI](https://ui.shadcn.com/docs/ai-elements/base/context) · [демо](https://ui.shadcn.com/docs/ai-elements/base/context) | button, hover-card, progress | Точное текущее контекстное окно; это не цена хода и не недельный лимит | [#609](https://github.com/karpov2/risinka/issues/609) |
| Sources | [Base UI](https://ui.shadcn.com/docs/ai-elements/base/sources) · [демо](https://ui.shadcn.com/docs/ai-elements/base/sources) | bubble, button, message, trace | Реальные источники ответа, нормализованный контракт ещё нужен | [#610](https://github.com/karpov2/risinka/issues/610) |
| Inline Citation | [Base UI](https://ui.shadcn.com/docs/ai-elements/base/inline-citation) · [демо](https://ui.shadcn.com/docs/ai-elements/base/inline-citation) | button, hover-card | Ссылки на те же источники только при настоящей привязке к тексту | [#610](https://github.com/karpov2/risinka/issues/610) |
| Checkpoint | [Base UI](https://ui.shadcn.com/docs/ai-elements/base/checkpoint) · [демо](https://ui.shadcn.com/docs/ai-elements/base/checkpoint) | bubble, button, marker, message | Сначала доказать native ветвление/продолжение; срез массива UI не меняет контекст агента | [#612](https://github.com/karpov2/risinka/issues/612) |
