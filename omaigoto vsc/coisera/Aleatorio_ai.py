import abc

a = 'afdsasdgb fwreteryyriuyo'
vowel = 'aeiou'

for letra in a:
    if letra in vowel:
        print(letra, end='')

import random
numero = int(input('Numero: '))
quantidade_chutes = 0
chute = -1
mini = int(input('digite o numero minimo: '))
maxi = int(input('digite o numero maximo: '))

while True:
    chute = (random.randrange(mini,maxi))
    quantidade_chutes += 1
    print(chute, end=' ')
    if chute == numero:
        print(f'achou numero {numero} em {quantidade_chutes} tentativas')
        break