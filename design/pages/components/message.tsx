/**
 * @section Чат и ИИ
 * @title Message
 */
import { MessageDemo } from '../../../src/demos/message-demo';
import { ComponentTile } from '../../library/kit';

/** Message — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/message-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function MessageTile() {
  return (
    <ComponentTile>
      <MessageDemo />
    </ComponentTile>
  );
}
