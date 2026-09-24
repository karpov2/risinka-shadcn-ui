/**
 * @section Меню и окна
 * @title ContextMenu
 */
import { ContextMenuDemo } from '../../../src/demos/context-menu-demo';
import { ComponentTile } from '../../library/kit';

/** ContextMenu — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/context-menu-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function ContextMenuTile() {
  return (
    <ComponentTile>
      <ContextMenuDemo />
    </ComponentTile>
  );
}
