import { useCarrito } from "../hooks/useCarrito";

interface ProductoType {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

const Producto = ({ producto }: { producto: ProductoType }) => {
  const { addItem } = useCarrito();
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={producto.imagen}
        className="card-img-top"
        alt={producto.nombre}
      />
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">{producto.descripcion}</p>
        <p className="card-text font-weight-bold text-primary">
          ${producto.precio}
        </p>
        <button
          className="btn btn-primary"
          onClick={() => addItem({ ...producto, cantidad: 1 })}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default Producto;

