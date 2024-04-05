
number = int(input("enter yuor number:"))

sum = 0

i = 0

if number >0:
    while i <= number:
        sum += i
        i +=1
else:
    while i >= number:
        sum += i
        i -= 1


print (sum)        