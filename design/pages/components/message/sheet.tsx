/**
 * @title Все варианты
 */
import { MessageDemo } from '../../../../src/demos/message-demo';
import { ComponentSheet } from '../../../library/kit';

/** Message — все варианты: сводного примера нет — демо (apps/v4/examples/base/message-demo.tsx). */
export default function MessageSheet() {
  return (
    <ComponentSheet name="Message" file="src/components/ui/message.tsx">
      <MessageDemo />
    </ComponentSheet>
  );
}
