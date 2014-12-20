export default function flattenArray(array) {
    if(!Array.isArray(array)) {
        throw new TypeError("flattenArray: expects argument 0 to be an array");
    }

    return [for (subArray of array) for(ele of subArray) ele];
}
