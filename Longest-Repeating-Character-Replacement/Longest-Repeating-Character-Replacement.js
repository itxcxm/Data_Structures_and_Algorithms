let s = "ABAB", k = 2

/**
 * @param {string} s - Chuỗi đầu vào
 * @param {number} k - Số ký tự tối đa có thể thay thế
 * @returns {number} - Độ dài chuỗi con dài nhất có thể tạo thành chỉ gồm 1 ký tự sau tối đa k lần thay thế
 */
var characterReplacement = function(s, k) {
    // Map dùng để đếm số lần xuất hiện của từng ký tự trong cửa sổ hiện tại
    let count = new Map();
    // Biến lưu kết quả lớn nhất tìm được
    let res = 0;

    // Hai con trỏ cho kỹ thuật cửa sổ trượt
    let l = 0,      // Con trỏ trái của cửa sổ
    maxf = 0;   // Số lần xuất hiện nhiều nhất của một ký tự trong cửa sổ hiện tại
    
    // Duyệt qua từng ký tự với con trỏ phải
    for (let r = 0; r < s.length; r++) {
        // Đếm số lần xuất hiện của ký tự 
        count.set(s[r], (count.get(s[r]) || 0) + 1);
        // Cập nhật maxf nếu ký tự hiện tại xuất hiện nhiều hơn
        maxf = Math.max(maxf, count.get(s[r]));

        // Nếu số ký tự cần thay thế vượt quá k,
        // thu hẹp cửa sổ từ bên trái
        while (r - l + 1 - maxf > k) {
            count.set(s[l], count.get(s[l]) - 1);
            l++;
        }
        // Cập nhật kết quả nếu tìm được cửa sổ hợp lệ lớn hơn
        res = Math.max(res, r - l + 1);
    }

    return res;
};


// Kiểm tra hàm với ví dụ mẫu
console.log(characterReplacement(s, k))