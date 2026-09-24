/**
 * @section Item
 * @title Muted - ItemGroup
 */
import { MutedItemGroup } from '../../../../src/examples/item-example';
import { StateFrame } from '../../../library/kit';

/** Item · Muted - ItemGroup — сводный пример shadcn/ui (MIT, apps/v4/registry/bases/base/examples/item-example.tsx, тег shadcn@4.21.0). */
export default function MutedItemGroupState() {
  return (
    <StateFrame muted>
      <MutedItemGroup />
    </StateFrame>
  );
}
