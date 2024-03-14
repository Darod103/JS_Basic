const data = [22,33,10,1,3,4,12,32,16,2,8]

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j]> arr[j+1]){
                const temp = arr[j];
                arr[j]= arr[j+1];
                arr[j+1] = temp;
            }
        }

    }
    return arr;
};
