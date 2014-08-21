var output = "",
  error, character;


for (var i=0; i < 10000; i++){

  error = false;
  character = String.fromCharCode(i);

  try {
    Function("var " + character + "=1")();
  } catch(e) {
    error = true;
  }

  if (!error){
    output += character;
  }

}

console.log(output)