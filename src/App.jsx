import Die from "../src/Die.jsx";
import { useState } from "react";

function App() {
	function setStartDice() {
		return Array.from({ length: 10 }, () => ({
			value: Math.ceil(Math.random() * 6),
			id: crypto.randomUUID(),
		}));
	}
	const [dice, setDice] = useState(() => setStartDice());

	const diceElements = dice.map((die) => (
		<Die key={die.id} value={die.value} />
	));

	return (
		<main className="main">
			<div className="dice-container">{diceElements}</div>
			<button onClick={() => setDice(setStartDice())} className="roll-dice">
				Würfeln
			</button>
		</main>
	);
}

export default App;
