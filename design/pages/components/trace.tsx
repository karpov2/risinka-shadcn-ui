/**
 * @section Чат и ИИ
 * @title Trace
 */
import TraceExample from '../../../src/demos/trace-demo';
import { ComponentTile } from '../../library/kit';

/** Trace — плитка сводки shadcn/ui: свой пример Risinka на официальном Trace. Все варианты — на странице компонента. */
export default function TraceTile() {
  return (
    <ComponentTile>
      <TraceExample />
    </ComponentTile>
  );
}
