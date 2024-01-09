import arrowImage from "../../public/chevron.svg"
import Image from "next/image";
const HeaderComponent = ()=>{
    return (
        <div className={"h-20 pl-12 pr-12 bg-white flex items-center font-sm text-2xl"}>
            <div className={"flex items-center"}>
                <p>Deep AI</p>
                <Image src={arrowImage} alt={"Arrow Image"}/>
            </div>
            <div>Deep Computer Vision</div>
        </div>
    )
}

export default HeaderComponent