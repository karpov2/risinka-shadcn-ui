/**
 * @section Чат и ИИ
 * @title AiMessage
 */
import AiMessageExample from '../../../src/demos/ai-message-demo';
import { ComponentTile } from '../../library/kit';

/** AiMessage — плитка сводки shadcn/ui: каноническая композиция AiMessage. Все варианты — на странице компонента. */
export default function AiMessageTile() {
  return (
    <ComponentTile>
      <AiMessageExample />
    </ComponentTile>
  );
}
