colchete = [
    {'nome_foda1': [123, 321]},
    {'nome_foda2': [456, 654]},
    {'nome_foda3': [789, 987]}
]

for parentese_bonito in colchete:
    for dentro_parentese in parentese_bonito.values():
        for valor_dentor_colchete in dentro_parentese:
            if valor_dentor_colchete == 654:
                print(f'valor achado achada {valor_dentor_colchete}')