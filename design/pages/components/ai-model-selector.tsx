/**
 * @section Чат и ИИ
 * @title AiModelSelector
 */
import AiModelSelectorExample from '../../../src/demos/ai-model-selector-demo';
import { ComponentTile } from '../../library/kit';

/** AiModelSelector — плитка сводки shadcn/ui: каноническая композиция AiModelSelector. Все варианты — на странице компонента. */
export default function AiModelSelectorTile() {
  return (
    <ComponentTile>
      <AiModelSelectorExample />
    </ComponentTile>
  );
}
