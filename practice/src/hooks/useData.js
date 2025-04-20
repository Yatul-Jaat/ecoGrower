import { useState } from "react"
import { Await } from "react-router-dom";

const useData=()=>{
    const[cropdata,setCropdata]=useState();

    const useCropdata=async(inputdata)=>{
        try {
            const res = await fetch(`https://openfarm.cc/api/v1/crops/${inputdata}`);
            const data=await res.json()
    
            if (data.error) {
                throw new Error(data.error);
            }
            setCropdata(data.data.attributes)
    
        } catch (error) {
            console.log(error)
        }
    }
    console.log(cropdata)

    return {useCropdata,cropdata};
}

export default useData