// TODO: write code here
import { destructuring } from './destructuring';

destructuring({
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      description: 'Двойной выстрел наносит двойной урон',
      icon: 'http://...'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
    }
  ]
});

console.log('app worked!');