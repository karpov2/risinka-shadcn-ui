/**
 * @section Поля и формы
 * @title Switch
 */
import { SwitchDemo } from '../../../src/demos/switch-demo';
import { ComponentTile } from '../../library/kit';

/** Switch — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/switch-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function SwitchTile() {
  return (
    <ComponentTile>
      <SwitchDemo />
    </ComponentTile>
  );
}
