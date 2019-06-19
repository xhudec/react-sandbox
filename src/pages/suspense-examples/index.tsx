import React from 'react'
import Typography from '@material-ui/core/Typography'

const LazyLoadedMyComponent = React.lazy(() => import('./MyComponent'))

const SuspenseExamplesPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h2">🤙React Suspense Examples</Typography>

      <section>
        <Typography variant="h3">Lazy Loading!</Typography>

        <React.Suspense fallback={<Typography>Loading...</Typography>}>
          <LazyLoadedMyComponent />
        </React.Suspense>
      </section>
    </div>
  )
}

export default SuspenseExamplesPage
