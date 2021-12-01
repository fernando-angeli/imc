# PROJETO INTEGRADOR III - appImc

Aplicativo mobile desenvolvido para que usuários possam realizar registros de seu peso e altura e obter seu IMC (indice de massa corporal). A classificação do índice de massa corporal (IMC), pode ajudar a identificar obesidade em crianças, adolescentes, adultos e idosos.

> Como é um aplicativo mobile para uma melhor visualização sugere-se que após `inspencionar` a pagina ative a` Toggle device toolbar` e opte por Dimensions: `iPhone X` ou `iPhone 6/7/8`

## Instalação

Antes de rodar a aplicação:

API - backend

- Instalar as `dependências no Maven` no arquivo pom da pasta api

APP - frontend

- Executar o comando `npm install` na pasta raiz do app

## Executar a aplicação

> Abrir a pasta app-imc no terminal
> Executar comando: npm start

## Login

> Tela inicial do aplicativo

1. Informar seu e-mail de usuário já cadastrado
2. Informar sua senha
3. Clicar no botão `Entrar` (só é habilitado após informar E-mail e Senha do usuário)

## Cadastro de novos usuários

> Para novos usuários terem acesso ao aplicativo é necessário realizar o cadastro.

1. Clicar no link `Cadastrar novo usuário`
2. Preencher todos os dados de cadastro
3. Ao terminar o preenchimentos dos dados, o botão `CADASTRAR` será liberado, clicar para finalizar.

## Registrar uma Medição

> Para registrar a primeira ou novas medições de peso e altura

1. Após efetuar login, clicar no botão `MEDIÇÕES`
2. Informar a data da medição
3. Informar o peso
4. Informar a altura
5. Clicar em `CADASTRAR`
   Caso usuário não queira cadastrar uma medição, clicar em `VOLTAR HOME`

## Apagar uma Medição

> Para apagar uma medição já cadastrada

1. Clicar no botão `x`, botão vermelho a direita de cada medição

## Sair do aplicatigo (logout)

> Para sair do aplicativo

1. Selecionar `Sair` no menu
2. Usuário será encaminhado para tela de Login.
