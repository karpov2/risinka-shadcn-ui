/**
 * @section Item
 * @title Default
 */
import { DefaultVariantItems } from '../../../../src/examples/item-example';
import { StateFrame } from '../../../library/kit';

/** Item · Default — сводный пример shadcn/ui (MIT, apps/v4/registry/bases/base/examples/item-example.tsx, тег shadcn@4.21.0). */
export default function DefaultVariantItemsState() {
  return (
    <StateFrame muted>
      <DefaultVariantItems />
    </StateFrame>
  );
}
