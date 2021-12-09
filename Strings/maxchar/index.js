// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let obj={};
    let max=0;
    let letter="";

    str.split("").reduce((acc , val)=>{

        acc[val]=( acc[val] || 0 ) + 1;
        return acc;

    },obj)

    for (let [key, value] of Object.entries(obj)) {
        if(obj[key] > max){
            max=obj[key];
            letter=key;
        } 
    }
    
    return letter;
}

module.exports = maxChar;
