export const ShimmerUi = () => {
    return (
        <div className="cardContainer">
          {Array(20).fill("").map((item)=>{
            return <div className="simmer"></div>
          })}
        </div>
        
      
    )
  }