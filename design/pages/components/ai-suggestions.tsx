/**
 * @section Чат и ИИ
 * @title AiSuggestions
 */
import AiSuggestionsExample from '../../../src/demos/ai-suggestions-demo';
import { ComponentTile } from '../../library/kit';

/** AiSuggestions — плитка сводки shadcn/ui: каноническая композиция AiSuggestions. Все варианты — на странице компонента. */
export default function AiSuggestionsTile() {
  return (
    <ComponentTile>
      <AiSuggestionsExample />
    </ComponentTile>
  );
}
