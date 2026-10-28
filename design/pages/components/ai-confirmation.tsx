/**
 * @section Чат и ИИ
 * @title AiConfirmation
 */
import AiConfirmationExample from '../../../src/demos/ai-confirmation-demo';
import { ComponentTile } from '../../library/kit';

/** AiConfirmation — плитка сводки shadcn/ui: каноническая композиция AiConfirmation. Все варианты — на странице компонента. */
export default function AiConfirmationTile() {
  return (
    <ComponentTile>
      <AiConfirmationExample />
    </ComponentTile>
  );
}
