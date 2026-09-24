/**
 * @section Чат и ИИ
 * @title Bubble
 */
import { BubbleDemo } from '../../../src/demos/bubble-demo';
import { ComponentTile } from '../../library/kit';

/** Bubble — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/bubble-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function BubbleTile() {
  return (
    <ComponentTile>
      <BubbleDemo />
    </ComponentTile>
  );
}
