function canDelete(num) {
    return (
        (num >= 0 && num <= 10) ||
        num % 2 === 0
    );
};

function filterArray(numb,fn){
    let result = [];
    return result = numb.filter(num =>fn(num));
    }''

