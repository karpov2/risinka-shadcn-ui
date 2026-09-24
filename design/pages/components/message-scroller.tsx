/**
 * @section Чат и ИИ
 * @title MessageScroller
 */
import { MessageScrollerDemo } from '../../../src/demos/message-scroller-demo';
import { ComponentTile } from '../../library/kit';

/** MessageScroller — плитка сводки shadcn/ui: официальное демо (MIT, своё демо Risinka, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function MessageScrollerTile() {
  return (
    <ComponentTile>
      <MessageScrollerDemo />
    </ComponentTile>
  );
}
