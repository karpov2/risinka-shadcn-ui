/**
 * @title Все варианты
 */
import CalendarExample from '../../../../src/examples/calendar-example';
import { ComponentSheet } from '../../../library/kit';

/** Calendar — все варианты: сводный пример из репозитория shadcn/ui (MIT, apps/v4/registry/bases/base/examples/calendar-example.tsx, тег shadcn@4.21.0). */
export default function CalendarSheet() {
  return (
    <ComponentSheet name="Calendar" file="src/components/ui/calendar.tsx">
      <CalendarExample />
    </ComponentSheet>
  );
}
