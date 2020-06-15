import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

class Card:

    def __init__(self, card):
        decoupage = list(card)
        if len(decoupage) >= 3:
            decoupage[0] = decoupage[0] + decoupage[1]
            self.color = decoupage[2]
        else:
            self.color = decoupage[1]
        
        if decoupage[0] not in ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]:
            print("ERROR")
            
        if decoupage[0] in ["2", "3", "4", "5", "6", "7", "8", "9", "10"]:
            self.value = int(decoupage[0])
        elif decoupage[0] == "J":
            self.value = 11
        elif decoupage[0] == "Q":
            self.value = 12
        elif decoupage[0] == "K":
            self.value = 13
        elif decoupage[0] == "A":
            self.value = 14    
        else :
            print("ERROR - ERROR")

    
    def get_value(self):
        return self.value
        
    def __str__(self):
        return str(self.value) + " " + self.color

class Queue:
    """A sample implementation of a First-In-First-Out
       data structure."""
    def __init__(self):
        self.in_stack = []
        self.out_stack = []

    def is_empty(self):
        if len(self.in_stack) + len(self.out_stack) == 0:
            return True
        else:
            return False
            
    def push(self, obj):
        self.in_stack.append(obj)
    def pop(self):
        if not self.out_stack:
            self.in_stack.reverse()
            self.out_stack = self.in_stack
            self.in_stack = []
        return self.out_stack.pop()
    
    def __str__(self):
        output = ""
        for i in range(len(self.in_stack)):
            output += str(self.in_stack[i]) + " "
        return output
        





def combat(player1_stack, player2_stack, tempStack1=None, tempStack2=None):
    
    
    
    if tempStack1==None : tempStack1 = Queue()
    if tempStack2==None : tempStack2 = Queue()

    if not player1_stack.is_empty():
        cardp_1 = player1_stack.pop()
    else:
        return
    
    if not player2_stack.is_empty():
        cardp_2 = player2_stack.pop()
    else:
        return   
    

    if cardp_1.get_value() > cardp_2.get_value() :
        print(str(cardp_1) + " better than " + str(cardp_2) + " P1 Wins", file=sys.stderr)
        player1_stack.push(cardp_1)
        player1_stack.push(cardp_2)
        
    
    elif cardp_1.get_value() < cardp_2.get_value() : 
        print(str(cardp_2) + " better than " + str(cardp_1) + " P2 Wins", file=sys.stderr)
        player2_stack.push(cardp_1)
        player2_stack.push(cardp_2)
        
    else :
        print("BATAILLE", file=sys.stderr)
        tempStack1.push(cardp_1)
        tempStack2.push(cardp_2)
        for i in range(3):
            if not player1_stack.is_empty() and not player2_stack.is_empty():
                tempStack1.push(player1_stack.pop())
                tempStack2.push(player2_stack.pop())
            else :
                print("PAT")
        combat(player1_stack, player2_stack, tempStack1, tempStack2)
        
        



player1_stack = Queue()
player2_stack = Queue()

n = int(input())  # the number of cards for player 1
for i in range(n):
    cardp_1 = Card(input())  # the n cards of player 1
    player1_stack.push(cardp_1)
    
m = int(input())  # the number of cards for player 2
for i in range(m):
    cardp_2 = Card(input())  # the m cards of player 2
    player2_stack.push(cardp_2)
    
in_progress = True

game_turns = 0
game_win = 0

while in_progress:
    # Game here
    
    game_turns += 1
    
    combat(player1_stack, player2_stack)


    if player1_stack.is_empty():
        game_win = 2
        in_progress = False

    if player2_stack.is_empty():
        game_win = 1
        in_progress = False


print(player1_stack, file=sys.stderr)
print(player2_stack, file=sys.stderr)

# Write an action using print
# To debug: print("Debug messages...", file=sys.stderr)

print(str(game_win) + " " + str(game_turns))

