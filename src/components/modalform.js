import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import CloseSVG from "./closesvg";

// Modal

const ModalForm = () => {


    const ADD_COMPLAINT = gql `

       mutation AddComplaint($complaint: string!, 
        $source: string!) {
            addComplaint(Complaint: $complaint,
                Source: $source) {
                    Complaint
                    Source
                }
        }
    `;

    const [addComplaint, { data, loading, error}] =  
       useMutation(ADD_COMPLAINT);


    
    /*
    // change button background color base on 
    // whether complaint was sent or not.
    const [bgColor, setBgColor] = 
       useState(error ? "bg-red-600" : "bg-green-600");

    const [disHide, setDisHide] = 
       useState(() => {
        if (data || error) {
            return "";
        }
        return "hiiden";
       })
    */
    
    /*
    // determine user device type in the background
    const userSource = () => {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return "tablet";
        }
        else if (/Mobile|android|iP(hone|od)|IEMobie|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return "mobile";
        }
        return "desktop";
    }
    */
    

    // set and retrieve user input fields
    const [ entry, setEntry ] = useState("enter complaint here");
    const [ source, setSource ] = useState("web");
    
    // handle form submission
    const handleSubmit = e => {
        e.preventDefault();
        addComplaint({variables: {Complaint: entry.trim(), Source: source ,}});
        
    }
    


    return(
        <section className=" relative" >

            {/* modal toggle button */}
            <button className="block text-white bg-blue-700
             hover:bg-blue-800 focus:ring-4 focus:outline-none
              focus:ring-blue-300 font-medium rounded-lg text-sm 
              px-5 py-2.5 text-center dark:bg-blue-600
               dark:hover:bg-blue-700 dark:focus:ring-blue-800 
               ml-4
               " 
               type="button" id="openmodal">

                Send a complaint
            </button>
            
            {/* modal content */}
            <div id="mymodal"
            className="hidden fixed p-4 z-10
             w-3/5 md:w-1/3 left-8 md:left-16 top-16
             md:top-16 bg-white rounded-lg 
             dark:bg-slate-500 space-y-6 backdrop-blur-none
             shadow-md shadow-gray-500
             dark:shadow-none 
             border border-slate-300 
             dark:border-none
             dark:shadow-gray-400
             dark:drop-shadow-lg
            "
             >
                
                
                <div className="flex justify-between" >
                    <h3 className="justify-self-center text-lg
                    font-medium "
                     >Enter complaint below </h3>
                    <button className="text-red-500 bg-transparent 
                    dark:text-red-500 
                    hover:bg-gray-200 hover:text-red-500 rounded-lg 
                    text-sm p-1.5 ml-auto inline-flex items-center
                     dark:hover:bg-gray-300 dark:hover:text-red-500
                     dark:bg-gray-400 
                      " 
                     id="closemodal">
                        <CloseSVG />
                     </button>
                </div>

                {/* Form */}
                <form action="#" 
                onSubmit={handleSubmit} 
                className="" >


                    <div className="mb-6" >
                        <label htmlFor="complaint"></label>
                        <input type="text" name="complaint" 
                        className="p-2 outline-none rounded-lg
                        outline-blue-500
                        dark:bg-gray-400
                        dark:textwhite
                        bg-gray-100 focus:outline-cyan-500 "
                        id="complaint" value={entry}
                        onChange={(e) => setEntry(e.target.value)} />
                    </div>

                    <div className="mb-6" >
                        <label htmlFor="source"> {"Source: "} </label>
                        <select value={source} id="source"
                        name="source" className="rounded-lg 
                        outline-none
                        dark:bg-gray-400
                        dark:textwhite
                        p-2 outline-blue-500 
                        focus:outline-cyan-500 "
                        onInput={e => setSource(e.target.value)}>
                            <option value="web">Web</option>
                            <option value="mobile">Mobile</option>
                        </select>
                    </div>

                    <div className=" gap-x-4" >
                    {/* Submit button */}
                    <button className="mx-auto px-4 
                    py-2 bg-blue-700 font-medium 
                    text-white rounded-lg " >
                        { loading ? "Sending..." : "Submit"}
                    </button>

                    {/*

                    <button className={
                        `${disHide} mx-auto px-4 py-2 ${bgColor} 
                        text-white rounded-lg ml-6`
                    } 
                    id="fadebutton"
                    >
                        {error && "error, not sent"}
                        {data && "sent"}
                    </button>
                     */}
                    </div>
                </form>
                
            </div>

        </section>
    )
}
export default ModalForm;