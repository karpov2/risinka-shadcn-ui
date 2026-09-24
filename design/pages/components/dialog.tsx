/**
 * @section Меню и окна
 * @title Dialog
 */
import { DialogDemo } from '../../../src/demos/dialog-demo';
import { ComponentTile } from '../../library/kit';

/** Dialog — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/dialog-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function DialogTile() {
  return (
    <ComponentTile>
      <DialogDemo />
    </ComponentTile>
  );
}
