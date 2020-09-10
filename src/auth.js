class Auth {
  constructor() {
    this.authenticated = false;
  }

  login() {
    return new Promise((res, rej) => {
      this.authenticated = true;

      if (this.authenticated == true) {
        res(true);
      } else {
        rej(Error("didn't work"));
      }
    });
  }

  logout() {
    return new Promise((res, rej) => {
      this.authenticated = false;

      if (this.authenticated == false) {
        res(true);
      } else {
        rej(Error("didn't work"));
      }
    });
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
