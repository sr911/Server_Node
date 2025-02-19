// Импортируем модуль http
const http = require('http');

// Создаем сервер
const server = http.createServer((req, res) => {
    // Устанавливаем заголовок ответа
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Отправляем HTML-ответ
    res.end(`
   <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Добро пожаловать в мир Node.js!</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #1e1e1e;
            color: #f5f5f5;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
        }
        .container {
            max-width: 600px;
            padding: 20px;
            background-color: #2d2d2d;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }
        h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
            color: #4CAF50;
        }
        p {
            font-size: 1.2em;
            line-height: 1.6;
            margin-bottom: 20px;
            text-align: left;
        }
        .cta-button {
            display: inline-block;
            padding: 15px 30px;
            font-size: 1.2em;
            color: #fff;
            background-color: #4CAF50;
            border-radius: 5px;
            text-decoration: none;
            transition: background-color 0.3s ease;
        }
        .cta-button:hover {
            background-color: #45a049;
        }
        .highlight {
            color: #4CAF50;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Добро пожаловать в мир Node.js!</h1>
<p>Пришло время раскрыть весь ваш потенциал и выйти на новый уровень
 с JavaScript. </p>
 <p><span class="highlight">Node.js</span> даст вам возможность создавать не просто приложения, а настоящие технологические шедевры — быстрые, масштабируемые и революционные. Это ваш шанс стать архитектором будущего, где каждая строчка кода меняет мир.</p>
<p>А теперь вопрос: готовы ли вы выйти за пределы своих возможностей?
 Установите <span class="highlight">Node.js</span> прямо сейчас и начните создавать то, что изменит вашу жизнь и, возможно, мир вокруг вас. Не ждите идеального момента — он наступит только тогда, когда вы сделаете первый шаг.</p>
        <a href="https://nodejs.org/" class="cta-button" target="_blank">Установить Node.js</a>    
</div>
</body>
</html>
  `);
});

// Указываем порт, на котором будет работать сервер
const PORT = 3000;

// Запускаем сервер
server.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});