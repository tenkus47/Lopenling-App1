
const tibetanVowels = ["ི", "ུ", "ེ", "ོ"];
const shaySwallowers = ["ཀ", "ག"];
export const NON_BREAKING_TSHEG = "༌";

/**
 * Returns the given string with a Tibetan shay character
 * added (or omitted) correctly.
 * @param {string} str
 * @returns {string}
 */
export default function addTibetanShay(str) {
    const lastChar = str.slice(-1);
    let newStr = "";

    if (lastChar == "ང") {
        newStr += str + NON_BREAKING_TSHEG+"།";
    } else if (shaySwallowers.indexOf(lastChar) != -1) {
        newStr += str;
    } else if (tibetanVowels.indexOf(lastChar) != -1) {
        if (shaySwallowers.indexOf(str.charAt(str.length-2)) != -1) {
            newStr += str;
        } else {
            newStr += str + "།";
        }
    } else {
        newStr += str + "།";
    }

    return newStr;
}