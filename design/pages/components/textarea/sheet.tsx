/**
 * @title Все варианты
 */
import TextareaExample from '../../../../src/examples/textarea-example';
import { ComponentSheet } from '../../../library/kit';

/** Textarea — все варианты: сводный пример из репозитория shadcn/ui (MIT, apps/v4/registry/bases/base/examples/textarea-example.tsx, тег shadcn@4.21.0). */
export default function TextareaSheet() {
  return (
    <ComponentSheet name="Textarea" file="src/components/ui/textarea.tsx">
      <TextareaExample />
    </ComponentSheet>
  );
}
