/**
 * @title Все варианты
 */
import CarouselExample from '../../../../src/examples/carousel-example';
import { ComponentSheet } from '../../../library/kit';

/** Carousel — все варианты: сводный пример из репозитория shadcn/ui (MIT, apps/v4/registry/bases/base/examples/carousel-example.tsx, тег shadcn@4.21.0). */
export default function CarouselSheet() {
  return (
    <ComponentSheet name="Carousel" file="src/components/ui/carousel.tsx">
      <CarouselExample />
    </ComponentSheet>
  );
}
