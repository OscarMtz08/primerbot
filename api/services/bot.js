var TelegramBot = require('node-telegram-bot-api');
var token = '197002385:AAGTrPibFQ9KqeAbxHEPf4jEdz_a687Ty0I';

var bot = new TelegramBot(
    token, {
        polling:true
    });

bot.getMe().then(function (me) {
    console.log('Hi, my name is %s!', me.username);
});

 bot.onText(/^\/soy (.+)$/, function(msg, match) {
 	var fromId = msg.from.id;
 	var resp = match[1];
 	console.log(msg);
 	bot.sendMessage(fromId, "Hola " + msg.from.first_name);
 });

bot.onText(/^\/foto/, function(msg) {
 	var fromId = msg.from.id;
 	var photo = 'assets/images/batman.jpeg';
    bot.sendPhoto(fromId, photo, {caption: 'Batman'});
 });


 bot.onText(/^\/location/, function(msg) {
 	var fromId = msg.from.id;
 	var lat = 20.0825194;
	var lon = -98.7567779;
    bot.sendLocation(fromId, lat, lon);
 });

bot.onText(/^\/audio/, function(msg) {
 	var fromId = msg.from.id;
 	var audio = 'assets/audio/batman.mp3';
    bot.sendAudio(fromId, audio);
 });
 
//Tarea: Ver documentación: Agregar un comando para mandar texto, comando para enviar una foto, comando para enviar ubicación
//Y otro
//Subir proyecto a GitHub, mandar links heroku y github