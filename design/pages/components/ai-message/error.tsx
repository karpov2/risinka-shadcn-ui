/**
 * @section AiMessage
 * @title Ошибка
 */
import { AiMessageError } from '../../../../src/examples/ai-message-example';
import { StateFrame } from '../../../library/kit';

/** AiMessage · Ошибка — канонические состояния AiMessage. */
export default function AiMessageErrorState() {
  return (
    <StateFrame>
      <AiMessageError />
    </StateFrame>
  );
}
