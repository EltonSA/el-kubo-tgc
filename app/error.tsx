"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-4 bg-[#0a1e26] text-white text-center">
      <h1 className="text-xl font-bold mb-2">Algo deu errado</h1>
      <p className="text-white/80 text-sm mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="px-6 py-3 rounded-xl bg-[#FDD835] text-[#0F4C5C] font-semibold hover:opacity-90"
      >
        Tentar novamente
      </button>
    </div>
  );
}
