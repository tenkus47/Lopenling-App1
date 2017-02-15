export default function arrayToObject(arr, key) {
    return arr.reduce(function(result, item) {
        if (item[key] != undefined) {
            const objKey = item[key]
            result[objKey] = item
            return result
        }
    }, {});
}