/**
 * @section Кнопки и действия
 * @title ToggleGroup
 */
import { ToggleGroupDemo } from '../../../src/demos/toggle-group-demo';
import { ComponentTile } from '../../library/kit';

/** ToggleGroup — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/toggle-group-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function ToggleGroupTile() {
  return (
    <ComponentTile>
      <ToggleGroupDemo />
    </ComponentTile>
  );
}
