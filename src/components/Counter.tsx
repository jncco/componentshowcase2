import { useState } from 'react';
 
export default function Counter({
	children,
	count: initialCount,
}: {
	children: JSX.Element;
	count: number;
}) {
	const [count, setCount] = useState(initialCount);
	const add = () => setCount((i) => i + 1);
	const subtract = () => setCount((i) => i - 1);

	return (
		<>
			<div className="grid grid-cols-3 text-2xl mt-8 place-items-center">
				<button onClick={subtract}>-</button>
				<pre>{count}</pre>
				<button onClick={add}>+</button>
			</div>
			<div className="text-center">{children}</div>
		</>
	);
}
