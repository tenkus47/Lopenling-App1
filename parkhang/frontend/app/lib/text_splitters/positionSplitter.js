/**
 * Returns a function that accepts a string but simply
 * returns the initial array of positions passed to it.
 *
 * @param {number[]} positions - The positions where a string should be split
 * @return {function({string} string): number[]}
 */
export default function positionSplitter(positions) {
    const newPositions = [...positions];
    if (newPositions[0] === 0) {
        newPositions.shift();
    }
    return (string) => newPositions;
}