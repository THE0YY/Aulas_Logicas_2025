import keyboard
from time import sleep
i = int(input('digite um numero '))

if (i)%2 == 1:
    print('impar')
else:
    print('par')

nome = 'abc'
sobrenome = 'zxy'

print(nome, sobrenome, sep='-eita bixo-')
print(nome,sobrenome.center(11,"#"))

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
    sleep(0.01)