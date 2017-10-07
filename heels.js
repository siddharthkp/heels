import stylis from 'stylis'

if (typeof document !== 'undefined') {
  const tag = document.createElement('style')
  tag.id = 'heels'
  document.head.appendChild(tag)
}

const global = (identifier, styles) => {
  heels(styles, identifier)
}

let stylesheet = ''

const heels = (styles, identifier) => {
  if (!identifier) identifier = '.h' + Math.random().toString(36).substring(7)

  const css = stylis(identifier, styles)
  if (typeof document !== 'undefined') {
    document.getElementById('heels').innerHTML += css
  }
  stylesheet += css
  return identifier.replace('.', '')
}

const gimmestyles = () => stylesheet

export default heels
export { global, gimmestyles }
