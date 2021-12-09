// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversestring="";
    // for(let i=str.length-1;i>=0;i){
    //     reversestring=reversestring+str[i];
    // }
    // return reversestring;

    
    // if(str.length<=1) return str;
    // return str.slice(str.length-1)+reverse(str.substr(0,str.length-1))

    // return str.split("").reverse().join("")

    return str.split("").reduce((reversed,char)=>{
            return char+reversed;
    },"")
}

module.exports = reverse;
