n = 8

def tinh_tong(n):
    sum = 0
    times = 0

    while n >= 7:
        sum += 28 + times * 7
        n -= 7
        times += 1

    for i in range(1, n + 1):
        sum += i + times

    return sum

print(tinh_tong(n))