/**
 * @section Меню и окна
 * @title Drawer
 */
import { DrawerDemo } from '../../../src/demos/drawer-demo';
import { ComponentTile } from '../../library/kit';

/** Drawer — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/drawer-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function DrawerTile() {
  return (
    <ComponentTile>
      <DrawerDemo />
    </ComponentTile>
  );
}
