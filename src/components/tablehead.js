


const TableHead = () => {

    return(
        <thead className="text-xs text-gray-700 
        uppercase bg-gray-50 dark:bg-gray-700
        dark:text-gray-400" >
            <tr  >
                <th scope="col" className="py-3 px-6" >Complaint Id</th>
                <th scope="col" className="py-3 px-6" >Complaint</th>
                <th scope="col" className="py-3 px-6" >Company Name</th>
                <th scope="col" className="py-3 px-6" >Source</th>
                <th scope="col" className="py-3 px-6" >Type</th>
            </tr>
        </thead>
    )
}

export default TableHead;