import { CONFIG } from './config'

export const WORDS = [
    "akemna",
"kiiwna",
"paagna",
"paamna",
"piikna",
"qaagna",
"qaamna",
"qaawna",
"saamna",
"unegna",
"aaghlu",
"aaghsi",
"aagneq",
"aakaqa",
"aatneq",
"aavneq",
"afluka",
"aghaka",
"aghipa",
"aghneq",
"aghula",
"aghveq",
"agleqa",
"akitka",
"akmaka",
"anaana",
"angaka",
"ataata",
"ataneq",
"atanqa",
"atghii",
"atkuka",
"avlawa",
"avutka",
"elqiiq",
"estuka",
"ggatek",
"ggayek",
"ghhuuq",
"ighneq",
"ighuka",
"iglaka",
"iilleq",
"iiyaqa",
"ikuyek",
"ikuska",
"ilaaqa",
"iluuqa",
"imalek",
"ingleq",
"iqarwa",
"iqsaka",
"itineq",
"kakika",
"kakiiq",
"kaviiq",
"kavlek",
"kayaaq",
"kayuka",
"kellii",
"keviqa",
"kiiwek",
"kilgaa",
"kitika",
"kufika",
"kugweq",
"kuugqa",
"kumika",
"lalala",
"lataka",
"leghni",
"lliveq",
"maamsa",
"makaka",
"makiqa",
"malghi",
"mamaqa",
"mamlek",
"manaqa",
"mangki",
"manika",
"manika",
"manuka",
"meghek",
"mesiiq",
"mesuqa",
"muumqa",
"nakrek",
"nanaaq",
"napena",
"nasaqa",
"nayaka",
"nayuqa",
"nekrek",
"nengaa",
"nengki",
"nenglu",
"nepiiq",
"nevuqa",
"nuliiq",
"nunaka",
"nunaaq",
"nuvaka",
"nuyaqa",
"nuziqa",
"pakrek",
"panaka",
"pangeq",
"panika",
"papaka",
"paatqa",
"pekneq",
"perara",
"piineq",
"pillek",
"pugneq",
"puurqi",
"puyani",
"qaghlu",
"qaghpa",
"qaluka",
"qamuqa",
"qaanqa",
"qapuka",
"qaseki",
"qavaqa",
"qawaak",
"qayaqa",
"qefteq",
"qenaaq",
"qenngu",
"qeziqa",
"qughri",
"qugneq",
"qulaka",
"qunika",
"qupaka",
"qupneq",
"qupuma",
"quqiiq",
"qutuqa",
"rapaka",
"repaka",
"saaqwa",
"saaygu",
"saghya",
"sagneq",
"sakika",
"sakiiq",
"agesta",
"agnepa",
"amalka",
"amawha",
"amenam",
"asanut",
"asunat",
"asunga",
"asunut",
"atawha",
"atunem",
"atwhay",
"awnepa",
"enkaam",
"entami",
"iivani",
"ikiqun",
"ikiwan",
"imallu",
"imamta",
"imaqun",
"imatuq",
"imukun",
"ipallu",
"ipapik",
"iwhani",
"kaakaa",
"kergam",
"kiikun",
"kiyang",
"luuraq",
"maaten",
"masisu",
"miiwen",
"nalqik",
"ngawaq",
"nutaan",
"patala",
"pegnem",
"qakima",
"qelegi",
"qemall",
"qenwat",
"repall",
"rugell",
"sangan",
"tefaay",
"temngi",
"tengvi",
"uggiiy",
"ukukuk",
"unaami",
"unukun",
"upelen",
"uramra",
"uuhuuk",
"uulmun",
"uunmek",
"uzimun",
"wasiwa",
"whaten",
"aghnaq",
"qiipaq"
]

export const entries = {
  "aantaq":"5d63154602ec579eb5b411a2afe903a2b93b7ade",
  "saagta":"0a7892a07a838a8d12940f757feac375cbf3c9be",
  "teggeq":"98fd6c37d9f8ca6fc2a51b3002a6955cc4fbaa5a",
  "aanvik":"80a0a6ea93699d4436e6e8204a15437562347d18",
  "aghula":"bf06398e09b10a03afa4be64feb2aee617772b60",
  "penguq":"9ca030b090d589975302d889255189ba30a53d10",
}

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
