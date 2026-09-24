/**
 * @section Item
 * @title asChild
 */
import { DefaultLinkItems } from '../../../../src/examples/item-example';
import { StateFrame } from '../../../library/kit';

/** Item · asChild — сводный пример shadcn/ui (MIT, apps/v4/registry/bases/base/examples/item-example.tsx, тег shadcn@4.21.0). */
export default function DefaultLinkItemsState() {
  return (
    <StateFrame muted>
      <DefaultLinkItems />
    </StateFrame>
  );
}
