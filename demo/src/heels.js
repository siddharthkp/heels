import stylis from 'stylis'
const tag = document.createElement('style')
tag.id = 'heels'
document.head.appendChild(tag)

const global = (identifier, styles) => {
  heels(styles, identifier)
}

const heels = (styles, identifier) => {
  if (!identifier) identifier = '.h' + Math.random().toString(36).substring(7)

  const css = stylis(identifier, styles)
  document.getElementById('heels').innerHTML += css
  return identifier.replace('.', '')
}

export default heels
export { global }
