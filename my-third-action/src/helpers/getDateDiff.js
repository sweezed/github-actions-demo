export function getDateDiff(date) {
  const now = new Date()
  const diff = now - date
  const diffInDays = diff / (1000 * 60 * 60 * 24)

  if (diffInDays) {

    return diffInDays
    
  }



  console.log('this is a test of line block spacing')
}




export function removeMultiLine(x) {
  const array = [1, 2, 3]
  if (x === 1) {
    console.log('this will always be true')
  }
  array.forEach((item) => {
    console.log(item)
  })
  console.log('done')



}



export function removeMultiLine2(y) {
  if (y === 1) {
    
    console.log('this will always be true')
  }
}
