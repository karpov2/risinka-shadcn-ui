/**
 * @title Все варианты
 */
import EmptyExample from '../../../../src/examples/empty-example';
import { ComponentSheet } from '../../../library/kit';

/** Empty — все варианты: сводный пример из репозитория shadcn/ui (MIT, apps/v4/registry/bases/base/examples/empty-example.tsx, тег shadcn@4.21.0). */
export default function EmptySheet() {
  return (
    <ComponentSheet name="Empty" file="src/components/ui/empty.tsx">
      <EmptyExample />
    </ComponentSheet>
  );
}
