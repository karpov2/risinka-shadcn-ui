/**
 * @title Все варианты
 */
import { MessageScrollerDemo } from '../../../../src/demos/message-scroller-demo';
import { ComponentSheet } from '../../../library/kit';

/** MessageScroller — все варианты: сводного примера нет — демо (своё демо Risinka). */
export default function MessageScrollerSheet() {
  return (
    <ComponentSheet name="MessageScroller" file="src/components/ui/message-scroller.tsx">
      <MessageScrollerDemo />
    </ComponentSheet>
  );
}
