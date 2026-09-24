/**
 * @section Skeleton
 * @title Card
 */
import { SkeletonCard } from '../../../../src/examples/skeleton-example';
import { StateFrame } from '../../../library/kit';

/** Skeleton · Card — сводный пример shadcn/ui (MIT, apps/v4/registry/bases/base/examples/skeleton-example.tsx, тег shadcn@4.21.0). */
export default function SkeletonCardState() {
  return (
    <StateFrame muted>
      <SkeletonCard />
    </StateFrame>
  );
}
