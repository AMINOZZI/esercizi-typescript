function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  }
  return (result = input1.toString() + input2.toString());
}
//combine function two number
const conbineAges = combine(30, 34);
console.log(conbineAges);
//combine function two string
const combineName = combine("jenny", "mary");
console.log(conbineAges);
