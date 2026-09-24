/**
 * @title Все варианты
 */
import CardExample from '../../../../src/examples/card-example';
import { ComponentSheet } from '../../../library/kit';

/** Card — все варианты: сводный пример из репозитория shadcn/ui (MIT, apps/v4/registry/bases/base/examples/card-example.tsx, тег shadcn@4.21.0). */
export default function CardSheet() {
  return (
    <ComponentSheet name="Card" file="src/components/ui/card.tsx">
      <CardExample />
    </ComponentSheet>
  );
}
