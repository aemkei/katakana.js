// 213 chars

ホ = []                      // []
フ = {}                      // {}
シ = !ホ                     // false
ス = !シ                     // true
ア = ス + ホ                 // "true"
ネ = シ + ホ                 // "false"
マ = ホ[ホ] + ホ             // "undefined"

テ = ホ + フ                 // "[object Object]"

ニ = +ホ                     // 0
ウ = +ス                     // 1
ミ = ス + ス                 // 2
ハ = ミ + ス                 // 3
リ = ミ + ハ                 // 5
ム = ミ + [ニ]               // "20"

ヌ = ア[ニ]                  // "t" = "true"[0]
セ = ア[ウ]                  // "r" = "true"[1]

サ = ホ[                     // []
  ネ[ニ] +                   // "f"  = "false"[0]
  マ[リ] +                   // "i"  = "undefined"[5]
  ネ[ミ] +                   // "l"  = "false"[2]
  ヌ +                       // "t"
  ア[ハ] +                   // "e"  = "true"[3]
  セ                         // "r"
]

サ[                         // [].filter
  テ[リ] +                  // "c" = "[object Object]"[5]
  テ[ウ] +                  // "o" = "[object Object]"[1]
  マ[ウ] +                  // "n" = "undefined"[1]
  ネ[ハ] +                  // "s" = "false"[3]
  ヌ +                      // "t"
  セ +                      // "r"
  マ[ニ] +                  // "u" = "undefined"[0]
  テ[リ] +                  // "c" = "[object Object]"[5]
  ヌ +                      // "t"
  テ[ウ] +                  // "o" = "[object Object]"
  セ                        // "r"
](
  ネ[ウ] +                  // "a" = "false"[1]
  ネ[ミ] +                  // "l" = "false"[2]
  ア[ハ] +                  // "e" = "true"[3]
  セ +                      // "r"
  ヌ +                      // "t"
  (シ + サ)[ム] +            // "(" = "falsefunction filter()"["20"]
  ウ +                      // 1
  (ス + サ)[ム]              // ")" = "truefunction filter()"["20"]
)()