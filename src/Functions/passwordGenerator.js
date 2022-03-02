export const passwordGenerator = (configuration) => {
  const caracteres = {
    numeros: '0 1 2 3 4 5 6 7 8 9',
    simbolos: '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /',
    mayusculas: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
    minusculas: 'a b c d e f g h i j k l m n o p q r s t u v w x y z',
  };

  let passwordGenerado = '';
  let passwordFinal = '';
  for (let propiedad in configuration) {
    if (configuration[propiedad] === true) {
      passwordGenerado += caracteres[propiedad] + ' ';
    }
  }

  passwordGenerado += caracteres.minusculas;
  passwordGenerado = passwordGenerado.trim();
  passwordGenerado = passwordGenerado.split(' ');

  console.log(passwordGenerado);
  for (let i = 0; i < configuration.numeroCaracteres; i++) {
    passwordFinal +=
      passwordGenerado[Math.floor(Math.random() * passwordGenerado.length)];
  }
  return passwordFinal;
};
