

/*
Позапускайте ці вирази окремо, подивіться на результат

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2
*/

function toString(arg) {
  if (typeof arg === 'number') {
      return new String(number);
  } else if (typeof arg === undefined) {
      return 'undefined';
  } else if (typeof arg === null) {
      return 'null';
  }
  return arg;
}