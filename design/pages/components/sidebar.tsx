/**
 * @section Навигация
 * @title Sidebar
 */
import AppSidebar from '../../../src/demos/sidebar-demo';
import { ComponentTile } from '../../library/kit';

/** Sidebar — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/sidebar-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function SidebarTile() {
  return (
    <ComponentTile>
      <AppSidebar />
    </ComponentTile>
  );
}
