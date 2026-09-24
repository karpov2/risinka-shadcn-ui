/**
 * @section Меню и окна
 * @title Command
 */
import { CommandDemo } from '../../../src/demos/command-demo';
import { ComponentTile } from '../../library/kit';

/** Command — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/command-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function CommandTile() {
  return (
    <ComponentTile>
      <CommandDemo />
    </ComponentTile>
  );
}
