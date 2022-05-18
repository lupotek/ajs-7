import Validator from '../app';

const user = new Validator('Peter');

test('проверка на выброс ошибки', () => {
  expect(() => new Validator('Peter2')).toThrow('некорректное имя пользователя');
});

test('проверка на успешную валидацию', () => {
  expect(user.name).toEqual('Peter');
});
