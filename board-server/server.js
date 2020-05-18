const PORT = 4000;
const EXPRESS = require('express');
const app = EXPRESS();
const CORS = require('cors');
const SESSION = require('express-session');
const CONNECT = require('./schemas');

const START_TIME = (new Date()).getTime();

CONNECT();

const corsOptions = {
  origin: "*",
  credentials: true,
};


app.use(
  SESSION({
    resave: false,
    saveUninitialized: true,
    secret: 'jeaha',
    cookie: {
      httpOnly: true,
      secure: true
    }
  })
);

app.use(CORS(corsOptions));

app.use(EXPRESS.json());
app.use(EXPRESS.urlencoded({ extended: true }));

app.use('/mmb', require('./routes/membRouter'));
app.use('/brd', require('./routes/postRouter'));


let status = "\u001b[2J\u001b[0;0H";
status += '============================ TileServer ON AIR ===========================\n';
status += 'Service Listen On : ' + PORT + '\n';
status += 'Service Runtime   : ' + (((new Date()).getTime()) - START_TIME) + '\n';
status += 'Service Root Dir  : ' + __dirname + '\n';
status += '==========================================================================\n';

const CRON_JOB = require('cron').CronJob;
const JOB = new CRON_JOB('0 0/1 * * * *', () => console.log(status), null, true, 'Asia/Seoul');

app.listen(PORT, () => {
  console.log(status);
})