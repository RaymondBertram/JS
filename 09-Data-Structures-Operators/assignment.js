'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Müller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Bürki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Harzard',
      'Brandt',
      'Sancho',
      'Götze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (player) {
    if (player === 'Lewandowski') {
      console.log(`${player} scored 2 goals`);
    } else if (player === 'Gnarby') {
      console.log(`${player} scored 1 goal`);
    } else if (player === 'Hummels') {
      console.log(`${player} scored 1 goal`);
    } else {
      console.log(`${player} hasn't scored a goal!`);
    }
  },
};
//Coding-Challenge #2
/*
  1. Loop over the game.scored array and print each player name to the console, along wi th the goal number (Example: "Goal 1: Lewandowski")
  2. Use a loop to calculate the average odd and log it to the console(We already studied how to calculate averages, you can go check if you don't remember)
  3. Print the 3 odds to the console, but in a nice formatted way,exactly like this:
  Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
  Odd of victory Borrussia Dortmund: 6.5
  Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
  4. Bonus: Create an object called'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
       {
         Gnarby: 1,
         Hummels: 1,
         Lewandowski: 2
  }
  */
//1)
console.log('----1----');

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player} `);
}
//2
console.log('----2----');
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

/*
  //Coding-Challenge #1 //
  // 1) Create one player array for each team (variables 'players1' and 'player2')
  console.log('---1---');
  const [players1, players2] = game.players;
  console.log(players1, players2);
  
  // 2) The first player in any player array is the goalkeeper and the others are the field players. For Bayern Munich (team1) create one variable ('gk') with the goalkeeper's name and one array ('fieldplayers) with all the remaining 10 field players.
  console.log('---2---');
  const [team1gk, ...team1fieldPlayers] = players1;
  console.log(team1gk, team1fieldPlayers);
  
  const [team2gk, ...team2fieldPlayers] = players2;
  console.log(team2gk, team2fieldPlayers);
  
  //3) Create an array 'allPlayers' containing all plaaers of both teams (22 Players)
  console.log('---3---');
  const allPlayers = [...players1, ...players2];
  console.log(allPlayers);
  
  //4) During the game Bayern Munich (team1) used 3 substitute players. So create a new array ('playersFinal') containing all the original team 1 players plus 'Thiago', 'Coutinho', 'Perisic'
  console.log('---4---');
  const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  console.log(playersFinal);
  
  //5) Based on the game.odds object, create one variable for each odd (called 'team1','draw' and 'team2');
  //Team 1
  console.log('---5---');
  const {
    odds: { team1, x: draw, team2 },
  } = game;
  console.log(team1, draw, team2);
  
  // 6) Write a function ('printGoals) that receives an arbitary number of player names(not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of plyaer )
  console.log('---6---');
  game.printGoals('Davies');
  game.printGoals('Müller');
  game.printGoals('Lewandowski');
  game.printGoals('Kimmich');
  
  //Solution of Jonas
  const printGoals2 = function (...players) {
    console.log(players);
    console.log(`${players.length} goals were scored!`);
  };
  
  printGoals2('Neuer', 'Kimmich', 'Davies');
  printGoals2(...game.scored);
  
  // 7) The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator
  console.log('---7---');
  
  team1 < team2 && console.log('team1 is more likely to win !');
  */
