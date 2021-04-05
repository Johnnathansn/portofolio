import time as t
import matplotlib.pyplot as plt



print("Type 'Johnnathan' 5 times")
typeCount = 0
words = []
times = []
errors = 0
while typeCount < 5:
    typeTime = t.time()
    words.append( input("Word: ") )
    if words[typeCount] != "Johnnathan":
        errors = errors + 1
            
    times.append( t.time()-typeTime )
    typeCount = typeCount + 1

print( "Errors:", errors)

plt.plot([1,2,3,4,5],times)
plt.show()
