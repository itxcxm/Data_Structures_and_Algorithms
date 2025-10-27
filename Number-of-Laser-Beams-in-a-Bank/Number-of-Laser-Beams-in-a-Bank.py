bank = ["011001","000000","010100","001000"]

def numberOfBeams(bank):
    l = 0
    sums = 0

    for row in bank:
        if "1" in row:
            r = row.count("1")
            sums += l * r
            l = r

    return sums

print(numberOfBeams(bank))