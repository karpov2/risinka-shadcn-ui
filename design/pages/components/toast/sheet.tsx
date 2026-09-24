/**
 * @title Все варианты
 */
import ToastExample from '../../../../src/examples/toast-example';
import { ComponentSheet } from '../../../library/kit';

/** Toast — все варианты: сводный пример из репозитория shadcn/ui (MIT, apps/v4/registry/bases/base/examples/toast-example.tsx, тег shadcn@4.21.0). */
export default function ToastSheet() {
  return (
    <ComponentSheet name="Toast" file="src/components/ui/toast.tsx">
      <ToastExample />
    </ComponentSheet>
  );
}
