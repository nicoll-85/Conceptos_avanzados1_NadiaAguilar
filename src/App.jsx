import {} from 'react';
import useFetch from './components/UseFetch';
import Counter from './components/Counter';
import './App.css';
import ErrorBoundary from './components/ErrorBoundery';
import CounterWithLazy from './components/CounterWithLazy';
import ShowServerConfig from './components/ShowServerConfig';
import Carrito from './components/Carrito';

const App = () => {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div className="App">
      <h2>Llamado de API</h2>
      <h3>Ejercicio 1</h3>
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <ul>
          {data && data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
      <hr />
      <h2>Contador con Excepción</h2>
      <h3>Ejercicio 2</h3>
      <ErrorBoundary fallback={<div>¡Error! El contador llegó a 3</div>}>
        <Counter />
      </ErrorBoundary>

      <hr />
      <h2>Contador con Excepción con Lazy</h2>
      <h3>Ejercicio 3</h3>
      <ErrorBoundary fallback={<div>¡Error! El contador llegó a 3</div>}>
        <CounterWithLazy />
      </ErrorBoundary>

      <hr />
      <h2>ShowserverComponente</h2>
      <ShowServerConfig>
      <h3>Ejercicio 4</h3>
      </ShowServerConfig>

      <hr />
      <h2>Carrito de compras</h2>
      <h3>Ejercicio 5</h3>
      <Carrito></Carrito>
    </div>
  );
};

export default App;
