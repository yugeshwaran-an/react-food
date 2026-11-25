import Category from "./components/category";
import FoodList from "./components/foodList";

import "./App.css";

function App() {
  return (
    <>
      <section id="home">
        <h1>Welcome to FoodZone</h1>
        <p>Delicious food at your fingertips!</p>
      </section>

      <Category />

      <h2 id="menu">Our Food Menu</h2>

      <FoodList />
    </>
  );
}

export default App;
