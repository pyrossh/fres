export const formatDate = (d) =>
	new Intl.DateTimeFormat('en-IN').format(new Date(d)).replaceAll('/', '-');

export const formatDateLong = (d) =>
	new Intl.DateTimeFormat('en-IN', { dateStyle: 'long' }).format(new Date(d));
