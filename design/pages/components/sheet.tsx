/**
 * @section Меню и окна
 * @title Sheet
 */
import SheetDemo from '../../../src/demos/sheet-demo';
import { ComponentTile } from '../../library/kit';

/** Sheet — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/sheet-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function SheetTile() {
  return (
    <ComponentTile>
      <SheetDemo />
    </ComponentTile>
  );
}
