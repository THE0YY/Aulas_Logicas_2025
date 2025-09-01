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

# rabio
angulo = 0
distancia = 5

while True:
    if is_pressed('a'):
        angulo+=1
        print(f'Angulo: {angulo}')
        sleep(0.1)
    elif is_pressed('z'):
        angulo-=1
        print(f'Angulo: {angulo}')
        sleep(0.1)
    if is_pressed('d'):
        distancia+=1
        print(f'Distancia: {distancia}')
        sleep(0.1)
    elif is_pressed('c'):
        if distancia > 0:
            distancia-=1
            print(f'Distancia: {distancia}')
            sleep(0.1)
    if is_pressed('p'):
        my_turtle.goto(0,0)
        my_turtle.clear()
    if is_pressed('o'):
        my_turtle.penup()
        my_turtle.goto(0,0)
        my_turtle.pendown()
    if is_pressed('r'):
        my_turtle.reset()
        my_turtle.color("white")     # Set pen color
        my_turtle.pensize(3)       # Set pen size
        my_turtle.speed(100)
    if is_pressed('s'):
        for i in range(75):
            my_turtle.forward(distancia*i)
            my_turtle.left(angulo)

screen.exitonclick()