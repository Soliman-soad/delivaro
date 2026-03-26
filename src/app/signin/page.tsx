import { Caravan } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="mb-6 text-center">
        <Link href="/home" className="inline-flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-[#0e9de8] flex items-center justify-center">
            <Caravan color="white" />
          </div>
          <span className="font-bold text-xl text-gray-900">Delivra</span>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-5">Welcome back</h1>
        <p className="text-sm text-gray-500 mt-1">
          The fastest way to manage your e-commerce logistics and last-mile
          delivery.
        </p>
      </div>

      <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Sign in</h2>
        <p className="text-sm text-gray-400 mb-6">
          Enter your credentials to access your Delivra dashboard.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <div className="relative">
              <input
                type="email"
                defaultValue="merchant@Delivra.com"
                className="w-full text-sm border border-gray-200 rounded-lg pl-9 pr-4 py-2.5 outline-none focus:border-[#0e9de8] focus:ring-1 focus:ring-[#0e9de8]/20 transition-all"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                ✉️
              </span>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <a
                href="#"
                className="text-sm text-[#0e9de8] hover:underline font-medium"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <input
                type="password"
                defaultValue="password"
                className="w-full text-sm border border-gray-200 rounded-lg pl-9 pr-10 py-2.5 outline-none focus:border-[#0e9de8] focus:ring-1 focus:ring-[#0e9de8]/20 transition-all"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                🔒
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              className="rounded accent-[#0e9de8]"
            />
            <label htmlFor="remember" className="text-sm text-gray-600">
              Keep me signed in for 30 days
            </label>
          </div>
          <Link
            href="/dashboard"
            className="block w-full bg-[#0e9de8] text-white text-sm font-semibold text-center py-3 rounded-xl hover:bg-[#027dc6] transition-colors"
          >
            Sign In →
          </Link>
        </form>

        <p className="text-sm text-gray-500 text-center mt-5">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-[#0e9de8] font-semibold hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>

      <div className="flex items-center gap-8 mt-6 text-xs text-gray-400">
        <span className="flex items-center gap-1">🛡️ ENTERPRISE SECURE</span>
        <span className="flex items-center gap-1">🔒 SLA GUARANTEED</span>
      </div>
      <div className="flex gap-4 mt-4 text-xs text-gray-400">
        {["Privacy Policy", "Terms of Service", "Need help?"].map((l) => (
          <a key={l} href="#" className="hover:text-gray-600">
            {l}
          </a>
        ))}
      </div>
    </div>
  );
}
