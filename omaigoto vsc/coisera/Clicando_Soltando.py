import keyboard
from time import sleep

apertado = False  # key state

while True:
    if keyboard.is_pressed('o'):  # when key is down
        if not apertado:
            print('eiutaoo')   # print on press
            apertado = True
    else:  # when key is up
        if apertado:  # it was pressed before, now released
            print('apertado')  # <-- print on release
            apertado = False
    if keyboard.is_pressed('p'):
        break
    sleep(0.01)