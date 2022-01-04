import "./App.css";
import { PathProvider } from "./context/Context";
import Home from "./components/Home";

function App() {
	return (
		<div>
			<div className="uk-container uk-container-medium">
				<PathProvider>
					<Home />
				</PathProvider>
			</div>
		</div>
	);
}

export default App;
