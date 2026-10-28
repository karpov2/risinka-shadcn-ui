/**
 * @section Чат и ИИ
 * @title AiPromptInput
 */
import AiPromptInputExample from '../../../src/demos/ai-prompt-input-demo';
import { ComponentTile } from '../../library/kit';

/** AiPromptInput — плитка сводки shadcn/ui: каноническая композиция AiPromptInput. Все варианты — на странице компонента. */
export default function AiPromptInputTile() {
  return (
    <ComponentTile>
      <AiPromptInputExample />
    </ComponentTile>
  );
}
