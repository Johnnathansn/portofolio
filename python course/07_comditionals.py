height = float(input("enter your height in meters: "))
weight = float(input("Enter your weight in Kilos: "))

bmi = weight/ (height*height)

print("Body Mass Index:", round(bmi, 2))

if( bmi <= 18.5):
    print("You are Underweight")
elif( bmi <= 24.9 ):
    print("You are Normal weight")
elif( bmi <= 29.9 ):
    print("You are Overweight")
else:
    print("You are Obese")
