function greet(name) {
  return `Hello, ${name}!`;
}
let a = 5;

const fun = () => {
  console.log("Hello");
};
export default fun;

export { greet, a };
//con't define multiple default export in single module
// export default function fun2() {
//   console.log("Hello2");
// }

//another syntax for export

// export function greet(name) {
//   return `Hello, ${name}!`;
// }
// export let a = 5;

// export default function fun() {
//   console.log("Hello");
// };
