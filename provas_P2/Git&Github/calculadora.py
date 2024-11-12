inserir1 = int(input('Insira o valor 1 desejado: \n'))
inserir2 = int(input('Insirao valor 2 desejado: \n'))

soma = (inserir1 + inserir2)
sub = (inserir1 - inserir2)
multi = (inserir1 * inserir2)
div = (inserir1 / inserir2)

operacao = str(input('Selecione a operação desejada: \n soma \n subtração \n multiplicação \n divisão \n'))

if (operacao == 'soma'):
    print(f"Soma: {soma}")
elif (operacao == 'subtração'):
    print(f"Subtração: {sub}")
elif (operacao == 'multiplicação'):
    print(f"Multiplicação: {multi}")
elif (operacao == 'divisão'):
    print(f"Divisão: {div}")
else:
    if (operacao == "" or operacao != ['soma', 'subtração', 'divisão', 'multiplicação']):
        print('Você não selecionou uma operação')
        