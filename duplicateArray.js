
// Using Filter
// let language = ['JavaScript', 'Dart', 'Kotlin', 'Java', 'Swift', 'Dart', 'JavaScript'];
// function unique_array(arr) {
//    let unique_array = arr.filter(function (elem, index, self) {
//        return index == self.indexOf(elem);
//    });
//    return unique_array
// }
// console.log(unique_array(language));

// using loop

// let language = ['JavaScript', 'Dart', 'Kotlin', 'Java', 'Swift', 'Dart', 'JavaScript'];
// function dups_array(language) {
//    let unique = {};
//    language.forEach(function (i) {
//        if(!unique[i]) {
//           unique[i] = true;
//        }
//    });
//    return Object.keys(unique);
// }
// console.log(dups_array(language));

//using set

const set = new Set (['JavaScript', 'Dart', 'Kotlin', 'Java', 'Swift', 'Dart']);
function uniquearray() {
   let unique_array = Array.from(set);
   return unique_array;
}
console.log(uniquearray());