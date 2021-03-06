import fs from 'fs';
import parseXml from '../src/utils/parser';

test('Check parsing XML', () => {
  const feedStr = fs.readFileSync('__tests__/__fixtures__/feed', 'utf8');
  const actual = parseXml(feedStr);
  const expected = {
    description: 'This is a constantly updating lorem ipsum feed',
    items: [
      {
        description: 'Ullamco est consequat voluptate laboris id qui voluptate amet laborum Lorem velit irure dolor mollit.',
        id: 'newsId_1',
        link: 'http://example.com/test/1536204180',
        pubDate: 'Thu, 06 Sep 2018 03:23:00 GMT',
        title: 'Lorem ipsum 2018-09-06T03:23:00+00:00',
      },
    ],
    link: 'http://example.com/',
    title: 'Lorem ipsum feed for an interval of 1 minutes',
  };
  expect(actual).toEqual(expected);
});
