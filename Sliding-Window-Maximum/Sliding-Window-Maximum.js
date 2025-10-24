let nums = [7, 2, 4], k = 2;

var maxSlidingWindow = function(nums, k) {
    const deque = [];
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        // Loại bỏ index đã ra khỏi cửa sổ
        if (deque.length && deque[0] <= i - k) {
            deque.shift();
        }

        // Loại bỏ các phần tử nhỏ hơn nums[i]
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        deque.push(i);

        // Bắt đầu ghi kết quả khi đủ k phần tử
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;

};

console.log(maxSlidingWindow(nums, k)); // [7, 4]