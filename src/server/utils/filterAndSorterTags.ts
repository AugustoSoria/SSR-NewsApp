import articles from '../articles';
import {tag} from '../model/tag.model';

export function filterAndSorterTags() {
  let tags = articles.reduce<Record<string, tag>>((acc, curr) => {
    curr.taxonomy.tags.forEach(tag => {
      !acc[tag.slug] ? acc[tag.slug] = {...tag, count: 1} : acc[tag.slug].count++
    })
    return acc
  }, {})

  let sortedTags = Object.values<tag>(tags)
    .sort((a: tag, b: tag) =>  b.count - a.count)
    .slice(0, 10)

  return sortedTags;
}