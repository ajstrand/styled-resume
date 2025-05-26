import render from 'preact-render-to-string'
const Test = () => <p>this is a test</p>

export function serverRender(url, context) {
  const ex = render(<Test />)
  return { body: ex, status: 200, type: 'text/html' }
}
