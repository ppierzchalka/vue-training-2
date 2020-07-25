export const generateArticlesData = amount => {
  return Array.from({ length: amount }, (_, k) => generateArticleData(k + 1))
}

export const generateArticleData = (k) => {
  const number = k | 0
  return {
    id: number,
    href: '/' + number.toString(),
    title: `Article ${number}`
  }
}
