import { CarritoProvider } from "./context/CarritoContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductsSection from "./components/ProductsSection";
import Carrito from "./components/Carrito";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";
import "./App.css";
import "./custom.css";

function App() {
  return (
    <CarritoProvider>
      <div className="App">
        <Header />

        {/* Sección Inicio */}
        <section id="inicio">
          <Hero />
        </section>

        {/* Sección Productos */}
        <section id="productos">
          <ProductsSection />
        </section>

        {/* Sección Carrito */}
        <section id="carrito">
          <Carrito />
        </section>

        {/* Sección Contacto */}
        <section id="contacto">
          <Formulario />
        </section>

        <Footer />
      </div>
    </CarritoProvider>
  );
}

export default App;
