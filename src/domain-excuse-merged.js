 
 
  //-- Excuse Generator Data --//
  const excuseParts = {
    subject: ["Mi perro", "Mi gato", "Un alien", "Mi tortuga", "Donald Trump"],
    action: ["se comió", "desintegró", "infectó", "abdujo", "sacrificó", "enterró"],
    object: ["los apuntes", "la comida", "el coche", "la casa", "la puerta", "la cama", "el codespace"],
    ending: ["súbitamente.", "de forma violenta.", "temiendo por su vida.", "muy emocionado."]
  };

  //-- Domain Generator Data --//
  const domainParts = {
    pronoun: ['the', 'our'],
    adj: ['great', 'big'],
    noun: ['jogger', 'racoon'] 
  };

  //-- Get Random Item Function --//
  const getRandomItem = array => array[Math.floor(Math.random() * array.length)];

  //-- Excuse Generator Function --//
  const generateExcuse = ({ subject, action, object, ending }) => {
    return `${getRandomItem(subject)} ${getRandomItem(action)} ${getRandomItem(object)} ${getRandomItem(ending)}`;
  };

  //-- Domain Generator Function --//
  const generateDomains = ({ pronoun, adj, noun }) => {
    pronoun.forEach( item1 => { 
      adj.forEach( item2 => { 
        noun.forEach( item3 => {
          console.log(` ${item1}${item2}${item3}.com`);
       });
      });
    }); 
  };
  
  //-- Execute Functions --//
  console.log(generateExcuse(excuseParts));
  generateDomains(domainParts);
 
