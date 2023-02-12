
// You should implement your task here.

module.exports = function towelSort(matrix) {
 
  if (!matrix) {
    return [];
  }
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 != 0) {
      res = res.concat(matrix[i].reverse());
    } else {
      res = res.concat(matrix[i]);
    }
  }
  return res;

 //  matrix.reduce((x, y, i) => {
  //   y.sort((a, b) => !(i & 1) ? a - b : b - a).map(c => x.push(c));
  //   return x;
  // }, [])



//   if (matrix == undefined){ return [];}
//   for (let i = 0; i < matrix.length; i++) {
//   matrix[i].reverse()
// }
//   let res = matrix.flat();
//   return res;
}
