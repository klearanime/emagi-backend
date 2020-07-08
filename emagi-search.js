const words = require('./emagi-words.js');
const symbols = require('./emagi-symbols.js');




const emagiSearch = function(word) {
    for ( const item of words) {
       // str.startsWith("Hello");
        if (item === word) {
            let i = words.indexOf(item)
            return [symbols[i]]
        } else if (item.includes(word) ) {
            let i = words.indexOf(item)
            return [symbols[i]]
        }
    } 
}





module.exports = emagiSearch;