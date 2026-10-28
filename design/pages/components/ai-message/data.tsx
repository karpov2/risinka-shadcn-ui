/**
 * @section AiMessage
 * @title Данные
 */
import { AiMessageData } from '../../../../src/examples/ai-message-example';
import { StateFrame } from '../../../library/kit';

/** AiMessage · Данные — канонические состояния AiMessage. */
export default function AiMessageDataState() {
  return (
    <StateFrame>
      <AiMessageData />
    </StateFrame>
  );
}
