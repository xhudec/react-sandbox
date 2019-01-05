/**
 * extends jest's `expect` with useful DOM-related assertions
 *
 * @see https://github.com/gnapse/jest-dom#custom-matchers
 */
import 'jest-dom/extend-expect'

/**
 * To prevent Memory Leaks
 *
 * @see https://github.com/kentcdodds/react-testing-library#global-config
 */
import 'react-testing-library/cleanup-after-each'
