/**
 * @title Все варианты
 */
import BadgeExample from '../../../../src/examples/badge-example';
import { ComponentSheet } from '../../../library/kit';

/** Badge — все варианты: сводный пример из репозитория shadcn/ui (MIT, apps/v4/registry/bases/base/examples/badge-example.tsx, тег shadcn@4.21.0). */
export default function BadgeSheet() {
  return (
    <ComponentSheet name="Badge" file="src/components/ui/badge.tsx">
      <BadgeExample />
    </ComponentSheet>
  );
}
