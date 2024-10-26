// 즉시 실행함수
(function foo() {
  console.log("foo");
})();

//재귀 함수
function foo2(arg) {
  if (arg === 3) return;
  console.log(arg);
  foo2(arg + 1);
}
foo2(1);

//중첩 함수
function foo3(arg) {
  function bar2() {
    console.log(arg);
  }
  bar2();
}
foo3(1);

//콜백함수
function foo4(arg) {
  arg();
}
foo4(() => {
  console.log(100);
});
