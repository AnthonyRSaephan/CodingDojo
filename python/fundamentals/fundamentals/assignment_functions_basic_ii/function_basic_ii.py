# 1. Countdown - Create a function that accepts a number as an input. Return a new list that counts down by one, from the number (as the 0th element) down to 0 (as the last element).
def countdown(num):
    arr = []
    for i in range(num, -1, -1):
        arr.append(i)
    return arr
arr1 = countdown(5)
print(arr1)

# 2. Print and Return - Create a function that will receive a list with two numbers. Print the first value and return the second.
def print_and_return(list):
    print(list[0])
    return list[1]
var2 = print_and_return([1,2])
print(var2)

# 3. First Plus Length - Create a function that accepts a list and returns the sum of the first value in the list plus the list's length.
def first_plus_length(list):
    return list[0] + len(list)
var3 = first_plus_length([1,2,3,4,5])
print(var3)

# 4. Values Greater than Second - Write a function that accepts a list and creates a new list containing only 
# the values from the original list that are greater than its 2nd value. Print how many values this is and then 
# return the new list. If the list has less than 2 elements, have the function return False
def values_greater_than_second(list):
    if len(list) < 2: return False
    newList = []
    greaterThanValue = list[1]
    for num in list:
        if num > greaterThanValue:
            newList.append(num)
    print(len(newList))
    return newList
list4 = values_greater_than_second([5,2,3,2,1,4])
print(list4)
list4_1 = values_greater_than_second([3])
print(list4_1)

# 5. This Length, That Value - Write a function that accepts two integers as parameters:
#  size and value. The function should create and return a list whose length is equal to the given size, and whose values are all the given value.
def length_and_value(size, value):
    newList = []
    for i in range(0,size):
        newList.append(value)
    return newList
list5 = length_and_value(4,7)
print(list5)
list5_1 = length_and_value(6,2)
print(list5_1)