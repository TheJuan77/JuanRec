// Função para adicionar dois números
function add(a, b) {
    return a + b;
  }
  
  // Função para subtrair dois números
  function subtract(a, b) {
    return a - b;
  }
  
  // Função para multiplicar dois números
  function multiply(a, b) {
    return a * b;
  }
  
  // Função para dividir dois números
  function divide(a, b) {
    if (b === 0) {
      return 'Erro: Divisão por zero';
    }
    return a / b;
  }
  
  // Função para calcular o resultado com base na operação escolhida
  function calculate(operator, a, b) {
    switch (operator) {
      case '+':
        return add(a, b);
      case '-':
        return subtract(a, b);
      case '*':
        return multiply(a, b);
      case '/':
        return divide(a, b);
      default:
        return 'Operação inválida';
    }
  }
  
  // Exemplo de uso da calculadora
  const num1 = 5;
  const num2 = 3;
  const operation = '+';
  
  const result = calculate(operation, num1, num2);
  console.log(`O resultado da operação ${num1} ${operation} ${num2} é: ${result}`);
  