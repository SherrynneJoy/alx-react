import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('returns current year', () => {
  expect(getFullYear()).toBe(2024);
});

test('returns a boolean', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
  expect(getFooterCopy(false).toBe('Holberton School main dashboard');
});

test('returns latestNotification', () => {
  expect(getLatestNotification()).toBe(
	  '<strong>Urgent Requirement</strong> - complete by EOD'
  );
});
