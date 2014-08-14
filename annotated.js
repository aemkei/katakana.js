// 148 chars

ウ = ホ = []                 // []
ア = !!ホ + ホ                // "true"
ネ = !ホ + ホ                // "false"

テ = ホ + {}                 // "[object Object]"

ヌ = ア[+ホ]                  // t = "true"[0]
セ = ア[                     // r = "true"[1]
  ミ = ++ウ                      // 1
]

ハ = ++ミ + ウ               // 2, 3
グ = テ[ミ + ハ]              // o

サ =
  グ +                     // c = "[object Object]"[5]
  テ[ウ] +                  // o
  (ホ[ホ] + ホ)[ウ] +        // n = "undefined"[1]
  ネ[ハ] +                  // s = "false"[3]
  ヌ +                      // t
  セ +                      // r
  ア[ミ] +                   // u = "true"[2]
  グ +                      // c = "[object Object]"[5]
  ヌ +                      // t
  テ[ウ] +                   // o
  セ                        // r

サ[サ][サ](                 // "constructor".constructor.constructor
  ネ[ウ] +                  // a = "false"[1]
  ネ[ミ] +                  // l = "false"[2]
  ア[ハ] +                  // e = "true"[3]
  セ +                      // r
  ヌ +                      // t
  "()"                     // ()
)()