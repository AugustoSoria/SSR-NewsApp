import articles from '../articles';

export function filterAndFormaterArticles() {
  let subtype7Articles = articles.filter(a => a.subtype == '7')

  let formatedDateSubtype7Articles = subtype7Articles.map(a => {
    return {
      ...a, 
      "display_date": new Date(a.display_date)
        .toLocaleDateString('sp-AR', { year: 'numeric', month: 'long', day: 'numeric' })
    }
  })

  return formatedDateSubtype7Articles;
}