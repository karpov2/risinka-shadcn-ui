/**
 * @section Данные
 * @title Carousel
 */
import CarouselDemo from '../../../src/demos/carousel-demo';
import { ComponentTile } from '../../library/kit';

/** Carousel — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/carousel-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function CarouselTile() {
  return (
    <ComponentTile>
      <CarouselDemo />
    </ComponentTile>
  );
}
