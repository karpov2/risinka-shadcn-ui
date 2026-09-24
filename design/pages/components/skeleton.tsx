/**
 * @section Обратная связь
 * @title Skeleton
 */
import { SkeletonDemo } from '../../../src/demos/skeleton-demo';
import { ComponentTile } from '../../library/kit';

/** Skeleton — плитка сводки shadcn/ui: официальное демо (MIT, apps/v4/examples/base/skeleton-demo.tsx, тег shadcn@4.21.0). Все варианты — на странице компонента. */
export default function SkeletonTile() {
  return (
    <ComponentTile>
      <SkeletonDemo />
    </ComponentTile>
  );
}
