export const ShimmerUi = () => {
    return (
        <div className="flex flex-wrap justify-evenly">
          {Array(20).fill("").map((item)=>{
            return <div className="border-2 border-solid w-60 h-80 mb-4 shadow-md color bg-stone-100"></div>
          })}
        </div>
        
      
    )
  }