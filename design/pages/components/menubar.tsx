/**
 * @section Навигация
 * @title Menubar
 */
import MenubarDemo from '../../../src/demos/menubar-demo';
import { ComponentTile } from '../../library/kit';

/** Menubar — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/menubar-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function MenubarTile() {
  return (
    <ComponentTile>
      <MenubarDemo />
    </ComponentTile>
  );
}
