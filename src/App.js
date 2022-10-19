
import Table from "./components/table"
import { useEffect, useState } from 'react';
import LoadingSpinner from "./components/loadingspinner";
import ModalForm from "./components/modalform";
import { useQuery, gql } from "@apollo/client";
import Header from './components/header';




const App = () => {

  

  const GET_DATA = gql `
       query getData {
        complaint {
          complaintId
          complaint
          source
          type
          company {
            name
          }
        }
       }
    `;

  const {data, error, loading } = useQuery(GET_DATA);
  

  // set initial theme as dark
  const [theme, setTheme] = 
    useState(localStorage.theme ? localStorage.theme : "dark");

  // store theme in localStorage
  localStorage.setItem("theme", theme);

  


  return(
    <div className={theme}>
    <div className="min-h-screen
     flex flex-column  flex-col
     "
    >
    <Header setTheme={setTheme} theme={theme} />
    <main className=" flex-grow  dark:bg-slate-700
     dark:text-white pt-4" >
      
      <ModalForm />
      
      

      <section id="maindata" className=" " >
      { data && <Table data={data.complaint} /> }

      { loading && <LoadingSpinner /> }

      { error && 
        <p>
          There was an error loading data
        </p>
      }
      <div className="hidden blur-sm blur-md blur " >
                    Blur Class Holder
            </div>
      </section>
    </main>

    </div>
    </div>
  )
}

export default App;

