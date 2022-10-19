import TableHead from "./tablehead"
import TableRow from "./tablerow"

// this component renders the table
const Table = ({data}) => {

    return(
        <div className="overflow-x-auto
        shadow-md sm:rounded-lg  "
        id="table" >
            
        <table className="table-fixed w-full text-sm text-left
       " 
         >
            <TableHead />
            
            
            <tbody>
                <TableRow data={data} />
            </tbody>
            
        </table>
        </div>
    );
}

export default Table;