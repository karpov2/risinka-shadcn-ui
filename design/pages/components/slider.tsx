/**
 * @section Поля и формы
 * @title Slider
 */
import { SliderDemo } from '../../../src/demos/slider-demo';
import { ComponentTile } from '../../library/kit';

/** Slider — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/slider-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function SliderTile() {
  return (
    <ComponentTile>
      <SliderDemo />
    </ComponentTile>
  );
}
