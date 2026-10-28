/**
 * @section AiMessage
 * @title Работа
 */
import { AiMessageWorking } from '../../../../src/examples/ai-message-example';
import { StateFrame } from '../../../library/kit';

/** AiMessage · Работа — канонические состояния AiMessage. */
export default function AiMessageWorkingState() {
  return (
    <StateFrame>
      <AiMessageWorking />
    </StateFrame>
  );
}
