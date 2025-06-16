import { Suspense } from 'react';
import DelayComponent from './DelayComponent';

export default function PartialPrerenderingPage() {
  return (
    <div>
      <h1>Partial Prerendering with Suspense</h1>
      <Suspense fallback={<p>Loading delayed content...</p>}>
        <DelayComponent />
      </Suspense>
    </div>
  );
}
