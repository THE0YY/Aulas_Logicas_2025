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
repeticao = 75
angulo = 0
angulo_virar = 90
distancia = 5
passos = 5

pressionadoN = False
pressionadoT = False
pressionadoM= False
pressionadoV= False

def menu():
    print('''
    (Espaço) Rabisca
    (Y) Aumenta repetiões (normal 75)   (H) Abaixa repetições

    (A) + Angulo em 1   (Z) - Angulo em 1   (N) Inverte angulo (+ pra -)    
    (G) Define angulo á virar (+1)   (B) Define angulo á virar (-1) 
    (T) Vira o valor G em angulo    (V) Retorna angulo 90 á virar
          
    (D) + Distancia em passos    (C) - Distancia em passos
    (W) Aumenta passos de angulo e distancia (S) Reduz passos
          
    (O) Volta ao meio sem apagar    (R) Reseta
''')

menu()

while True:
    if is_pressed('w'):
        passos+=1
        print(f'Passos: {passos}')
        sleep(0.05)
    if is_pressed('s'):     # erro de logica repetindo 1 quando abaixado (O)
        passos-=1
        if passos > 0:
            print(f'Passos: {passos}')
        else:
            passos=1
        sleep(0.05)
    if is_pressed('a'):
        angulo+=passos
        print(f'Angulo: {angulo}')
        sleep(0.1)
    elif is_pressed('z'):
        angulo-=passos
        print(f'Angulo: {angulo}')
        sleep(0.1)
    if is_pressed('d'):
        distancia+=passos
        print(f'Distancia: {distancia}')
        sleep(0.1)
    elif is_pressed('c'):
        if distancia - passos > 0: # bug passos passando este if e quebrando codigo (O)
            distancia-=passos
            print(f'Distancia: {distancia}')
            sleep(0.1)
    if is_pressed('o'):
        my_turtle.penup()
        my_turtle.goto(0,0)
        my_turtle.pendown()
        my_turtle.setheading(0)
    if is_pressed('r'):
        my_turtle.reset()
        my_turtle.color("white")     # Set pen color
        my_turtle.pensize(3)       # Set pen size
        my_turtle.speed(100)
    if is_pressed('n'):
        if not pressionadoN:
            angulo = angulo - angulo - angulo
            print(f'Angulo: {angulo}')
            pressionadoN = True
    else:
        if pressionadoN:
            pressionadoN = False
    if is_pressed('t'):
        if not pressionadoT:
            my_turtle.left(angulo_virar)
            pressionadoT = True
    else:
        pressionadoT = False
    if is_pressed('v'):
        if not pressionadoV:
            angulo_virar=90
            print(f'Angulo á virar: {angulo_virar}')
            pressionadoV = True
    else:
        pressionadoV = False
    if is_pressed('g'):
        angulo_virar+=1
        print(f'Angulo á virar: {angulo_virar}')
        sleep(0.1)
    if is_pressed('b'):
        angulo_virar-=1
        print(f'Angulo á virar: {angulo_virar}')
        sleep(0.1)
    if is_pressed('m'):
        if not pressionadoM:
            menu()
            pressionadoM = True
    else:
        pressionadoM = False
    if is_pressed('y'):
        repeticao+=passos
        print(f'Repetições: {repeticao}')
    sleep(0.05)

    if is_pressed('h'):
        repeticao-=passos
        if repeticao > 0:
            print(f'Repetições: {repeticao}')
        else:
            repeticao = 1
    sleep(0.05)
    if is_pressed('space'):
        for i in range(repeticao):
            my_turtle.forward(distancia*i)
            my_turtle.left(angulo)