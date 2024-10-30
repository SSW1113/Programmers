function solution(clothes) {
    let type = {};
  let result = 1;

  clothes.map((cloth) => {
    type[cloth[1]] = (type[cloth[1]] || 0) + 1;
  });

  for (const key in type) {
    result *= type[key] + 1;
  }

  return result - 1;
}