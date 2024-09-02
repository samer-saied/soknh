import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#072b45]">

      <div className=" mb-4 relative">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#] animate-pulse"
          src="/IMG_62362.png"
          alt="soknh Logo"
          width={180}
          height={37}
           style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>

      <div className="mb-32 text-center w-full text-white rounded-lg border border-transparent hover:border-neutral-700 hover:bg-neutral-800/30">
        <a
          href="mailto:sales@soknh.com"
          className="group px-5 py-4 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold opacity-70">Coming Soon ...</h2>
          <p className="m-0 text-sm opacity-50 w-full flex flex-row justify-center items-center">
            contact us : sales@soknh.com
          </p>
        </a>
      </div>
    </main>
  );
}
