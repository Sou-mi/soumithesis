import DemoLeft from "@/components/Demo/DemoLeft";
const DemoMain = ()=>{
    return (
        <div className={"bg-blue min-h-136 grid grid-cols-3"}>
            <div className={"grid-start-1 bg-sky border-r-blue border-r-2"}>
                <DemoLeft/>
            </div>
            <div className={"grid-start-2 col-span-2 bg-sky"}></div>
        </div>
    )
}

export default DemoMain