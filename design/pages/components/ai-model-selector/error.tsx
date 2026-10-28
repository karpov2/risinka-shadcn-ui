/**
 * @section AiModelSelector
 * @title Ошибка
 */
import { AiModelSelectorError } from '../../../../src/examples/ai-model-selector-example';
import { StateFrame } from '../../../library/kit';

/** AiModelSelector · Ошибка — канонические состояния AiModelSelector. */
export default function AiModelSelectorErrorState() {
  return (
    <StateFrame>
      <AiModelSelectorError />
    </StateFrame>
  );
}
