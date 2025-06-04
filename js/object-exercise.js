// 1. viet 1 function kiem tra value co phai  la object hay khong
function isObject(value) {
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
        return true;
    }
    return false;
}
// console.log(isObject());

// 2.
function objectToArray(object) {
    // neu khong phai object thi xu ly
    if (!isObject(object)) return;
    // neu la object thi xu ly
    // return Object.entries(object);
    // const value = Object.keys(object).map((key) => [key, object[key]]);
    // return value;
    let result = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            result.push([key, object[key]]);
        }
    }
    return result;
}
// console.log(objectToArray({ a: 1, b: 2}));


// 3.
function without(object, ...key) {
    const newObject = {...object};
    key.forEach((item) => {
        delete newObject[item];
    });
    return newObject;
    // delete object[key];
    // return object;
}
console.log(without({ a: 1, b: 2 }, "b"));

// 4.
function isEqualObject(obj1, obj2) {
    const objkey1 = Object.keys(obj1);
    const objkey2 = Object.keys(obj2);
    if (objkey1.length !== objkey2.length) return false;
    const result = objkey1.every(key => obj1[key] === obj2[key]);
    return result;
}
console.log(isEqualObject({ a: 1 }, { a: 1, b: 2 }));