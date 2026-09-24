/**
 * @section Раскладка
 * @title Accordion
 */
import AccordionDemo from '../../../src/demos/accordion-demo';
import { ComponentTile } from '../../library/kit';

/** Accordion — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/accordion-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function AccordionTile() {
  return (
    <ComponentTile>
      <AccordionDemo />
    </ComponentTile>
  );
}
