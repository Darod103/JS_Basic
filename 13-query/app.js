const user = {
    search: 'Ваяся',
    take : 19
};
function getQuery (obj){
    let result = [];
    Object.entries(obj).forEach(([key,value])=>{
        result.push(`${key}=${value}`);
    });
    return result.join('&');

};


console.log(getQuery(user))