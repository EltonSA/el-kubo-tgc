import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-elkubo-yellow">
      <div className="flex flex-col items-center justify-center animate-pulse">
        <Image
          src="/logo.png"
          alt="EL-KUBO TCG"
          width={280}
          height={180}
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}
