/**
 * @section Навигация
 * @title Breadcrumb
 */
import { BreadcrumbDemo } from '../../../src/demos/breadcrumb-demo';
import { ComponentTile } from '../../library/kit';

/** Breadcrumb — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/breadcrumb-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function BreadcrumbTile() {
  return (
    <ComponentTile>
      <BreadcrumbDemo />
    </ComponentTile>
  );
}
