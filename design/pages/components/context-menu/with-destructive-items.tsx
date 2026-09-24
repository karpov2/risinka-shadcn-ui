/**
 * @section ContextMenu
 * @title With Destructive Items
 */
import { ContextMenuWithDestructive } from '../../../../src/examples/context-menu-example';
import { StateFrame } from '../../../library/kit';

/** ContextMenu · With Destructive Items — сводный пример shadcn/ui (MIT, apps/v4/registry/bases/base/examples/context-menu-example.tsx, тег shadcn@4.21.0). */
export default function ContextMenuWithDestructiveState() {
  return (
    <StateFrame muted>
      <ContextMenuWithDestructive />
    </StateFrame>
  );
}
