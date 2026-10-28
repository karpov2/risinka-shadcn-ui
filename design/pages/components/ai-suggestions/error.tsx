/**
 * @section AiSuggestions
 * @title Ошибка
 */
import { AiSuggestionsError } from '../../../../src/examples/ai-suggestions-example';
import { StateFrame } from '../../../library/kit';

/** AiSuggestions · Ошибка — канонические состояния AiSuggestions. */
export default function AiSuggestionsErrorState() {
  return (
    <StateFrame>
      <AiSuggestionsError />
    </StateFrame>
  );
}
