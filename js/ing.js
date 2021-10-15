const ingExtractor = (s) => {
    s = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g, "")
    s = s.replace("'",)
    console.log(s)
    let index = 0;
    const allWords = []
    for (let i = 0; i < s.length; i++) {
        if (i === s.length - 1) {
            allWords.push(s.substring(index))
        }
        if (s[i] === " ") {
            allWords.push(s.substring(index, i))
            index = i + 1
        }
    }
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
    const ingWords = []
    for (let word of allWords) {
        if (word[word.length - 1] === 'g' && word[word.length - 2] === 'n' && word[word.length - 3] === 'i') {
            let beforeIng = word.substring(0, word.length - 3)
            let syllables = 0;
            for (let i = 0; i < word.length; i++) {
                // if(i === 0) {
                //     syllables++
                //     continue;
                // }
                if (vowels.includes(word[i]) && !vowels.includes(word[i - 1])) {
                    syllables++
                }
            }
            if (syllables > 1) {
                ingWords.push(word)
            }
            console.log(word + ": " + syllables)
        }

    }
    return ingWords
}


console.log(ingExtractor('sing having weighing counting leading surveying iterating sling bing king owing asking mowing'))