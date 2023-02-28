import AddPrompt from "@/components/AddPrompt";
import PromptCategoryCard from "@/components/PromptCategoryCard";
import Welcomer from "@/components/Welcomer";
import { useState } from "react";

export default function Home() {
  const [addPromptVisibility, setAddPromptVisibility] = useState(false)

  return (
    <div className="bg-black w-full h-screen">
      {/* Check if user has visited the website first time, if they have then
      display the welcomer
      <Welcomer /> */}
      <div className="flex w-full h-screen justify-center items-center gap-16">
        <PromptCategoryCard onClick={() => setAddPromptVisibility(true)}>Marking - for Access to HE</PromptCategoryCard>
        <PromptCategoryCard>Marking - for BTEC</PromptCategoryCard>
      </div>
      
      {addPromptVisibility &&
        <AddPrompt setAddPromptVisibility={setAddPromptVisibility} />
      }

      

    </div>
  );
}
