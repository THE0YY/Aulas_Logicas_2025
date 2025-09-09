from tkinter import *
import turtle
 # # # # # # # # # # Funções # # # # # # # # # # V

 # # # # # # # # # # defindo telas  # # # # # # # # # # V
screenTur = turtle.Screen()
screenTur.bgcolor("black") 

screenTki = Tk()
# # # # # # # # # # configurando telas  # # # # # # # # # # V
screenTki.config(bg='#ffffff')
screenTki.resizable(False,False)

mt = turtle.Turtle()
mt.color('white')
mt.pensize(3)
mt.speed(100)


# # # # # # # # # # mainloop  # # # # # # # # # # V
screenTki.mainloop()