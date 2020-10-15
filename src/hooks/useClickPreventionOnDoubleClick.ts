import React from 'react'

import useCancellablePromises from '@/hooks/useCancelAblePromise'
import { delay } from '@/utils'
import { cancelablePromise } from '@/utils/cancelablePromise'

const useClickPreventionOnDoubleClick = (onClick: any, onDoubleClick: any, delayTime: number = 300) => {
	const api = useCancellablePromises()

	const handleClick = (e: React.MouseEvent<any, MouseEvent>) => {
		api.clearPendingPromises()
		const waitForClick = cancelablePromise(delay(delayTime))
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
