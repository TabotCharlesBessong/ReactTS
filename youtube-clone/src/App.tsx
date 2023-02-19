import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import { Home, Search, Watch } from "./pages"

function App() {

  return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<Search />} />
				<Route path="/watch/:id" element={<Watch />} />
			</Routes>
		</Router>
	);
}

export default App
