const team = {
 _players: [
   {firstName: 'nick', lastName: 'ocran', age: 27},
   {firstName: 'prince', lastName: 'mensah', age: 23},
   {firstName: 'isaac', lastName: 'aido', age:17},
 ],
 _games: [
   {opponent: 'citywise', teamPonts: 45, opponnentPoints: 26},
   {opponent: 'grease', teamPonts: 55, opponnentPoints: 65},
   {opponent: 'apple', teamPonts: 15, opponnentPoints: 16}
 ],

 get players(){
   return this._players;
 },

 get games(){
   return this._games;
 },

 addPlayer(firstName, lastName, age) {
   let player = {
     firstName: firstName,
     lastName: lastName,
     age: age
   };
   this.players.push(player)
 },

 addGame(oppName, points, oppPoints){
   let game = {
     opponent: oppName,
     points: points, 
     opponentPoints: oppPoints
   }
   this.games.push(game);
 }

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('titans', 100, 23);
team.addGame('tens', 200, 13);
team.addGame('bricks', 300, 53);

console.log(team.games);
    