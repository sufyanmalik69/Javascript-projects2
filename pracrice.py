# data types

string = "sufyan malik"
integer = 39394
floatt = 984.464
listt = [1,2,3,4,5,6]
tuplee = (1,2,3,45,6)
sett = {1,2,3,4,5,6}
dictionary = {"name":"sufyan","city":"karachi"}

listt2 = listt.append(7)
print(listt)

listt.remove(7)
print(listt)

listt.reverse()
print(listt)




def pyramid(height):
        if height.isdigit():
                height = int(height)
        i,j = 1,1
        star = "*"
        space = " "
        h = height
        while i <= height:
                print(f"{space}"*h,f"{star}"*j)
                j += 2
                h -= 1
                i +=1

pyramid("10")


