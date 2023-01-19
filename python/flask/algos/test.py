dict = {"a" : '', "b" : '', "c" : ''}
for key in dict:
    if(dict.get(key)):
        print("works!")
    else:
        print("this is weird...")