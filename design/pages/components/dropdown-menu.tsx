/**
 * @section Меню и окна
 * @title DropdownMenu
 */
import { DropdownMenuDemo } from '../../../src/demos/dropdown-menu-demo';
import { ComponentTile } from '../../library/kit';

/** DropdownMenu — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/dropdown-menu-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function DropdownMenuTile() {
  return (
    <ComponentTile>
      <DropdownMenuDemo />
    </ComponentTile>
  );
}
