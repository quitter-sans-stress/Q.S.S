import { getProviders, signIn } from "next-auth/react";

export default function Login({ providers }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Connexion sécurisée</h2>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              onClick={() => signIn(provider.id)}
              className="bg-blue-600 text-white px-6 py-2 rounded-xl"
            >
              Se connecter avec {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
