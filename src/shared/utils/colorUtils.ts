export function splitHexToArray(hex: string) {
  const array = []

  array.push(parseInt(hex.slice(0, 2), 16))
  array.push(parseInt(hex.slice(2, 4), 16))
  array.push(parseInt(hex.slice(4, 6), 16))

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
