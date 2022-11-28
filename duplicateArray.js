
// Using Filter
let language = ['JavaScript', 'Dart', 'Kotlin', 'Java', 'Swift', 'Dart', 'JavaScript'];
function unique_array(arr) {
   let unique_array = arr.filter(function (elem, index, self) {
       return index == self.indexOf(elem);
   });
   return unique_array
}
console.log(unique_array(language));