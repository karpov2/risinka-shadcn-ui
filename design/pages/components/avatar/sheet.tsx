/**
 * @title Все варианты
 */
import AvatarExample from '../../../../src/examples/avatar-example';
import { ComponentSheet } from '../../../library/kit';

/** Avatar — все варианты: сводный пример из репозитория shadcn/ui (MIT, apps/v4/registry/bases/base/examples/avatar-example.tsx, тег shadcn@4.21.0). */
export default function AvatarSheet() {
  return (
    <ComponentSheet name="Avatar" file="src/components/ui/avatar.tsx">
      <AvatarExample />
    </ComponentSheet>
  );
}
