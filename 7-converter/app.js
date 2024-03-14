const USD = 90.69;
const EUR = 100.13;


function convertation(sum,currency,getCurrency){
    if (typeof sum !== 'number' || typeof currency !== 'string' || typeof getCurrency !== 'string') {
        console.log('Ошибка в типах входных данных');
        return null;
      }
      switch(currency.toLowerCase()){
        case 'usd':
            switch (getCurrency.toLowerCase()){
                case 'rub':
                    return sum * USD;
                case 'eur':
                    return (sum * USD) / EUR;
                default:
                    console.log('Нет курса этой валюты!');
                    return null;

            }
        case 'eur':
            switch (getCurrency.toLowerCase()){
                case 'rub':
                    return sum * EUR;
                case 'usd':
                    return (sum * EUR) / USD;
                default:
                    console.log('Нет курса этой валюты!');
                    return null;
            }
        case 'rub':
            switch (getCurrency.toLowerCase()){
                case 'usd':
                    return sum / USD;
                case 'eur':
                    return sum / EUR;
                default:
                    console.log('Нет курса этой валюты!');
                    return null;
                    
            }
        default:
            console.log('Нет курса этой валюты!');
            return null;    
           
      }

    }