import yargsApp from '..';

describe('gitsync-cli', () => {
  test('return yargs object', () => {
    expect(yargsApp).toBeInstanceOf(Object);
    expect(yargsApp.parsed).toBeFalsy();
  });
});
