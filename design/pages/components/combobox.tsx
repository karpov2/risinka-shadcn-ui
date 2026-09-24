/**
 * @section Поля и формы
 * @title Combobox
 */
import ComboboxBasic from '../../../src/demos/combobox-demo';
import { ComponentTile } from '../../library/kit';

/** Combobox — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/combobox-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function ComboboxTile() {
  return (
    <ComponentTile>
      <ComboboxBasic />
    </ComponentTile>
  );
}
