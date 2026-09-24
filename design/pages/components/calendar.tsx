/**
 * @section Поля и формы
 * @title Calendar
 */
import CalendarDemo from '../../../src/demos/calendar-demo';
import { ComponentTile } from '../../library/kit';

/** Calendar — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/calendar-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function CalendarTile() {
  return (
    <ComponentTile>
      <CalendarDemo />
    </ComponentTile>
  );
}
