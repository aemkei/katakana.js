// 158 chars

ホ = []                      // []
ス = !!ホ                    // true
ア = ス + ホ                 // "true"
ネ = !ホ + ホ                // "false"

テ = ホ + {}                 // "[object Object]"

ウ = +ス                     // 1
ミ = ス + ス                 // 2
ハ = ミ + ス                 // 3

ヌ = ア[+ホ]                  // t = "true"[0]
セ = ア[ウ]                  // r = "true"[1]

サ =
  テ[ミ + ハ] +             // c = "[object Object]"[5]
  テ[ウ] +                  // o = "[object Object]"[1]
  (ホ[ホ] + ホ)[ウ] +        // n = "undefined"[1]
  ネ[ハ] +                  // s = "false"[3]
  ヌ +                      // t
  セ +                      // r
  ア[ミ] +                  // u = "true"[2]
  テ[ミ + ハ] +              // c = "[object Object]"[5]
  ヌ +                      // t
  テ[ウ] +                  // o = "[object Object]"
  セ                        // r

サ[サ][サ](                 // "constructor".constructor.constructor
  ネ[ウ] +                  // a = "false"[1]
  ネ[ミ] +                  // l = "false"[2]
  ア[ハ] +                  // e = "true"[3]
  セ +                      // r
  ヌ +                      // t
  "(" +                     // (
  ウ +                      // 1
  ")"                       // )
)()