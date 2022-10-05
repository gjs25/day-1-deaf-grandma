
from typing import Counter


print("HEY KID!")
def deaf_grandma(): 
   a = input("Type Response Here: ")
   count = 0 #count is initialized outside the loop because it would drop back to 0 everytime the loop is ran 
   while(a): #while there is input continue looping 
    if a == "":
        print("WHAT?!")    
    elif a == a.lower():
        print("SPEAK UP, KID")   

    elif a == a.upper() and a != "GOODBYE!":
        print("NO, NOT SINCE 1946!")  

    elif a == "GOODBYE!" and count >= 1: #the second goodbye needs to be above the first goodbye, because we need it to register the count as 1 to prompt ("Later Skater"). The previous loop will add 1 to c.
        print("LATER, SKATER!")
        break
    
    elif a == "GOODBYE!":
        count += 1
        print("LEAVING SO SOON?")
          
    a = input("Type Response Here: ") #required to have this at the end of the loop to enable us to continue with more responses
    #print(c)

deaf_grandma()

