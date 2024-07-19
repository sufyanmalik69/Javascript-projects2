# Guess the number game
import random
print("\tWELCOME TO THE GUESS THE NUMBER GAME >>>")
print("\t=====================================\n\n")

users_choice = input("Guess the number buddy(1-100): ")
while True:
    i = random.randint(1,101)
    print(type(i))
    if users_choice.isdigit and users_choice < 101 and users_choice > 0:     
        users_choice = int(users_choice)
        print(type(users_choice))
        if users_choice == i:
            print("You've guessed it.YOU WIN!!!")
            break
        elif users_choice > i:
            users_choice = input("Try a little lower buddy:")
            continue
        elif users_choice < i:
            users_choice = input("Try a little higher buddy:")
            continue
    else:
        users_choice = input("Try a digit buddy(1-100):")
        continue
