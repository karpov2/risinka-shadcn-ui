/**
 * @section AiConfirmation
 * @title Ошибка
 */
import { AiConfirmationError } from '../../../../src/examples/ai-confirmation-example';
import { StateFrame } from '../../../library/kit';

/** AiConfirmation · Ошибка — канонические состояния AiConfirmation. */
export default function AiConfirmationErrorState() {
  return (
    <StateFrame>
      <AiConfirmationError />
    </StateFrame>
  );
}
