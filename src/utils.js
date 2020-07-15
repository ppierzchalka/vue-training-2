export function generateArticleData (value) {
  const number = typeof value === 'string' ? parseInt(value, 10) : value
  return {
    id: number,
    href: '/' + number.toString(),
    title: `Article ${number.toString()}`
  }
}

export function generateArticlesData (amount) {
  const numbers = []
  for (let i = 0; i < amount; i++) {
    const number = i + 1
    numbers.push(generateArticleData(number))
  }
  return numbers
}
