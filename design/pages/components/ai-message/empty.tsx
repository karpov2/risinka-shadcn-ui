/**
 * @section AiMessage
 * @title Пусто
 */
import { AiMessageEmpty } from '../../../../src/examples/ai-message-example';
import { StateFrame } from '../../../library/kit';

/** AiMessage · Пусто — канонические состояния AiMessage. */
export default function AiMessageEmptyState() {
  return (
    <StateFrame>
      <AiMessageEmpty />
    </StateFrame>
  );
}
