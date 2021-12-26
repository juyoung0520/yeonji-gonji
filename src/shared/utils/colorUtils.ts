export function splitHexToArray(hex: string) {
  const array = []

  array.push(parseInt(hex.slice(1, 3), 16))
  array.push(parseInt(hex.slice(3, 5), 16))
  array.push(parseInt(hex.slice(5, 7), 16))

  return array
}

export function calcSimilarity(originHex: string, subjectHex: string) {
  const originArray = splitHexToArray(originHex)
  const subjectArray = splitHexToArray(subjectHex)

  const dR = Math.abs(originArray[0] - subjectArray[0])
  const dG = Math.abs(originArray[1] - subjectArray[1])
  const dB = Math.abs(originArray[2] - subjectArray[2])

  return Math.floor((1 - (dR + dG + dB) / (255 * 3)) * 100)
}
