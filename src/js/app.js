
// TODO: write your code here


export default function sorting(players) {
  players.sort((a, b) => b.health - a.health);
  return players;
}
