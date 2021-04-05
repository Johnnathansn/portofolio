import requests
import json

print("Welcome to the trivia game!")

rights = 0;
wrongs = 0;

while True:
    
    trivia = requests.get("https://opentdb.com/api.php?amount=1")
    questions = json.loads(trivia.text)
    print("question:", questions['results'][0]['question'])
    answer = input("Answer: ")

    if answer == questions['results'][0]['correct_answer']:
        print("You are right!")
        rights = rights + 1
    else:
        print("You are Wrong!")
        wrongs = wrongs + 1
        
    decision = input("Play again? [Enter] .Type 'quit' to leave.").lower()
    if decision == 'quit':
        print("Thank you for playing. Your Score is: Rights -", rights, "Wrongs - ", wrongs)
        break;
    else:
        continue;
