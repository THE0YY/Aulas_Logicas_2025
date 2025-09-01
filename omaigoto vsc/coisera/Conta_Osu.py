import keyboard
import time

z = False
c = False

media = 0

cz = 0
cc = 0 

while True:
    if keyboard.is_pressed('z'):
        if not z:
            cz += 1
            z = True
    else:
        z = False

    
    if keyboard.is_pressed('c'):
        if not c:
            cc += 1
            c = True
    else:
        c = False

    if keyboard.is_pressed('p'):
        print(f'z foi apertado {cz} vezes, e c foi apertado {cc} vezes.')

        menor = min(cz, cc)
        maior = max(cz, cc)
        
        if menor == 0:
            print("Não é possível calcular a diferença percentual com 0.")
        else:
            percentual_maior = ((maior - menor) / menor) * 100
            print(f'O numero {max(cz , cc)} e {percentual_maior:.2f}% maior que o numero {min(cc , cz)}.')
        break
    time.sleep(0.01)