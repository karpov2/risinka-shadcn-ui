/**
 * @section Item
 * @title Muted - asChild
 */
import { MutedLinkItems } from '../../../../src/examples/item-example';
import { StateFrame } from '../../../library/kit';

/** Item · Muted - asChild — сводный пример shadcn/ui (MIT, apps/v4/registry/bases/base/examples/item-example.tsx, тег shadcn@4.21.0). */
export default function MutedLinkItemsState() {
  return (
    <StateFrame muted>
      <MutedLinkItems />
    </StateFrame>
  );
}
