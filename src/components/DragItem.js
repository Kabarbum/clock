import React, {useCallback, useEffect, useRef, useState} from 'react';

const maxXAxisValue = 64
const minXAxisValue = 0
const DragItem = ({children}) => {
	const [prevDragPosition, setPrevDragPosition] = useState({ x: 0, y: 0 })
	const [isDragging, setIsDragging] = useState(false)
	const [isTransitionEnabled, setIsTransitionEnabled] = useState(false)
	
	const [xPosition, setXPosition] = useState(minXAxisValue)
	
	const touchStartHandler = (e) => {
		setPrevDragPosition({x: e.touches[0].clientX, y: e.touches[0].clientY})
	}
	const touchMoveHandler = (e) => {
		const position = e.touches[0]
		console.log(!isDragging)
		if (!isDragging) {
			const isXAxisDifferenceGreat = Math.abs(prevDragPosition.x - position.clientX) > Math.abs(prevDragPosition.y - position.clientY)
			if (isXAxisDifferenceGreat) {
				setIsTransitionEnabled(true)
			}
			setIsDragging(true)
		}
		if (isTransitionEnabled) {
			const addictValue = prevDragPosition.x - position.clientX
			setXPosition(value => Math.max(Math.min(value + addictValue, maxXAxisValue), minXAxisValue))
			setPrevDragPosition({x: position.clientX, y: position.clientY})
		}
	}
	const touchEndHandler = () => {
		setIsTransitionEnabled(false)
		setIsDragging(false)
	}
	return (
		<div
			style={{transform: `translateX(${-xPosition}px)`, overflow: 'hidden'}}
			onTouchStart={touchStartHandler}
			onTouchMove={touchMoveHandler}
			onTouchEnd={touchEndHandler}
		>
			{children}
		</div>
	);
};

export default DragItem;