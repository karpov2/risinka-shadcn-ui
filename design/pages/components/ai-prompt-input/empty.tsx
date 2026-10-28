/**
 * @section AiPromptInput
 * @title Пусто
 */
import { AiPromptInputEmpty } from '../../../../src/examples/ai-prompt-input-example';
import { StateFrame } from '../../../library/kit';

/** AiPromptInput · Пусто — канонические состояния AiPromptInput. */
export default function AiPromptInputEmptyState() {
  return (
    <StateFrame>
      <AiPromptInputEmpty />
    </StateFrame>
  );
}
