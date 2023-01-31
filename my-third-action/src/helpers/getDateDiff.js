export function getDateDiff(date) {
  const now = new Date()
  const diff = now - date
  const diffInDays = diff / (1000 * 60 * 60 * 24)
  if (diffInDays) {
    return diffInDays
  }
  console.log('this is a test of line block spacing')
}

export function removeMultiLine() {
  console.log('this is a test of line block spacing')
}
