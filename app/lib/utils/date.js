export function addDaysToDate(timestamp) {
  const date = new Date(timestamp)
  date.setDate(date.getDate() + 7)
  const exitDate = date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
  })
  return exitDate
}