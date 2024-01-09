"use client"
import {useState} from "react";

const DemoLeft = ()=>{

    const [file, setFile] = useState(null)
    const [highLightDropZone, setHighlightDropZone] = useState(false)

    const preventDefaultHandler = (e)=>{
        e.preventDefault()
        e.stopPropagation()
    }
    const handleFileUpload = (event)=>{
        console.log("File")
        if (!event.dataTransfer.files || event.dataTransfer.files === 0) {
            return; // User canceled file selection
        }
        const files = Array.from(event.dataTransfer.files);
        // But We Will Only Use One File
        setFile(files[0])
    }


    return (
        <>
            <div className={"text-center mt-4 ml-2 mr-2 flex flex-col justify-center items-center gap-6"}>
                <div className="flex items-center justify-center w-full"
                     onDragOver={(e) => {
                         preventDefaultHandler(e);
                         setHighlightDropZone(true);
                     }}
                     onDragEnter={(e) => {
                         preventDefaultHandler(e);
                         setHighlightDropZone(true);
                     }}
                     onDragLeave={(e) => {
                         preventDefaultHandler(e);
                         setHighlightDropZone(false);
                     }}
                     onDrop={(e) => {
                         preventDefaultHandler(e);
                         handleFileUpload(e)
                         setHighlightDropZone(false);
                     }}>
                    <label htmlFor="dropzone-file"
                           className={`flex flex-col items-center justify-center w-full h-64 border-2 ${highLightDropZone ? "border-blue": "border-gray-300"} border-dashed rounded-lg cursor-pointer bg-gray-50`}>
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG (MAX.
                                224x224px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden"/>
                    </label>
                </div>
            </div>
        </>
    )
}

export default DemoLeft