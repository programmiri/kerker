import { dateToString } from './format.js';

describe('Date formating', () => {

  it('Takes a date object and formats it in a string (YYYY-MM-DD)', () => {
    const dateObj = new Date('Sun Jan 28 2018 13:19:39 GMT+0100');
    const dateFormatted = dateToString(dateObj);

    expect(dateFormatted).toEqual('2018-01-28');
  });

});
