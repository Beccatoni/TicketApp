

function Card({title, price, image, description, backgr}){

    return(
        <>
        {/* <h1>Here is my card </h1> */}
        <div className="h-[25%] w-[55%] bg-amber-400 rounded-md p-3 flex flex-col justify-between"> 
            <p className="text-white font-bold font-Maamli">{title}</p>
            <img src={image} className=" w-full "  alt="" />
            <p>{price}</p>
            <p>{description}</p>
        </div>
        
        </>
    )
}

export default Card