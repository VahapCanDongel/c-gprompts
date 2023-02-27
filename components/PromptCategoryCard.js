export default function PromptCategoryCard(props) {
  return (
    <div class="relative group">
      <div class="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-indigo-700 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt w-[300px] h-[110px]"></div>
      <div class="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center justify-center divide-x divide-gray-600 w-[290px] h-[100px] text-white text-[15px]">
        {props.children}
      </div>
    </div>
  );
}
