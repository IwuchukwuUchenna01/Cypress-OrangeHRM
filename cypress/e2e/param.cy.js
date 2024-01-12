const loginDetails = ['Admin','admin123']; //username,password
const comment = 'This is interesting'; //comment
const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
const createFirstName = ['james','okoro', 'samson','samuel'];
const createLastName = ['femi', 'adegoke', 'taiwo','olusola'];
const createMiddleName = ['otedola','sola','adepoju', 'ifagbemi'];
const userName = ['ogunmepon', 'folashadds','ifetoms','baps','creto']
let y = Math.floor((Math.random()*(createFirstName.length-1)));
let x = Math.floor((Math.random() * 100) + 1);
const fullName = `${createFirstName[y] + " " + createLastName[y]}`;


const passwordGen = createFirstName[y] + createLastName[y] + x;

export {loginDetails, comment, url,createFirstName,createMiddleName,createLastName,y,x,passwordGen, userName, fullName }