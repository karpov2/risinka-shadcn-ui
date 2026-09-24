/**
 * @section Данные
 * @title Item
 */
import { ItemDemo } from '../../../src/demos/item-demo';
import { ComponentTile } from '../../library/kit';

/** Item — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/item-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function ItemTile() {
  return (
    <ComponentTile>
      <ItemDemo />
    </ComponentTile>
  );
}
