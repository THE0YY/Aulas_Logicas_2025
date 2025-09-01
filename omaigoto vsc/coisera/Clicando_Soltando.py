import keyboard
import time

a = 'bom dia'

apertado = False  # key state

while True:
    if keyboard.is_pressed('o'):  # when key is down
        if not apertado:
            print('eiutaoo')   # print on press (if you want)
            apertado = True
    else:  # when key is up
        if apertado:  # it was pressed before, now released
            print('apertado')  # <-- print on release
            apertado = False
    if keyboard.is_pressed('p'):
        break
    time.sleep(0.01)