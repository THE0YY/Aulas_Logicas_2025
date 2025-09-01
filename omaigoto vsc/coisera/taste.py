import abc

a = 'afdsasdgb fwreteryyriuyo'
vowel = 'aeiou'

for letra in a:
    if letra in vowel:
        print(letra, end='')