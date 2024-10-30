const TelegramApi = require('node-telegram-bot-api')

const token = '7753545260:AAHLhoXD0-z7_-htaOBwsbATZau1JPBd0EY'
const bot = new TelegramApi(token, {polling: true})

const chats = {}

const start = async () => {
    bot.setMyCommands([
        {command: '/start', description: 'start'},
        {command: '/test_reg', description: 'test registration'},
        {command: '/test_login', description: 'test login'},
        // {command: '/testAuth', description: 'test auth'},
    ])

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        console.log("TXT >",text)
        try {
            switch(text){
                case "/start": return bot.sendMessage(chatId, `Hello, **${msg.from.username}!**`, { parse_mode: 'Markdown' });
                case '/test_reg': return bot.sendMessage(chatId, `Registration`);
                case '/test_login': return bot.sendMessage(chatId, `Login`);
            }
        } catch (e) {
            console.log("E1 > ", e)
            return bot.sendMessage(chatId, 'Error!');
        }
    })
    
    // bot.on('callback_query', async msg => {}) <---- ЭТО ОТВЕТ НА КНОПКУ ЕБЛАН
}

start()