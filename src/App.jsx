import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<>
			<Header title="Variedad de tamaños de Bike_Look"></Header>
			<div className="containerGallery">
				<Card img="../imgs/img_1.png" alt="Bike1" tittle="Look xs" />
				<Card img="./imgs/img_2.png" alt="Bike2" tittle="Look XL" />
				<Card img="./imgs/img_3.png" alt="Bike3" tittle="Look RS L" />
				<Card img="./imgs/img_4.png" alt="Bike4" tittle="Look M" />
			</div>
			<Footer />
		</>
	);
}

export default App;
