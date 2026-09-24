/**
 * @title Все варианты
 */
import TableExample from '../../../../src/examples/table-example';
import { ComponentSheet } from '../../../library/kit';

/** Table — все варианты: сводный пример из репозитория shadcn/ui (MIT, apps/v4/registry/bases/base/examples/table-example.tsx, тег shadcn@4.21.0). */
export default function TableSheet() {
  return (
    <ComponentSheet name="Table" file="src/components/ui/table.tsx">
      <TableExample />
    </ComponentSheet>
  );
}
