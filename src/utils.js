export const generateArticlesData = amount =>
  Array.from({ length: amount }, generateArticleData)

const generateArticleData = (_v, k) => {
  const number = k + 1
  return {
    id: number,
    href: '#' + number.toString(),
    title: number.toString()
  }
}
