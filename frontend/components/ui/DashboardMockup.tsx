export default function DashboardMockup() {
  return (
    <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl">
      {/* Window Header */}
      <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-6 py-4">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />

        <div className="ml-6 rounded-lg bg-zinc-800 px-4 py-2 text-sm text-zinc-400">
          https://app.ekano.ai
        </div>
      </div>

      <div className="grid min-h-[500px] grid-cols-12">
        {/* Sidebar */}
        <aside className="col-span-3 border-r border-zinc-800 bg-zinc-900 p-6">
          <h3 className="text-lg font-semibold text-white">
            EKANO
          </h3>

          <div className="mt-8 space-y-3">
            {[
              "Dashboard",
              "Knowledge Base",
              "AI Chat",
              "Documents",
              "Settings",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg px-4 py-3 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="col-span-9 p-8">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-zinc-500">
            🔍 Search company knowledge...
          </div>

          <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">
            <p className="text-sm font-semibold text-emerald-400">
              AI Answer
            </p>

            <p className="mt-4 leading-8 text-zinc-300">
              Employees are eligible for 24 days of annual leave.
              Unused leave can be carried forward for up to one
              financial year, subject to manager approval.
            </p>
          </div>

          <div className="mt-8">
            <p className="mb-4 text-sm font-semibold text-zinc-500">
              Sources
            </p>

            <div className="space-y-3">
              {[
                "Employee Handbook.pdf",
                "HR Leave Policy.docx",
                "Benefits Guide.pdf",
              ].map((file) => (
                <div
                  key={file}
                  className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-zinc-400"
                >
                  📄 {file}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}