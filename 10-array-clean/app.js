function canDelete(num) {
    return (
        (num >= 0 && num <= 10) ||
        num % 2 === 0
    );
};

function filterArray(arr,fn){
    const result = [];
    for (let i = 0; i < arr.length; i++){
        if(!fn(arr[i])){
            result.push(arr[i])
        };
    };
    return result;
    };


