/**
 * @section Навигация
 * @title Pagination
 */
import PaginationDemo from '../../../src/demos/pagination-demo';
import { ComponentTile } from '../../library/kit';

/** Pagination — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/pagination-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function PaginationTile() {
  return (
    <ComponentTile>
      <PaginationDemo />
    </ComponentTile>
  );
}
