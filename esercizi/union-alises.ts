type CombineStringNumber = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: CombineStringNumber,
  input2: CombineStringNumber,
  resultCoversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultCoversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
//combine function two number
const conbineAges = combine(30, 34, "as-number");
console.log(conbineAges);

const conbineStringAges = combine(30, 34, "as-number");
console.log(conbineStringAges);
//combine function two string
const combineName = combine("jenny ", "mary", "as-text");
console.log(combineName);
