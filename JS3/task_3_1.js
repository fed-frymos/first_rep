const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };
  console.log(user);
  user.mood = 'happy';
  console.log(user);
  user.hobby = 'skydiving';
  console.log(user);
  user.premium = false;
  console.log(user);
  
  
  let keys = Object.keys(user) 
  console.log(keys);
  let total = 0;
  for (let key of keys) {
     console.log(`${key}: ${user[key]}`)
  }