/**
 * @section Item
 * @title ItemGroup
 */
import { DefaultItemGroup } from '../../../../src/examples/item-example';
import { StateFrame } from '../../../library/kit';

/** Item · ItemGroup — сводный пример shadcn/ui (MIT, apps/v4/registry/bases/base/examples/item-example.tsx, тег shadcn@4.21.0). */
export default function DefaultItemGroupState() {
  return (
    <StateFrame muted>
      <DefaultItemGroup />
    </StateFrame>
  );
}
