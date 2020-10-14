import React from 'react'
import useCancellablePromises from '@/hooks/useCancelAblePromise'
import { cancelablePromise } from '@/utils/cancelablePromise'
import { delay } from '@/utils'

const useClickPreventionOnDoubleClick = (onClick: any, onDoubleClick: any) => {
	const api = useCancellablePromises()

	const handleClick = (e: React.MouseEvent<any, MouseEvent>) => {
		api.clearPendingPromises()
		const waitForClick = cancelablePromise(delay(300))
		api.appendPendingPromise(waitForClick)

		return waitForClick.promise
			.then(() => {
				api.removePendingPromise(waitForClick)
				onClick(e)
			})
			.catch((errorInfo: any) => {
				api.removePendingPromise(waitForClick)
				if (!errorInfo.isCanceled) {
					throw errorInfo.error
				}
			})
	}

	const handleDoubleClick = (e: React.MouseEvent<any, MouseEvent>) => {
		api.clearPendingPromises()
		onDoubleClick(e)
	}

	return [handleClick, handleDoubleClick]
}

export default useClickPreventionOnDoubleClick
