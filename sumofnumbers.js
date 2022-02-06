const testNum = [1, 2, 3, 4, 5, 6];

function sumFor(nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}

console.log(sumFor(testNum));

function sumWhile(nums) {
  let sum = 0;
  let i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(testNum));

function sumRecursion(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  return nums.pop() + sumRecursion(nums);
}

console.log(sumRecursion(testNum));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(testNum));
