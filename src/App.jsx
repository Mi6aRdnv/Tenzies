import Die from "../src/Die.jsx";
import { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";

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
	const isGameWon =
		dice.every((die) => die.isHeld) &&
		dice.every((die) => die.value === dice[0].value);

	const newGame = useRef(null);
	useEffect(() => {
		if (isGameWon) {
			newGame.current.focus();
		}
	}, [isGameWon]);

	return (
		<main className="main">
			<div className="dice-container">{diceElements}</div>

			{isGameWon ? (
				<>
					<button
						ref={newGame}
						onClick={() => setDice(() => setStartDice())}
						className="roll-dice"
					>
						Neues Spiel
					</button>
					<Confetti />
					<p className="sr-only" aria-live="polite">
						Herzlichen Glückwunsch! Du hast gewonnen! Drücke „Neues Spiel“, um
						erneut zu beginnen.
					</p>
				</>
			) : (
				<button onClick={() => rollUnheldDice()} className="roll-dice">
					Würfeln
				</button>
			)}
		</main>
	);
}

export default App;
