function myfunction(x) {
  let temp = 2 * x + 3;
  return temp;
}

print(myfunction(3));

function add(x, y) {
  let temp = x + y;
  return temp;
}
add(3, 4);

function fly() {
  open();
  while (true) {
    move();
  }
}
fly();

((x, y) => {
  return x + y;
})(1, 2);
