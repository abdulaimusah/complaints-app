


const TableRow = ({data}) => {



    return(
        <>
        { data.length > 0 && data.map(item => (
            <tr key={item.complaintId} className="bg-white 
            border-b dark:bg-gray-900
            dark:border-gray-700" >
                <th scope="row" className="py-4 
                px-6 font-medium text-gray-900
                whitespace-nowrap dark:text-white 
                break-words "
                 >{item.complaintId}</th>
                <td className="py-4 px-6 break-words">
                    {item.complaint}</td>
                <td className="py-4 px-6 break-words">
                    {item.company.name}</td>
                <td className="py-4 px-6 break-words">
                    {item.source}</td>
                <td className="py-4 px-6 break-words">
                    {item.type}</td>
            </tr>
        ))}
        </>
    )
}

export default TableRow;