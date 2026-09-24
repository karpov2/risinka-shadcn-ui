/**
 * @section Обратная связь
 * @title Toast
 */
import { ToastDemo } from '../../../src/demos/toast-demo';
import { ComponentTile } from '../../library/kit';

/** Toast — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/toast-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function ToastTile() {
  return (
    <ComponentTile>
      <ToastDemo />
    </ComponentTile>
  );
}
