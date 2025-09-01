import keyboard
import time

i = input('digite um numero ')

if int(i)%2 == 1:
    print('impar')
else:
    print('par')

nome = 'abc'
sobrenome = 'zxy'

print(nome, sobrenome, sep=' eita bixo ')


on_off = False
pressed = False

while True:
    if keyboard.is_pressed('p'):
        break
    if keyboard.is_pressed('o'):
        if not pressed:
           pressed = True
           if not on_off:
               on_off = True
               print(on_off)
           else:
               on_off = False
               print(on_off)
    else:
        pressed = False
    time.sleep(0.01)