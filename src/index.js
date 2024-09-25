const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function meuMetodoMap(array, callback) {
    const arrayNew = [];
    for (let i = 0; i < array.length; i++) {
        arrayNew.push(callback(array[i], i, array));
    }
    return arrayNew;
}
function meuMetodoFilter(array, callback) {
    const arrayNew = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            arrayNew.push(array[i]);
        }
    }
    return arrayNew;
}
function meuMetodoReduce(array, callback) {
    let num = 0;
    for (let i = 0; i < array.length; i++) {
        num = callback(num, array[i], i, array);
    }
}
function meuMetodoFind(array, callback) {
    let num = 0;
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            num = array[i];
            return num;
        }
    }
}
let array2 = ["oi", "lari", "gusta", "milho", "gusta"];
function meuMetodoIncludes(array, callback) {
    let arrayNew = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) {
            arrayNew.push(array[i]);
        }
    }
    return arrayNew;
}

function meuMetodoIndesOf(array, callback) {
    let arrayNew = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) {
            arrayNew.push(i);
        }
    }
    return arrayNew;
}
