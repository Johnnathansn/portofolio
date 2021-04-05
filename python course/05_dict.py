person = {
    "name": "john",
    "gender": "male",
    "age": 34,
    "address": "1151 Haro street",
    "phone": "604-362-1959"
}

print( person.get( input("info wanted: ").lower(), "invalid choice" ) )
