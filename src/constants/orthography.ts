import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'e',
  'f',
  'g',
  'h',
  'i',
  'k',
  'l',
  'm',
  'n',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'y',
  'z',
]

/**
export const ORTHOGRAPHY = [
  'ngngw', 
  'ghhw', 
  'ngng',
  'ghh',
  'ghw',
  'ngw',
  'gg',
  'gh',
  'kw',
  'll',
  'mm',
  'ng',
  'nn',
  'qw',
  'rr',
  'wh',
  'a',
  'aa',
  'e',
  'f',
  'g',
  'h',
  'i',
  'ii',
  'k',
  'l',
  'm',
  'n',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'uu',
  'v',
  'w',
  'y',
  'z'
]
 */
if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
