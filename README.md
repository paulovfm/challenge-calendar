# Challenge Calendar

## Descrição

Projeto feito em angular 9 em que existe um calendário que disponibiliza horários em que os profissionais estão disponíveis para atendimento, utilizando:

boostrap: para grid

moment: formatar datas

json-server: consumir api com dados

font-awesome: ícones

## Pré-requisitos

- [NodeJS](https://nodejs.org/en/download/)

Após o download do NodeJS é necessário instalar o Angular CLI, a qual esse projeto foi construído.

```
npm install -g @angular/cli
```

## Instalação

Instale as dependências indo até o diretório raiz do projeto e executando o comando:

```
npm install
```

Após os passos anteriores estarem concluídos, podemos utilizar a nossa aplicação.
No diretório raiz do projeto digite os comandos:

Inicia o json-server e cria um banco de dados json local.

```
json-server --watch db.json
```

Inicia a aplicação.

```
ng serve -o
```

O Serviço estará disponível na porta 4200.

http://localhost:4200

## Build

Execute `ng build` para criar o projeto. Os artefatos de construção serão armazenados no diretório `dist/`. Use o sinalizador `--prod` para uma construção de produção.
