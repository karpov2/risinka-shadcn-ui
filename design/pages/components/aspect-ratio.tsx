/**
 * @section Раскладка
 * @title AspectRatio
 */
import AspectRatioDemo from '../../../src/demos/aspect-ratio-demo';
import { ComponentTile } from '../../library/kit';

/** AspectRatio — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/aspect-ratio-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function AspectRatioTile() {
  return (
    <ComponentTile>
      <AspectRatioDemo />
    </ComponentTile>
  );
}
