import PromptCategoryCard from "@/components/PromptCategoryCard";
import Welcomer from "@/components/Welcomer";

export default function Home() {
  return (
    <div className="bg-black w-full h-screen">
      {/* Check if user has visited the website first time, if they have then
      display the welcomer
      <Welcomer /> */}
      <div className="flex w-full h-screen justify-center items-center gap-16">
        <PromptCategoryCard>Marking - for Access to HE</PromptCategoryCard>
        <PromptCategoryCard>Marking - for BTEC</PromptCategoryCard>
      </div>
    </div>
  );
}
