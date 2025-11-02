import Die from "../src/Die.jsx";
import { useState } from "react";

function App() {
	function setStartDice() {
		return Array.from({ length: 10 }, () => ({
			value: Math.ceil(Math.random() * 6),
			id: crypto.randomUUID(),
			isHeld: false,
		}));
	}
	function hold(id) {
		setDice((oldDice) =>
			oldDice.map((die) => {
				return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
			})
		);
	}
	function rollUnheldDice() {
		setDice((oldDice) =>
			oldDice.map((die) => {
				return !die?.isHeld
					? {
							...die,
							value: Math.ceil(Math.random() * 6),
						}
					: die;
			})
		);
	}
	const [dice, setDice] = useState(() => setStartDice());

	const diceElements = dice.map((die) => (
		<Die
			key={die.id}
			value={die.value}
			isHeld={die.isHeld}
			hold={() => hold(die.id)}
		/>
	));

	return (
		<main className="main">
			<div className="dice-container">{diceElements}</div>
			<button onClick={() => rollUnheldDice()} className="roll-dice">
				Würfeln
			</button>
		</main>
	);
}

export default App;
