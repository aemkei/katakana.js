// 140 chars

ウ = ホ = []                 // []
ア = !!ホ + ホ                // "true"
ネ = !ホ + ホ                // "false"

テ = ホ + {}                 // "[object Object]"

ヌ = ア[ウ++]                // t = "true"[0]
セ = ア[ミ = ウ]             // r = "true"[1]

ハ = ++ミ + ウ               // 2, 3
ヘ = テ[ミ + ハ]              // c

ア[
  ヘ += テ[ウ] +             // co = "c" + "[object Object]"[1]
  (ホ.ホ + ホ)[ウ] +        // n = "undefined"[1]
  ネ[ハ] +                  // s = "false"[3]
  ヌ +                      // t
  セ +                      // r
  ア[ミ] +                   // u = "true"[2]
  ヘ +                      // c = "[object Object]"[5]
  ヌ +                      // t
  テ[ウ] +                   // o
  セ                        // r

][ヘ](                      // constructor

  ネ[ウ] +                  // a = "false"[1]
  ネ[ミ] +                  // l = "false"[2]
  ア[ハ] +                  // e = "true"[3]
  セ +                      // r
  ヌ +                      // t
  "()"                     // ()
)()