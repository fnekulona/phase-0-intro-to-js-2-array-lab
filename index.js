// Write your solution here!
const cats = [
    "Milo",
    "Otis", 
    "Garfield",
];
function destructivelyAppendCat(name) {
    cats.push("Ralph")
};
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
};
function destructivelyRemoveLastCat(name) {
    cats.pop()
};
function destructivelyRemoveFirstCat() {
    cats.shift()
};
function appendCat(name) {
    return [...cats, name]
};
function prependCat(name) {
    return [name, ...cats]
};
function removeLastCat(name) {
    const newCats = cats.slice()
    return newCats.slice(0, newCats.length -1)
};
function removeFirstCat(name) {
    const newerCats = cats.slice()
    return newerCats.slice(1)
};
