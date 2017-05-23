/**
 * Returns a function that accepts a string but simply
 * returns the initial array of positions passed to it.
 *
 * @param {number[]} positions - The positions where a string should be split
 * @return {function({string} string): number[]}
 */
export default function positionSplitter(positions) {
    if (positions[0] === 0) {
        positions.shift();
    }
    return (string) => positions;
}