export function generateArticlesData (amount) {
  const numbers = []
  for (let i = 0; i < amount; i++) {
    const number = (i + 1)
    numbers.push({
      id: number,
      href: '#' + number.toString(),
      title: number.toString()
    })
  }
  return numbers
}
