import { useAuth } from '../Contextos/AuthContext';

function App() {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } = useAuth();

  if (isLoading) return <p>Cargando...</p>;

  return (
    <div className="p-6">
      {!isAuthenticated ? (
        <button
          onClick={() => loginWithRedirect()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Iniciar sesión
        </button>
      ) : (
        <div>
          <h1 className="text-xl">Bienvenido {user.name}</h1>
          <img className="w-12 h-12 rounded-full" src={user.picture} alt="Foto del usuario" />
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
