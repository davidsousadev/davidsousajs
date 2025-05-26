# davidsousajs

Uma biblioteca simples em JavaScript para somar dois números.

## 🚀 Instalação

Via npm:

```bash
npm install davidsousajs
```

Ou via yarn:

```bash
yarn add davidsousajs
```

## ✨ Uso

### CommonJS

```js
const somar = require('davidsousajs');

console.log(somar(5, 3)); // Saída: 8
```

### ESModules

```js
import somar from 'davidsousajs';

console.log(somar(5, 3)); // Saída: 8
```

## 📦 API

### `somar(a, b)`

- **Parâmetros:**
  - `a` (number): Primeiro número.
  - `b` (number): Segundo número.

- **Retorna:**  
  A soma de `a` e `b`.

- **Erro:**  
  Se algum dos parâmetros não for número, será lançado um erro.

## ❌ Exemplo de erro

```js
const somar = require('davidsousajs');

console.log(somar(5, 'x')); 
// Erro: Os parâmetros precisam ser números
```

## 📝 Licença

Este projeto está licenciado sob a licença MIT.  
Desenvolvido por [@davidsousadev](https://github.com/davidsousadev).