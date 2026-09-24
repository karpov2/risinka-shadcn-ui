/**
 * @section Меню и окна
 * @title HoverCard
 */
import HoverCardDemo from '../../../src/demos/hover-card-demo';
import { ComponentTile } from '../../library/kit';

/** HoverCard — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/hover-card-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function HoverCardTile() {
  return (
    <ComponentTile>
      <HoverCardDemo />
    </ComponentTile>
  );
}
