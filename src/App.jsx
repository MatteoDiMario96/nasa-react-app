import { useEffect, useState } from "react";
import Footer from "./assets/components/Footer";
import Main from "./assets/components/Main";
import SideBar from "./assets/components/SideBar";
import DateSideBar from "./assets/components/DateSideBar";


function App() {

  const timeElapsed = Date.now();
  const today = new Date();

  function formatDate(date, format) {
    const formatMap = {
      mm: (date.getMonth() + 1).toString(), 
      dd: date.getDate().toString(),       
      yyyy: date.getFullYear()                              
    };
  
    // Sostituzione basata sul formato
    return format.replace(/mm|dd|yyyy/gi, matched => formatMap[matched]);
  }

  console.log(formatDate(today, 'yyyy-mm-dd'));

  const [dateData, setDateData] = useState([]);

  const [data, setData] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const [showModalDate, setShowModalDate] = useState(false);


  function handleToggleModal() {
    setShowModal(!showModal)
    console.log('Changed Modal')
  }

  function handleToggleModalDate() {
    setShowModalDate(!showModalDate)
    console.log('Changed Modal Date')
  }
  function getLastElement(array) {
    return Array.isArray(array) && array.length
      ? array[array.length - 1]
      : null;
  }


  useEffect(() => {
    async function fetchApiData() {
      const url = "https://api.nasa.gov/planetary/apod";
      const API_KEY = import.meta.env.VITE_API_KEY_NASA;
      const urlApiKey = `${url}?start_date=2024-09-16&api_key=${API_KEY}`
      console.log(API_KEY);
      try {
        const response = await fetch(urlApiKey);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`)
        }

        const json = await response.json();
        const lastInJson = getLastElement(json)
        setData(lastInJson);
        console.log("Data:\n", lastInJson);

      }
      catch (error) {
        console.error(error.message);
      }
    }
    fetchApiData();
  }, [])

  useEffect(() => {
    async function fetchApiData() {
      const url = "https://api.nasa.gov/planetary/apod";
      const API_KEY = import.meta.env.VITE_API_KEY_NASA;
      const urlApiKey = `${url}?start_date=2024-09-16&api_key=${API_KEY}`
      console.log(API_KEY);
      try {
        const response = await fetch(urlApiKey);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`)
        }

        const json = await response.json();
        setDateData(json);
        console.log("Data:\n", json);

      }
      catch (error) {
        console.error(error.message);
      }
    }
    fetchApiData();
  }, [])


  return (
    <>
      {data ? (<Main data={data} />) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}

      {showModalDate && (
        <DateSideBar dateData={dateData} handleToggleModalDate={handleToggleModalDate} />)}
      {data &&
        (<Footer data={data} showModal={showModal} handleToggleModal={handleToggleModal} handleToggleModalDate={handleToggleModalDate} />)}
    </>
  )
}

export default App
