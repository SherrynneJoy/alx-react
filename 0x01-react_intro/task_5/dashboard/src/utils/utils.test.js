import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('returns current year', () => {
	expect(getFullYear()).toBe(2024);
});
test('get correct footer copy', () => {
	expect(getFooterCopy(true)).toBe('Holberton School');;
	expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});
test('returns latest notification', () => {
	expect(getLatestNotification()).toBe(
		'<strong>Urgent Requirement</strong> - complete by EOD'
	);
});
