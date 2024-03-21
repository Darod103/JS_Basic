function lunaValidation(card){
    const number = card.replaceAll('-',"")
                        .split('')
                        .map(value => Number(value))
    if (number.includes(NaN)){
        return false
    };
    for (let i =number.length - 2; i >= 0;i -= 2){
        let double = number[i] * 2
        number[i] = double > 9 ? double - 9: double;
        
    };
    const sum  = number.reduce((acc,value) => acc + value,0);
    return sum % 10 == 0;
    
}

function resultOfValidation(card){
    return `Карта с номером : ${card}\n${lunaValidation(card) ?'Проходит валидацию !': 'Не прошла валидацию !' }`
}

const card = '234s8';
const card1 = 'dfasasdf';
const card2 = '4561-2612-1234-5464';
const card3 = '4561-2612-1534-5464';

console.log(resultOfValidation(card));
console.log(resultOfValidation(card1));
console.log(resultOfValidation(card2));
console.log(resultOfValidation(card3));



