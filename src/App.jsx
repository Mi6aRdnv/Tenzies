import Die from "../src/Die.jsx";

function App() {
	const randomDice = Array.from({ length: 10 }, () =>
		Math.ceil(Math.random() * 6)
	);

	return (
		<main className="main">
			<div className="dice-container">
				<Die value={randomDice[0]} />
				<Die value={randomDice[1]} />
				<Die value={randomDice[2]} />
				<Die value={randomDice[3]} />
				<Die value={randomDice[4]} />
				<Die value={randomDice[5]} />
				<Die value={randomDice[6]} />
				<Die value={randomDice[7]} />
				<Die value={randomDice[8]} />
				<Die value={randomDice[9]} />
			</div>
		</main>
	);
}

export default App;
