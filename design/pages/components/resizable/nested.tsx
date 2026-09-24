/**
 * @section ResizablePanelGroup
 * @title Nested
 */
import { ResizableNested } from '../../../../src/examples/resizable-example';
import { StateFrame } from '../../../library/kit';

/** ResizablePanelGroup · Nested — сводный пример shadcn/ui (MIT, apps/v4/registry/bases/base/examples/resizable-example.tsx, тег shadcn@4.21.0). */
export default function ResizableNestedState() {
  return (
    <StateFrame muted>
      <ResizableNested />
    </StateFrame>
  );
}
