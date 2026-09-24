/**
 * @section Чат и ИИ
 * @title Marker
 */
import { MarkerDemo } from '../../../src/demos/marker-demo';
import { ComponentTile } from '../../library/kit';

/** Marker — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/marker-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function MarkerTile() {
  return (
    <ComponentTile>
      <MarkerDemo />
    </ComponentTile>
  );
}
