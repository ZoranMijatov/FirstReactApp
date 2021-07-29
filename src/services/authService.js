export const getLoginData = async (username, password) => {
  await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 1500)));
  if(username === 'zoran' && password === 'zoran'){
    return Promise.resolve({
      first_name: 'Pera',
      last_name: 'Simic',
      age: 22,
    });
  } else {
    return Promise.reject({
      message: "Username or password is not valid"
    })
  }
};
