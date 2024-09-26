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
let array2 = ["oi", "lari", "gusta", "milho", "gusta"];
function meuMetodoReduce(array, callback, valorInicial) {
    let num = 0;
    if (valorInicial) {
        num = valorInicial;
    }
    for (let i = 0; i < array.length; i++) {
        num = callback(num, array[i], i, array);
    }
    return num;
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

function meuMetodoIncludes(array, searchElement, fromIndex) {
    let num = 0;
    if (fromIndex) {
        num = fromIndex;
        if (fromIndex < 0) {
            let reversed = array.reverse();
            console.log(reversed);

            for (let i = 0; i <= Math.abs(num); i++) {
                if (reversed[i] === searchElement) {
                    return true;
                }
            }

            return false;
        }
    }
    for (let i = num; i < array.length; i++) {
        if (array[i] === searchElement) {
            return true;
        }
    }
    return false;
}

function meuMetodoIndexOf(array, searchElement, fromIndex) {
    let indice = -1;
    if (fromIndex) {
        indice = fromIndex;

        if (indice < 0) {
            for (let i = Math.abs(indice); i >= 0; i--) {
                if (array[i] === searchElement) {
                    return i;
                }
            }
            return -1;
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchElement) {
            return i;
        }
    }
    return -1;
}

console.log(meuMetodoIndexOf(array, 8, -6));
