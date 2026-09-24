/**
 * @section Данные
 * @title Empty
 */
import EmptyDemo from '../../../src/demos/empty-demo';
import { ComponentTile } from '../../library/kit';

/** Empty — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/empty-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function EmptyTile() {
  return (
    <ComponentTile>
      <EmptyDemo />
    </ComponentTile>
  );
}
