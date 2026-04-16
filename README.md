# 🏋️‍♂️ FitShop Frontend

# MVP - Tienda fitness en línea

Frontend desarrollado en React + TypeScript para consumir la API REST del backend en Flask.


## ✨ Funcionalidades

- Catálogo de productos consumido desde la API REST del backend.

- Filtros por categoría y búsqueda para mejorar la navegación.

- Carrito de compras con persistencia en localStorage, manteniendo los productos seleccionados incluso al recargar la página.

- Diseño responsive con Bootstrap 5, adaptado a distintos dispositivos.

- Context API para manejar el estado global del carrito.

- Integración con el flujo de pago: el frontend envía la orden al backend, recibe la preferencia de Mercado Pago y redirige al checkout sandbox, mostrando luego el estado del pago en la tienda.
  
- Suscripción de usuarios: formulario para que el cliente ingrese su email y reciba más información de la tienda, consejos fitness y ofertas. El backend guarda los correos, generando una base de clientes.

## 🛠 Tecnologías

- React 18 + TypeScript
- Bootstrap 5
- Context API para el carrito
- Fetch API para consumir backend

## Instalación

1. Clona el repositorio:
   git clone https://github.com/lucasferrara015/fitshop-frontend.git

2. Instala depencencias:
   npm install
3. Copia `.env.example` a `.env` y ajusta la URL de la API si es necesario.
4. Inicia el servidor de desarrollo:
   npm start


## Backend
El backend está desarrollado en Flask.  
API endpoint en producción: https://lucasferrara015dev.pythonanywhere.com/api/productos  
(El repositorio del backend será publicado próximamente)


## Próximos Pasos
- Integración de envíos (validar que el usuario pueda elegir un método de entrega y que el pedido se registre con esa información).
- Autenticación de usuarios (login/registro).
- Panel de administración para gestión de productos y pedidos.


## Demo

- 🎯 [Ver FitShop en vivo](https://4jdv7h.csb.app/)  
- 💻 Proyecto desarrollado inicialmente en CodeSandbox.  
  El entorno de ejecución que funciona actualmente es CodeSandbox, donde se puede visualizar la tienda con todas sus funcionalidades.



