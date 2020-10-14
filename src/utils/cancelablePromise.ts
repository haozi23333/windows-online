export const cancelablePromise = <T>(promise: Promise<T>) => {
	let isCanceled = false
	const wrappedPromise = new Promise<T>((resolve, reject) => {
		promise.then(
			(value) => (isCanceled ? reject({ isCanceled, value }) : resolve(value)),
			(error) => reject({ isCanceled, error })
		)
	})
	return {
		promise: wrappedPromise,
		cancel: () => (isCanceled = true)
	}
}
