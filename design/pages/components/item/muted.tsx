/**
 * @section Item
 * @title Muted
 */
import { MutedVariantItems } from '../../../../src/examples/item-example';
import { StateFrame } from '../../../library/kit';

/** Item · Muted — сводный пример shadcn/ui (MIT, apps/v4/registry/bases/base/examples/item-example.tsx, тег shadcn@4.21.0). */
export default function MutedVariantItemsState() {
  return (
    <StateFrame muted>
      <MutedVariantItems />
    </StateFrame>
  );
}
