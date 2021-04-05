months = ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
birthday = input("Type your birthday (DD-MM-YYYY):")
print("You were born in", months[(int(birthday[3:5]) - 1)])

names = ["Joe", "Anne", "Mary"]

names.append( input("Type your name:") )

print(names)
