// Zadanie 1: Nazwy użytkowników
// Napisz funkcję strzałkową getUserNames(users), która przyjmuje jeden parametr users — tablicę obiektów użytkowników.
//  Funkcja powinna zwrócić tablicę nazw wszystkich użytkowników(właściwość name) z tablicy users.

//     • Zadeklarowano zmienną getUserNames;
//     • Zmienna getUserNames przypisano funkcję strzałkową z parametrem (users);
//     • Do iteracji po parametrze users użyto metody map();
//     • Wywołanie funkcji z określoną tablicą użytkowników zwraca tablicę
//      ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"];
//     • Wywołanie funkcji z losowymi, ale poprawnymi argumentami zwraca poprawną wartość.

const getUserNames = users => users.map(users => users.name);

console.log(
  getUserNames([
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      balance: 2811,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      balance: 3821,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      balance: 3793,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      balance: 2278,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      balance: 3951,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      balance: 1498,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      balance: 2764,
    },
  ])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
