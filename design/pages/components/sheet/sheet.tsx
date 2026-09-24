/**
 * @title Все варианты
 */
import SheetExample from '../../../../src/examples/sheet-example';
import { ComponentSheet } from '../../../library/kit';

/** Sheet — все варианты: сводный пример из репозитория shadcn/ui (MIT, apps/v4/registry/bases/base/examples/sheet-example.tsx, тег shadcn@4.21.0). */
export default function SheetSheet() {
  return (
    <ComponentSheet name="Sheet" file="src/components/ui/sheet.tsx">
      <SheetExample />
    </ComponentSheet>
  );
}
