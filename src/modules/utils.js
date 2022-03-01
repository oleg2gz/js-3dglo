export const adjustIndex = (arr, index) => {
  if (index > arr.length - 1) {
    index = 0
  }
  if (index < 0) {
    index = arr.length - 1
  }
  return index
}
