import random

names = []

while (len(names) < 8):
    names.append( input("Type a name: "))

print("Random name:", names[ random.randint(0,7) ])


colors = ["red", "blue", "yellow", "cyan", "black", "white"]
print(" Colors:" , colors);

colorPicked = random.choice(colors)

colorGuess = input("Guess the color:")

while True:
    if colorGuess != colorPicked:
        colorGuess = input("Wrong! try again:")
    else:
        print("You are right! It is", colorGuess)
        keepPlaying = input("Continue playing? (Y/N) ").lower()
        
        if ( keepPlaying == "y" ):
            colorPicked = random.choice(colors)
            colorGuess = input("Guess the color:")
            continue
        else:
            break

print("Thank you")
