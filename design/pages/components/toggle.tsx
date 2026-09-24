/**
 * @section Кнопки и действия
 * @title Toggle
 */
import { ToggleDemo } from '../../../src/demos/toggle-demo';
import { ComponentTile } from '../../library/kit';

/** Toggle — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/toggle-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function ToggleTile() {
  return (
    <ComponentTile>
      <ToggleDemo />
    </ComponentTile>
  );
}
