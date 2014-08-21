// 138 chars

A = ""                    // ""

T = !A + A                // "true"
L = !T + A                // "false"
O = A + {}                // "[object Object]"

N = +A                    // 0

t = T[                    // t = "true"[0]
  A++                     // 1
]

r = T[B = A]              // r = "true"[1]

C = ++B + A               // 3 = 2 + 1
D = B + B                 // 4 = 2 + 2
E = B + C                 // 5 = 2 + 3
F = C + C                 // 6 = 3 + 3
G = C + D                 // 7 = 3 + 4
H = D + D                 // 8 = 4 + 4
I = D + E                 // 9 = 4 + 5

c = O[E]                  // c = "[object Object]"[5]
n = (G.A + O)[A]          // n = "undefined[object Object]"[1]
u = T[B]                  // u = "true"[2]
o = O[A]                  // o = "[object Object]"[1]
s = L[C]                  // s = "false"[3]
e = T[C]                  // e = "true"[3]

X = T[
  P = c+o+n+s+t+r+u+c+t+o+r
][P]

S = " "
R = "\\"
Q = "'"

X(
  X(
    r+e+t+u+r+n+

    S + Q +

    R+A+D+A+
    R+A+E+D+
    R+A+D+E+
    R+A+F+B+
    R+A+F+D+
    R+E+N+
    R+F+A+
    R+E+A+

    Q
  )()
)()