function sumFor(nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}

console.log(sumFor([1, 2, 3, 4, 5]));

function sumWhile(nums) {
  let sum = 0;
  const i = 0;
  while (i < nums.length) {
    sum += nums[i];
  }
  return sum;
}

console.log(sumWhile([1, 2, 3, 4, 5]));

function sumRecursion(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  return nums.pop() + sumRecursion(nums);
}

console.log(sumRecursion([1, 2, 3, 4, 5]));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay([1, 2, 3, 4, 5]));
