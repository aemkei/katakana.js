
code = 'A="",B=!A+A,C=!B+A,D=A+{},E=B[A++],F=B[G=A],H=++G+A,I=D[G+H],B[I' +
  '+=D[A]+(D.D+D)[A]+C[H]+E+F+B[G]+I+E+D[A]+F][I](C[A]+C[G]+B[H]+F+E+"(A)")()';


alphabet = false;
alphabet = 'ᆖᐳᐸᅵㅣǀǁꟾᆢ';

start = ''.charCodeAt(0);

for (i = 0; i < 9; i++) {
  input = String.fromCharCode(65 + i);
  output = alphabet ? alphabet[i] : String.fromCharCode(start + i);
  code = code.split(input).join(output);
}

document.write(code);