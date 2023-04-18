function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  }
  return result;
}
//combine function two number
const conbineAges = combine(30, 34);
console.log(conbineAges);
