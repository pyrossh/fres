export const formatDate = (d) =>
	new Intl.DateTimeFormat('en-GB').format(new Date(d)).replaceAll('/', '-');

export const formatDateLong = (d) =>
	new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(new Date(d));
