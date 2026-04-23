import { useEffect } from 'react'

export function SeoHead({ title, description, schema }) {
  useEffect(() => {
    const prev = document.title
    if (title) document.title = title

    let metaEl = document.querySelector('meta[name="description"][data-seo]')
    if (!metaEl) {
      metaEl = document.createElement('meta')
      metaEl.name = 'description'
      metaEl.setAttribute('data-seo', 'true')
      document.head.appendChild(metaEl)
    }
    if (description) metaEl.content = description

    let scriptEl = null
    if (schema) {
      scriptEl = document.createElement('script')
      scriptEl.type = 'application/ld+json'
      scriptEl.setAttribute('data-seo', 'true')
      scriptEl.textContent = JSON.stringify(schema)
      document.head.appendChild(scriptEl)
    }

    return () => {
      document.title = prev
      if (scriptEl) scriptEl.remove()
    }
  }, [title, description, schema])

  return null
}
