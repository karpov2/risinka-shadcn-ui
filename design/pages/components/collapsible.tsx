/**
 * @section Раскладка
 * @title Collapsible
 */
import CollapsibleDemo from '../../../src/demos/collapsible-demo';
import { ComponentTile } from '../../library/kit';

/** Collapsible — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/collapsible-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function CollapsibleTile() {
  return (
    <ComponentTile>
      <CollapsibleDemo />
    </ComponentTile>
  );
}
