// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.splice(-1);
}

function destructivelyRemoveFirstCat() {
    cats.splice(0, 1);
}

function appendCat(name) {
    const cats1 = [...cats, name];
    return cats1;
}

function prependCat(name) {
    const cats2 = [name, ...cats];
    return cats2;
}

function removeLastCat() {
    const cats3 = [...cats];
    cats3.splice(-1, 1);
    return cats3;
}

function removeFirstCat() {
    const cats4 = [...cats];
    cats4.splice(0, 1);
    return cats4;
}