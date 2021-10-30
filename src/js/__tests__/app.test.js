import sorting from '../app';

test('сортировка игроков по состоянию здоровья', () => {
  const testPlayers = [{ name: 'мечник', health: 15 },
    { name: 'маг', health: 30 },
    { name: 'лучник', health: 48 }];
  const arrSort = sorting(testPlayers);
  const received = []
  arrSort.forEach(elem => received.push(elem.health));
  expect(received).toEqual([48, 30, 15]);
});
