num1 = 42 # variable declaration, numbers
num2 = 2.3 #variable declaration, numbers
boolean = True #variable declaration, boolean
string = 'Hello World' #variable declaration, strings
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #variable declaration, initialize list
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} # variable declaration, initilize dictionary
fruit = ('blueberry', 'strawberry', 'banana') # variable declaration, initilize tuple
print(type(fruit)) # log statement, type check
print(pizza_toppings[1]) # log statement, access list value
pizza_toppings.append('Mushrooms') # list add value
print(person['name']) # log statement, dictionary access value
person['name'] = 'George' # dictionaryt change value
person['eye_color'] = 'blue' # dictionary add value
print(fruit[2]) # log statement, tuple access value

if num1 > 45: # conditional if
    print("It's greater") # log statement
else: # else
    print("It's lower") # log statement

if len(string) < 5: # conditional if, length check
    print("It's a short word!") # log statement
elif len(string) > 15: # conditional else if
    print("It's a long word!") # log statement
else: # conditional else
    print("Just right!") # log statement

for x in range(5): # for loop start 1 end 5 increment 1
    print(x) # log statement
for x in range(2,5): # for loop start 2 end 5 increment 1
    print(x) # log statement
for x in range(2,10,3): # for loop start 2 end 10 increment 3
    print(x) # log statement
x = 0 # variable declaration
while(x < 5): # while loop start x = 0 stop x < 5
    print(x) # log statement
    x += 1 # math operation

pizza_toppings.pop() # list delete value at pizza_toppings[length-1]
pizza_toppings.pop(1) # list delete value at [1]

print(person) # log statement, dictionary
person.pop('eye_color') # dictionary delete value
print(person) # log statement, string

for topping in pizza_toppings: # for loop start pizza_toppings[0] stop pizza_toppings[length-1]
    if topping == 'Pepperoni': # conditional if
        continue # continue
    print('After 1st if statement') # log statement
    if topping == 'Olives': # conditional if
        break # break

def print_hello_ten_times(): # function
    for num in range(10): # for loop start 1 stop 10 increment 1
        print('Hello') # log statement

print_hello_ten_times() # function call

def print_hello_x_times(x): # function parameter x
    for num in range(x): # for loop start 1 stop x increment 1
        print('Hello') # console log

print_hello_x_times(4) # function call argument 4

def print_hello_x_or_ten_times(x = 10): # function parameter x=10
    for num in range(x): # for loop start 1 stop 10 increment 1
        print('Hello') # console log

print_hello_x_or_ten_times() # function call
print_hello_x_or_ten_times(4) # function call argument 4


"""
Bonus section
"""

# print(num3) # NameError: name num3 is not defined
# num3 = 72 # variable declaration
# fruit[0] = 'cranberry' # TypeError: 'tuple' object does not support item assignment
# print(person['favorite_team']) # KeyError: 'facorite_team'
# print(pizza_toppings[7]) # IndexError: list index out of range
#   print(boolean) # IndentationError: unexpected indent
# fruit.append('raspberry') # AttributeError: 'tuple' object has no attribute 'append'
# fruit.pop(1) # AttributeError: 'tuple' object has no attribute 'pop'