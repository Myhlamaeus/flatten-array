'use strict'

export default function flattenArray (array) {
  if (!Array.isArray(array)) {
    throw new TypeError('flattenArray: expects argument 0 to be an array')
  }

  const ret = []

  for (let ele of array) {
    if (Array.isArray(ele)) {
      ret.push(...ele)
    } else {
      ret.push(ele)
    }
  }

  return ret
}
