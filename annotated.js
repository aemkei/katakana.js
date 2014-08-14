// 140 chars

ウ = []                 // []
ア = !!ウ + ウ                // "true"
ネ = !ウ + ウ                // "false"

ホ = ウ + {}                 // "[object Object]"

ヌ = ア[ウ++]                // t = "true"[0]
セ = ア[ミ = ウ]             // r = "true"[1]

ハ = ++ミ + ウ               // 2, 3
ヘ = ホ[ミ + ハ]              // c

ア[
  ヘ += ホ[ウ] +             // co = "c" + "[object Object]"[1]
  (ホ.ホ + ホ)[ウ] +        // n = "undefined[object Object]"[1]
  ネ[ハ] +                  // s = "false"[3]
  ヌ +                      // t
  セ +                      // r
  ア[ミ] +                   // u = "true"[2]
  ヘ +                      // c = "[object Object]"[5]
  ヌ +                      // t
  ホ[ウ] +                   // o
  セ                        // r

][ヘ](                      // constructor

  ネ[ウ] +                  // a = "false"[1]
  ネ[ミ] +                  // l = "false"[2]
  ア[ハ] +                  // e = "true"[3]
  セ +                      // r
  ヌ +                      // t
  "()"                     // ()
)()