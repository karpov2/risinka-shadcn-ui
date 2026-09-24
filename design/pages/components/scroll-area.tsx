/**
 * @section Раскладка
 * @title ScrollArea
 */
import { ScrollAreaDemo } from '../../../src/demos/scroll-area-demo';
import { ComponentTile } from '../../library/kit';

/** ScrollArea — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/scroll-area-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function ScrollAreaTile() {
  return (
    <ComponentTile>
      <ScrollAreaDemo />
    </ComponentTile>
  );
}
