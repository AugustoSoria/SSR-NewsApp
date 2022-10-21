import articles from '../articles';

export function filterAndFormaterArticles(slug = 'all') {
  let subtype7Articles = articles.filter(a => a.subtype == '7')

  let formatedDateSubtype7Articles = subtype7Articles.map(a => {
    return {
      ...a, 
      "display_date": new Date(a.display_date)
        .toLocaleDateString('sp-AR', { year: 'numeric', month: 'long', day: 'numeric' })
    }
  })

  if(slug !== 'all') {
    console.log(slug)
    formatedDateSubtype7Articles = formatedDateSubtype7Articles.filter(a => a.taxonomy.tags.some(tag => tag.slug === slug))
  }

  return formatedDateSubtype7Articles;
}