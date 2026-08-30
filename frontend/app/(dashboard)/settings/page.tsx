"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";

export default function SettingsPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div>
        <h1 className="text-2xl font-semibold text-white">Settings</h1>

        <p className="mt-2 text-sm text-zinc-400">
          Manage your account and Ekano session.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        {/* Account */}
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50">
          <div className="border-b border-zinc-800 px-5 py-4 sm:px-6">
            <h2 className="font-medium text-white">Account</h2>

            <p className="mt-1 text-sm text-zinc-500">
              Your account information.
            </p>
          </div>

          <div className="divide-y divide-zinc-800">
            <SettingRow label="Name" value={user?.name ?? "—"} />

            <SettingRow label="Email" value={user?.email ?? "—"} />

            <SettingRow label="Account type" value="Demo" />
          </div>
        </section>

        {/* Application */}
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50">
          <div className="border-b border-zinc-800 px-5 py-4 sm:px-6">
            <h2 className="font-medium text-white">Application</h2>

            <p className="mt-1 text-sm text-zinc-500">
              Information about your Ekano workspace.
            </p>
          </div>

          <div className="divide-y divide-zinc-800">
            <SettingRow label="Knowledge store" value="PostgreSQL + pgvector" />

            <SettingRow label="AI" value="Retrieval-Augmented Generation" />
          </div>
        </section>

        {/* Session */}
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 sm:p-6">
          <h2 className="font-medium text-white">Session</h2>

          <p className="mt-1 text-sm text-zinc-500">
            Sign out of your current Ekano session.
          </p>

          <button
            type="button"
            onClick={handleLogout}
            className="mt-5 rounded-xl border border-zinc-700 px-4 py-2.5 text-sm font-medium text-white transition hover:border-zinc-500 hover:bg-zinc-800"
          >
            Log out
          </button>
        </section>
      </div>
    </div>
  );
}

function SettingRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <span className="text-sm text-zinc-400">{label}</span>

      <span className="break-all text-sm font-medium text-zinc-200 sm:text-right">
        {value}
      </span>
    </div>
  );
}
