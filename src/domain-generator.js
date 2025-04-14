 
 
  //The variables
  const pronoun = ['the', 'our'];
  const adj = ['great', 'big'];
  const noun = ['jogger', 'racoon'];

  // Function to generate the domain
  const ArrayForeach = (pronoun, adj, noun) => {

  // Using forEach to iterate over each array and concatenate the strings
  pronoun.forEach(item1 => { adj.forEach(item2 => { noun.forEach(item3 => {

      // Concatenating the strings and logging the result
        console.log(` ${item1}${item2}${item3}.com`);

      });
    });
  }); 

  };

  ArrayForeach(pronoun, adj, noun);
  
