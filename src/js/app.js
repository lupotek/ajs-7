export default class Validator {
  constructor(name) {
    this.validateUsername(name);
  }

  validateUsername(name) {
    if (/[\w/-_]/.test(name) && !/\d{4}/.test(name) && /[^-_\d]$/.test(name) && /^[^-_\d]/.test(name)) {
      this.name = name;
    } else {
      throw new Error('некорректное имя пользователя');
    }
  }
}
