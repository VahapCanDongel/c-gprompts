import { useEffect, useState } from "react";

export default function Welcomer() {
  const [showComponent, setShowComponenet] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowComponenet(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="w-full h-screen text-white flex justify-center items-center z-50 inset-0 animate-bounce transition-all">
      {showComponent && (
        <div className="flex justify-center items-center transition-all">
          <div className="flex flex-col">
            <div className="text-[160px] font-extrabold text-transparent bg-clip-text bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700">
              Welcome!
            </div>
            <p className="w-[280px] m-5 text-[20px]">
              This is a Chat GPT prompt stock website. This webiste is currently
              mainly used to store prompts that can be beneficial for educators.
            </p>
          </div>

          <svg
            width="500"
            height="500"
            fill="none"
            stroke="#ffffff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.143 5.95C5.143 4.464 8 2.817 12 2.857c4 .04 6.857 1.776 6.857 3.26v11.765c0 1.485-2.857 3.26-6.857 3.26S5.143 19.2 5.143 17.715V5.95Z"
              clip-rule="evenodd"
            ></path>
            <path d="M5.143 12c0 1.578 2.286 3.429 6.857 3.429s6.857-1.871 6.857-3.45"></path>
            <path d="M5.143 6.286c0 1.578 2.286 3.428 6.857 3.428s6.857-1.87 6.857-3.448"></path>
          </svg>
        </div>
      )}
    </div>
  );
}
