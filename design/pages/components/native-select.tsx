/**
 * @section Поля и формы
 * @title NativeSelect
 */
import NativeSelectDemo from '../../../src/demos/native-select-demo';
import { ComponentTile } from '../../library/kit';

/** NativeSelect — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/native-select-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function NativeSelectTile() {
  return (
    <ComponentTile>
      <NativeSelectDemo />
    </ComponentTile>
  );
}
