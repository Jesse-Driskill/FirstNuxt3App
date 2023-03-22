export const useUtils = () => {
    const toTitleCase = (str) => {
        let arr = str.split(" ");
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            let word = arr[i];
            let newWord = word[0].toUpperCase() + word.slice(1, word.length);
            newArr.push(newWord);
        }
        return newArr.join(" ");
    }

    return {
        toTitleCase,
    }
}