import { describe, expect, it } from 'vitest';
import { formatDate } from './format';

describe('formatDate', () => {
	it('renders an ISO timestamp as a long date', () => {
		expect(formatDate('2026-03-09T10:30:00Z')).toBe('March 9, 2026');
	});

	it('does not shift the day for a timestamp near midnight UTC', () => {
		expect(formatDate('2026-01-01T00:15:00Z')).toBe('January 1, 2026');
	});
});
