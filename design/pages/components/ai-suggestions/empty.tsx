/**
 * @section AiSuggestions
 * @title Пусто
 */
import { AiSuggestionsEmpty } from '../../../../src/examples/ai-suggestions-example';
import { StateFrame } from '../../../library/kit';

/** AiSuggestions · Пусто — канонические состояния AiSuggestions. */
export default function AiSuggestionsEmptyState() {
  return (
    <StateFrame>
      <AiSuggestionsEmpty />
    </StateFrame>
  );
}
