fname = input("Type your first name: ")
mname = input("Type your middle name: ")
lname = input("Type your last name: ")

print("Your initials are", fname[0:1] + mname[0:1] + lname[0:1])

lotnumber = "037-00901-000027"

print("Country code:", lotnumber[0:3])
print("Product code:", lotnumber[4:9])
print("Batch code:", lotnumber[-5:])
