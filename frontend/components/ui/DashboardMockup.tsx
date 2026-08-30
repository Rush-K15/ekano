export default function DashboardMockup() {
  return (
    <div className="mx-auto mt-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl sm:mt-16 sm:rounded-3xl">
      {/* Window Header */}
      <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-4 py-3 sm:px-6 sm:py-4">
        <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-500 sm:h-3 sm:w-3" />
        <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-yellow-500 sm:h-3 sm:w-3" />
        <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500 sm:h-3 sm:w-3" />

        <div className="ml-2 min-w-0 truncate rounded-lg bg-zinc-800 px-3 py-2 text-xs text-zinc-400 sm:ml-6 sm:px-4 sm:text-sm">
          https://ekano.vercel.app
        </div>
      </div>

      <div className="grid min-h-[420px] md:min-h-[500px] md:grid-cols-12">
        {/* Sidebar - hidden on mobile */}
        <aside className="hidden border-r border-zinc-800 bg-zinc-900 p-5 md:col-span-3 md:block lg:p-6">
          <h3 className="text-lg font-semibold text-white">EKANO</h3>

          <div className="mt-8 space-y-2 lg:space-y-3">
            {[
              "Dashboard",
              "Knowledge Base",
              "AI Chat",
              "Documents",
              "Settings",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg px-3 py-3 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white lg:px-4"
              >
                {item}
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="min-w-0 p-4 sm:p-6 md:col-span-9 lg:p-8">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-500 sm:px-5 sm:py-4">
            🔍 Search company knowledge...
          </div>

          <div className="mt-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 sm:mt-8 sm:p-6">
            <p className="text-sm font-semibold text-emerald-400">AI Answer</p>

            <p className="mt-3 text-sm leading-6 text-zinc-300 sm:mt-4 sm:text-base sm:leading-8">
              Employees are eligible for 24 days of annual leave. Unused leave
              can be carried forward for up to one financial year, subject to
              manager approval.
            </p>
          </div>

          <div className="mt-5 sm:mt-8">
            <p className="mb-3 text-sm font-semibold text-zinc-500 sm:mb-4">
              Sources
            </p>

            <div className="space-y-2 sm:space-y-3">
              {[
                "Employee Handbook.pdf",
                "HR Leave Policy.docx",
                "Benefits Guide.pdf",
              ].map((file) => (
                <div
                  key={file}
                  className="truncate rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-400 sm:px-5 sm:py-4"
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
