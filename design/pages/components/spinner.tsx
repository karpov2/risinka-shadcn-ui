/**
 * @section Обратная связь
 * @title Spinner
 */
import { SpinnerDemo } from '../../../src/demos/spinner-demo';
import { ComponentTile } from '../../library/kit';

/** Spinner — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/spinner-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function SpinnerTile() {
  return (
    <ComponentTile>
      <SpinnerDemo />
    </ComponentTile>
  );
}
