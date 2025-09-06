import render from 'preact-render-to-string'
const Placeholder = () => (
  <div>
    <p>this is a placeholder</p>
  </div>
)
export function serverRender(url, context) {
  return render(<Placeholder />)
}
