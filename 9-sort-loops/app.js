const data = [22,33,10,1,3,4,12,32,16,2,8]

function bubbleSort(arr){
    let result = [...arr]
    for(let i = 0; i < result.length; i++){
        for(let j = 0; j < result.length - 1 - i; j++){
            if(result[j]> result[j+1]){
                const temp = result[j];
                result[j]= result[j+1];
                result[j+1] = temp;
            }
        }

    }
    return result;
};
