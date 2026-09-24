/**
 * @title Все варианты
 */
import ItemExample from '../../../../src/examples/item-example';
import { ComponentSheet } from '../../../library/kit';

/** Item — все варианты: сводный пример из репозитория shadcn/ui (MIT, apps/v4/registry/bases/base/examples/item-example.tsx, тег shadcn@4.21.0). */
export default function ItemSheet() {
  return (
    <ComponentSheet name="Item" file="src/components/ui/item.tsx">
      <ItemExample />
    </ComponentSheet>
  );
}
