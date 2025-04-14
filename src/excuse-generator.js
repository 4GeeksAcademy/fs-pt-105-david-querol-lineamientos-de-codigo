

 //objetct excuses
  const parts = {
    part1: ["Mi perro", "Mi gato", "Un alien", "Mi tortuga", "Donald Trump"],
    part2: ["se comió", "desintegró", "infectó", "abdujo", "sacrificó", "enterró"],
    part3: ["los apuntes", "la comida", "el coche", "la casa", "la puerta", "la cama", "el codespace"],
    part4: ["súbitamente.", "de forma violenta.", "temiendo por su vida.", "muy emocionado."]
  };

  //function to get random item from any array
  const getRandomItem = array => array[Math.floor(Math.random() * array.length)];

  //get arrays from object parts
  const generateExcuse = ({ part1, part2, part3, part4 }) => {
    return `${getRandomItem(part1)} ${getRandomItem(part2)} ${getRandomItem(part3)} ${getRandomItem(part4)}`;
  };

  console.log(generateExcuse(parts));

