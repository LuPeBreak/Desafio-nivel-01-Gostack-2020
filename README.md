# Desafio-nivel-01-Gostack-2020

Desafio do nivel 01 da gostack de 2020, que propoe a criaçao de um backend, frontend e mobile que criam/modificam/deletam repositorios[title,url,techs[],likes] e dao likes.

## Status
	✅  React Repositories 🚀 Finalizado ... ✅


## Instalação e inicialização
### requisitos para instalação e teste:
- node
- npm
- yarn
- emulador android configurado
- qualquer browser
- insomnia

### instalação
- Baixe o projeto
- Dentro de cada pasta ( backend, frontend, mobile ) execute o comando 
```bash
yarn install
```
### inicialização
#### backend
- Dentro da pasta backend execute o comando
```bash
yarn dev
```

#### frontend
É necessario o backend rodando e funcionando.

- Dentro da pasta frontend execute o comando
```bash
yarn start
``` 
- O navegador deve abrir no endereço http://localhost:3000/

#### mobile

É necessario o backend rodando e funcionando.
- Dentro da pasta mobile com o android emulador aberto ( caso nao tenha configurado o path ) execute o comando
```bash
yarn android
``` 
- Você deve ver o aplicativo instalado e funcionando no emulador

## Uso
### backend
- Uma api para criar, deletar e modificar repositories e o numero de likes de cada um deles.
### frontend
- Os repositórios criados são listados
- Você pode adicionar novos repositórios e remove-los
### mobile
- Os repositórios criados são listados
- Você pode adicionar likes aos repositorios

## Features
#### backend
- [x] Cadastro de repositories
- [x] retorno de repositories 
- [x] atualizaçao de repositories
- [x] delete de repositories
- [x] atualizar likes de repositories ( likes ++ )
#### frontend
- [x] Cadastro de repositories
- [x] listagem de repositories 
- [x] delete de repositories
#### mobile
- [x] listagem de repositories 
- [x] atualizar likes de repositories ( likes ++ )

