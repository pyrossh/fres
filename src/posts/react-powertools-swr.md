---
title: 'React Powertools: SWR'
description: A react library that makes it easier to fetch data
image: /images/gopibot.png
date: 2024-08-16
tags:
  - react
  - frontend
  - hooks
  - swr
  - fetch
published: true
---

The **SWR** library provides hooks which help in facilitating fetching and revalidating data so that the UI will be always fast and reactive. It uses the stale-while-revalidate, a HTTP cache invalidation strategy, to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.

You can install it using this command: `npm i swr`

### useSWR

This hook exposes few options to customise the fetching/revalidation logic,

```tsx
const { data, error, isLoading, isValidating, mutate } = useSWR(key, fetcher, options);
```

**Parameters**

- `key`: a unique key string for the request
- `fetcher`: a Promise-returning function to fetch your data
- `options`: an object of options for this SWR hook

**Return values**

- `data`: data for the given key resolved by `fetcher`
- `error`: error thrown by `fetcher`
- `isLoading`: if there's an ongoing request and no "loaded data" or state data
- `isValidating`: if there's a revalidation request happening
- `mutate(data?, options?)`: function to mutate the cached data

> Before SWR

```tsx
import { useState, useEffect } from 'react';

const useUser = (id: string) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		setError(null);
		fetch(`/users/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setUser(data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	}, [id]);
	return {
		user,
		loading,
		error,
	};
};
```

> After SWR

```tsx
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useUser = (id: string) => {
	const { data, error, isLoading } = useSWR(`/users/${id}`, fetcher);
	return {
		user: data,
		isLoading,
		error: error,
	};
};
```

### Configuration

You can configure a global fetcher function so that you don't need pass the fetcher on every hook call using the `SWRConfig` Provider at the root app level. The library uses a global cache to store and share data across all components, you can also customise this behaviour with the `provider` option.

```tsx
import { SWRConfig } from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
	return (
		<SWRConfig value={{ fetcher: fetcher, provider: () => new Map() }}>
			<Page />
		</SWRConfig>
	);
}
```

### Automatic Revalidation

You can use the options parameter in the API to configure automatic revalidation of your components based on different criteria. This can be done at a global level using SWRConfig provider or at a local hook level using the options parameter.

- `revalidateIfStale`: automatically revalidate even if there is stale data
- `revalidateOnMount`: enable or disable automatic revalidation when component is mounted
- `revalidateOnFocus`: automatically revalidate when window gets focused
- `revalidateOnReconnect`: automatically revalidate when the browser regains a network connection
- `refreshInterval`:  automatically revalidate every interval in milliseconds

There are many more options apart from these.

### Manual Revalidation

There are 2 ways to trigger a revalidation request manually,

**1.** You can use the **mutate** function returned by the **useSWR** hook to trigger a revalidation of the data

```tsx
import useSWR from 'swr';

const Profile = () => {
	const { data, error, isLoading, mutate } = useSWR(`/users/1`);
	if (error) return <div>failed to load</div>;
	if (isLoading) return <div className="text">loading...</div>;
	return (
		<div>
			<div>{JSON.stringify(data, null, 2)}</div>
			<button onClick={() => mutate()}>Update User</button>
		</div>
	);
};
```

This can be used to implement optimistic updates as well if you know what data needs to change and once the revalidation is complete the cache gets updated with new data from the server.

```tsx
mutate({ ...data, name: 'John Doe' });
```

**2.** If you need to update the cache from another component which doesn't have access to the **useSWR** hook you can use the **mutate** function returned by the **useSWRConfig** to get access to the cache. Here you would need to provide the key to trigger a revalidation of the request.

```tsx
import { useSWRConfig } from 'swr';
// or import { mutate } from "swr"

const UpdateButton = () => {
	const { mutate } = useSWRConfig();
	return (
		<div>
			<button onClick={() => mutate(`/users/1`)}>Update User</button>
		</div>
	);
};
```

Here as well you can do optimistic updates similarly,

```tsx
mutate(`/users/1`, { ...data, name: 'John Doe' });
```

### **useSWRMutation**

This hook makes it easier to handle update requests and provides necessary state

```tsx
import useSWRMutation from 'swr/mutation';

async function updateUser(url, data) {
	await fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
	});
}

function Profile() {
	const { data, error, isMutating, trigger } = useSWRMutation(
		'/api/user/update',
		updateUser,
		options,
	);
	return (
		<button onClick={() => trigger({ name: 'John Doe' })}>
			{isMutating ? 'Updating...' : 'Update User'}
		</button>
	);
}
```

**Parameters**

- `key`: a unique key string for the request
- `fetcher(key, { arg })`: an async function for remote mutation
- `options`: an optional object to configure revalidation and optimistic updates

**Return values**

- `data`: data for the given key returned from the update request
- `error`: error thrown by the request
- `trigger(arg, options)`: a function to trigger a remote mutation
- `reset`: a function to reset the state
- `isMutating`: if there's an ongoing update request
