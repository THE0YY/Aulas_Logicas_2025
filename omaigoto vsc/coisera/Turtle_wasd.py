import turtle
from time import sleep
from keyboard import is_pressed

# Create a screen object
screen = turtle.Screen()
screen.bgcolor("black") # Set background color

# Create a turtle object
my_turtle = turtle.Turtle()
my_turtle.color("white")     # Set pen color
my_turtle.pensize(3)       # Set pen size
my_turtle.speed(100)

# rabisco
cor = 1
pressionadoD = False
pressionadoA = False
velocidade = 5
while True:
    if is_pressed('w'):
        my_turtle.forward(velocidade)
    if is_pressed('d'):
        if not pressionadoD:
            my_turtle.right(90)
            pressionadoD = True
    else:
        pressionadoD = False
    if is_pressed('a'):
        if not pressionadoA:
            my_turtle.left(90)
            pressionadoA = True
    else:
        pressionadoA = False
    if is_pressed('shift'):
        velocidade = 10
    else:
        velocidade = 5
    if is_pressed('p'):
        my_turtle.goto(0,0)
    
    # for i in range(300+1):

    # my_turtle.forward(3*i)
    # my_turtle.right(45)
    # if cor == 1:
    #     my_turtle.color('red')
    # if cor == 2:
    #     my_turtle.color('green')
    # if cor == 3:
    #     my_turtle.color('blue')
    # if cor == 4:
    #     my_turtle.color('white')
    # cor+=1
    # if cor == 5:
    #     cor = 1
    # my_turtle.circle(i*2,54,1)

# my_turtle.forward(100)
# my_turtle.right(90)

# Keep the window open until clicked
screen.exitonclick()
