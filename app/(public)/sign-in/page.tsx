export default function SignIn() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="w-full max-w-sm bg-btn-text px-6 py-12 rounded-2xl shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-4">Login</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-xl font-medium t-h1 mb-2">E-mail</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-xl font-medium t-h1 mb-2">Senha</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <button type="submit" className="w-full bg-btn-primary hover:bg-btn-hover p-2 rounded-md text-btn-text mt-4 cursor-pointer">
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}