import sorting from '../app';

test('сортировка игроков по состоянию здоровья', () => {
  const testPlayers = [{ name: 'мечник', health: 15 },
    { name: 'маг', health: 30 },
    { name: 'лучник', health: 48 }];
  const received = sorting(testPlayers);

  expect(received).toEqual([{ name: 'лучник', health: 48 },
    { name: 'маг', health: 30 },
    { name: 'мечник', health: 15 }]);
});


// проверка на то, что toBe не работает

test('сортировка игроков по состоянию здоровья', () => {
  const testPlayers = [{ name: 'мечник', health: 15 },
    { name: 'маг', health: 30 },
    { name: 'лучник', health: 48 }];
  const received = sorting(testPlayers);

  expect(received).not.toBe([{ name: 'лучник', health: 48 },
    { name: 'маг', health: 30 },
    { name: 'мечник', health: 15 }]);
});
