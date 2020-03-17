/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let charsObj = StringToObj(chars)
    // 开始words
    let res = 0
    for (let i = 0 ; i < words.length ; i++) {
        res += countCharactersWords(charsObj, StringToObj(words[i])) ? words[i].length : 0
    }
    return res;
};


var countCharactersWords = function(charsObj, wordsObj){
    let res = true
    for (let index in wordsObj) {
        if (charsObj[index] == undefined || charsObj[index] < wordsObj[index]) {
            res = false
        }
    }
    return res
}

// 字符串转成对象
var StringToObj = function(str){
    let strObj = {}
    for(let i = 0 ; i < str.length ; i++){
        strObj[str[i]] != undefined ? strObj[str[i]]++ : strObj[str[i]] = 1
    }
    return strObj
}

// let words = ["cat","bt","hat","tree"]
// let chars = "atachetr"


// console.log(countCharacters(words, chars))

