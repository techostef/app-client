import { useEffect, useRef, useState } from 'react';

const MAX_ITEMS = 10;

function useElementOnScreen<T = any>(data: T[]) {
	const [elementRef, setElementRef] = useState(undefined);
	const index = useRef(0);
	const [showClients, setShowClients] = useState<T[]>(data.slice(index.current, index.current + MAX_ITEMS));

	useEffect(() => {
		index.current = 0;
		setShowClients(data.slice(index.current, index.current + MAX_ITEMS));
	}, [data]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]: any) => {
				if (entry.isIntersecting) {
					index.current += MAX_ITEMS;
					// Update state based on whether element is in viewport
					setShowClients((prevClients) => {
						return [...prevClients, ...data.slice(index.current, index.current + MAX_ITEMS)];
					});
				}
			},
			{
				root: null,
				rootMargin: '0px', // margin around viewport
				threshold: 0.7, // trigger when 20% of element is visible
			}
		);

		if (elementRef) {
			observer.observe(elementRef);
		}
	}, [data, elementRef]); //

	return { showClients, setElementRef };
}

export default useElementOnScreen;
