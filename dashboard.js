import { getSession, signOut } from "next-auth/react";

export default function Dashboard({ user }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Bienvenue, {user.email}</h1>
      <p className="mt-4 text-gray-600">Ceci est votre espace personnel sécurisé.</p>
      <button
        onClick={() => signOut()}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded-xl"
      >
        Se déconnecter
      </button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: { user: session.user },
  };
}
