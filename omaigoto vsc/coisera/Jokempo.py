import random

jogo = ['pedra', 'papel', 'tesoura']

p1 = input('Sua jogada: ').lower()

if p1 not in jogo:
    print('escola invalida.')
else:
    pc = random.choice(jogo)
    print(f'Escolha do pc: {pc}')

    if p1 == pc:
        print('Empate')
    
    elif ((p1 == 'tesoura' and pc == 'papel')or
          (p1 == 'papel' and pc == 'pedra')or
          (p1 == 'pedra' and pc == 'tesoura')):
        print('meteu capa no robo vei ruim')
    
    else:
        print('leva capa do robo 360 perfeito')
