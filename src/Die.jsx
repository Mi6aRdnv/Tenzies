export default function Die({ value, isHeld, hold }) {
	return (
		<button
			onClick={hold}
			className={`${isHeld && "die--held"} die`}
			aria-pressed={isHeld}
			aria-label={`${isHeld ? "Gehaltener" : "Nicht gehaltener"} Würfel mit dem Wert ${value}`}
		>
			{value}
		</button>
	);
}
