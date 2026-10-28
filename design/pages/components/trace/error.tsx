/**
 * @section Trace
 * @title Ошибка
 */
import { TraceError } from '../../../../src/examples/trace-example';
import { StateFrame } from '../../../library/kit';

/** Trace · Ошибка — свой пример Risinka на официальном Trace. */
export default function TraceErrorState() {
  return (
    <StateFrame>
      <TraceError />
    </StateFrame>
  );
}
