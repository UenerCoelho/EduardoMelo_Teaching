# Operadores Aritméticos básicos abreviados

### Adição e Subtração
- Os operadores de adição e subtração tem duas formas abreviadas:
  * A primeira forma abreviada de adição é assim:
    ```js
        var soma = 0;
        soma++; // Operador Abreviado de Adição Forma 01

        var sub = 10;
        sub--; // Operador Abreviado de Subtração 01
    ```
  * Os operadores ++ e -- causam efeito colateral, alterando o valor original da variável soma para 1 (no exemplo acima), sem precisar usar o operador de atribuição =.

  * A segunda forma abreviada de adição é assim:
    ```js
        var soma = 0;
        soma += 1; // Operador Abreviado de soma 02
    ```
  * Que é o mesmo que fazer isso:
    ```js
        var soma = 0;
        soma = soma + 1;
    ```
  * A segunda forma abreviada de subtração é assim:
    ```js
        var sub = 0;
        sub--; // Operador Abreviado de subtração 02    
    ```
  * Que é o mesmo que fazer isso:
    ```js
        var sub = 0;
        sub = sub - 1;
    ```
### Multiplicação e Divisão
- Para Multiplicação e divisão temos apenas um operador abreviado.
  * Multiplicação:
    ```js
        var mult = 3;
        mult *= 3; // Operador Abreviado de Multiplicação
    ```
  * Seria o mesmo que fazer:
    ```js
        var mult = 3;
        mult = mult * 3;
    ```
  * Para divisão:
    ```js
        var divisão = 24;
        divisao /= 2; // Operador Abreviado de Divisão
    ```
  * Seria o mesmo que fazer:
    ```js
        var divisao = 24;
        divisao = divisao / 2;
    ```

#### Fonte
- Esta informação foi retirada de um comentário neste [link](#https://github.com/da2k/curso-javascript-ninja/issues/12#issuecomment-89434504)
