/**
 * Dates are stored as ISO timestamps and rendered in UTC so the server and the
 * browser always agree on the day (a local-time format can shift a post to the
 * previous date depending on where the visitor is).
 */
export function formatDate(iso: string): string {
	return new Date(iso).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'UTC'
	});
}
