export const generateArticlesData = amount =>
  Array.from({ length: amount }, (_, k) => generateArticleData(k + 1))

const generateArticleData = (number) => {
  return {
    id: number,
    href: '#' + number.toString(),
    title: number.toString()
  }
}
