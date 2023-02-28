export default function AddPrompt({setAddPromptVisibility}){
    


    return(
        <div className="w-[500px] h-[500px] bg-white">
            <div onClick={() => setAddPromptVisibility(false)}>close</div>
        </div>
    )
}