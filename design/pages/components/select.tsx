/**
 * @section Поля и формы
 * @title Select
 */
import { SelectDemo } from '../../../src/demos/select-demo';
import { ComponentTile } from '../../library/kit';

/** Select — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/select-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function SelectTile() {
  return (
    <ComponentTile>
      <SelectDemo />
    </ComponentTile>
  );
}
