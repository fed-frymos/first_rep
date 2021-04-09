const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// let newLogin = 'Mano';
let lgn;
let lgns;
let LoginValid;
let LoginUnique;
//////////////////////////////////////////////
function isLoginValid(newLogin)
{ 
  if (newLogin.length >= 4 && newLogin.length <= 16)
  {
    lgn = true;
    //console.log(lgn);
  } else 
  {
    lgn = false;
    //console.log(lgn);
  }
return lgn;
}
//console.log(isLoginValid(newLogin));
///////////////////////////////////////////////
function isLoginUnique(Logins, newLogin)
{
  if (logins.includes(newLogin))
  {
    lgns = false;
  //  console.log(lgns);
  } else 
  {
    lgns = true;
  //  console.log(lgns);
  }
return lgns;
}
//console.log(isLoginUnique(logins, newLogin));
////////////////////////////////////////////
const addLogin = function(Logins, newLogin) {
  if (isLoginValid(newLogin) !==true)
  {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  } else 
  {
    LoginValid = true;
    console.log('LoginValid', LoginValid);
  }
////////////////////////////////////////////
  if (isLoginUnique(logins, newLogin) !== true)
  {
    console.log('Такой логин уже используется!');
  } else 
  {
    LoginUnique = true;
    console.log('LoginUnique', LoginUnique);
  }
///////////////////////////////////////////
  if (LoginValid && LoginUnique === true)
  {
    logins.push(newLogin);
    //console.log(logins);
  }
  return 'Логин успешно добавлен!'
}
addLogin(logins, 'Mano');
console.log(logins);