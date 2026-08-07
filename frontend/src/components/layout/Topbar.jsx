function Topbar() {
  return (
    <header className="glass mb-8 flex items-center justify-between rounded-2xl px-6 py-4">
      <div>
        <h2 className="text-2xl font-bold">
          Welcome Back 👋
        </h2>

        <p className="text-slate-400">
          Your AI DevOps Assistant is Ready
        </p>
      </div>

      <div className="text-right">
        <p className="text-xl font-semibold">
          {new Date().toLocaleTimeString()}
        </p>

        <p className="text-slate-400">
          {new Date().toDateString()}
        </p>
      </div>
    </header>
  );
}

export default Topbar;