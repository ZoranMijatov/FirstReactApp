export const getLoginData = async (username, password) => {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1500))
  );
  let storedName = localStorage.getItem("username");
  let storedPwd = localStorage.getItem("pwd");
  if (username === storedName && password === storedPwd) {
    localStorage.setItem("loginSuccess", true);
    return Promise.resolve({
      message: "Success",
    });
  } else {
    return Promise.reject({
      message: "Username or password is not valid",
    });
  }
};
