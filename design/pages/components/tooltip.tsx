/**
 * @section Меню и окна
 * @title Tooltip
 */
import { TooltipDemo } from '../../../src/demos/tooltip-demo';
import { ComponentTile } from '../../library/kit';

/** Tooltip — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/tooltip-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function TooltipTile() {
  return (
    <ComponentTile>
      <TooltipDemo />
    </ComponentTile>
  );
}
