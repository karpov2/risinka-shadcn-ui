/**
 * @section Обложка
 * @title Витрина
 */
import { Badge } from '../../../src/components/ui/badge';
import { Button } from '../../../src/components/ui/button';
import { Checkbox } from '../../../src/components/ui/checkbox';
import { Input } from '../../../src/components/ui/input';
import { Switch } from '../../../src/components/ui/switch';
import { Showcase } from '../../library/kit';

/** Витрина shadcn/ui — обложка её карточки на экране «Библиотеки» (240 × 90): мелкие узнаваемые компоненты в её теме. */
export default function ShowcaseSheet() {
  return (
    <Showcase>
      <div className="flex flex-col items-center gap-1.5 text-sm">
        <div className="flex gap-1.5">
          <Button size="xs">Button</Button>
          <Button size="xs" variant="outline">
            Outline
          </Button>
        </div>
        <div className="flex items-center gap-1.5">
          <Badge>Badge</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Switch defaultChecked aria-label="Переключатель" />
        </div>
        <div className="flex items-center gap-1.5">
          <Input className="h-6 w-28 text-sm" placeholder="Email" />
          <Checkbox defaultChecked aria-label="Флажок" />
        </div>
      </div>
    </Showcase>
  );
}
