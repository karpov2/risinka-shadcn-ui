/**
 * @section AiPromptInput
 * @title Ошибка
 */
import { AiPromptInputError } from '../../../../src/examples/ai-prompt-input-example';
import { StateFrame } from '../../../library/kit';

/** AiPromptInput · Ошибка — канонические состояния AiPromptInput. */
export default function AiPromptInputErrorState() {
  return (
    <StateFrame>
      <AiPromptInputError />
    </StateFrame>
  );
}
