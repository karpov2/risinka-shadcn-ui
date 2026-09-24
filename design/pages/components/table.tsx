/**
 * @section Данные
 * @title Table
 */
import { TableDemo } from '../../../src/demos/table-demo';
import { ComponentTile } from '../../library/kit';

/** Table — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/table-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function TableTile() {
  return (
    <ComponentTile>
      <TableDemo />
    </ComponentTile>
  );
}
