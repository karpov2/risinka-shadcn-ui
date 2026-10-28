/**
 * @section AiTrace
 * @title Ошибка
 */
import { AiTraceError } from '../../../../src/examples/ai-trace-example';
import { StateFrame } from '../../../library/kit';

/** AiTrace · Ошибка — канонические состояния AiTrace. */
export default function AiTraceErrorState() {
  return (
    <StateFrame>
      <AiTraceError />
    </StateFrame>
  );
}
