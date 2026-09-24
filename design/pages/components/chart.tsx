/**
 * @section Данные
 * @title ChartContainer
 */
import { ChartDemo } from '../../../src/demos/chart-demo';
import { ComponentTile } from '../../library/kit';

/** ChartContainer — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/chart-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function ChartContainerTile() {
  return (
    <ComponentTile stretch>
      <ChartDemo />
    </ComponentTile>
  );
}
