// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
 
    let letters=str.split(" ").map(e=>{
        return e[0].toUpperCase().concat(e.slice(1))
            }).join(" ")
    return letters;

}

module.exports = capitalize;
