/**
 * @section Данные
 * @title Kbd
 */
import KbdDemo from '../../../src/demos/kbd-demo';
import { ComponentTile } from '../../library/kit';

/** Kbd — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/kbd-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function KbdTile() {
  return (
    <ComponentTile>
      <KbdDemo />
    </ComponentTile>
  );
}
