/**
 * @section Чат и ИИ
 * @title AiTrace
 */
import AiTraceExample from '../../../src/demos/ai-trace-demo';
import { ComponentTile } from '../../library/kit';

/** AiTrace — плитка сводки shadcn/ui: каноническая композиция AiTrace. Все варианты — на странице компонента. */
export default function AiTraceTile() {
  return (
    <ComponentTile>
      <AiTraceExample />
    </ComponentTile>
  );
}
