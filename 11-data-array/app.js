function isLeapYear(year){
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

function filterData(data){
    let day, month, year;
     if (data.includes('.')){
        [day,month,year] = data.split('.').map(part => parseInt(part))
         }else if (data.includes('/')) {
            [day,month,year] = data.split('/').map(part => parseInt(part))
             } else {
                return null;
             };
    if (isNaN(day)|| isNaN(month) || isNaN(year)){
        return null
    };

    if (year < 100){
        year += 2000
    };
    if (month < 1 || month > 12 || day < 1 || day > 31) {
            return null;
        };
    if (month === 2){
        const daysInFebruary = isLeapYear(year) ? 29 : 28;
        if (day > daysInFebruary){
            return null;
        }else if ([4, 6, 9, 11].includes(month) && day > 30) {
            return null;

    }};

    return `${day.toString().padStart(2,'0')}/${month.toString().padStart(2,'0')}/${year}`

};

function parseData(arr){
    return arr.map(filterData)
              .filter(data => data !== null);
};

const inputDates = ["10.02.22", "11/12/23", "0.13.22",
"41.12", "29/02/20", "2/02/21", "30-04-22","dasd"];

console.log(parseData(inputDates,filterData))