function shufflePassword(str) {
    if (str.length % 2 === 0) {
      const leftPart = str.slice(0,str.length / 2 ).split('').reverse().join('');
      const rightPart = str.slice(str.length / 2 ).split('').reverse().join('');
      return [leftPart, rightPart].join('');
    } else {
      const middleIndex = Math.floor(str.length / 2);
      const leftPart = str.slice(0, middleIndex).split('').reverse().join('');
      const middleChar = str[middleIndex];
      const rightPart = str.slice(middleIndex + 1).split('').reverse().join('');
           
      return [leftPart, middleChar, rightPart].join('');
    }
  };

  function checkPassword(shuffleWord,password){
    return shuffleWord === shufflePassword(password);

  };