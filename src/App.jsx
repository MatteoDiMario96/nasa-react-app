import { useEffect, useState } from "react";
import Footer from "./assets/components/Footer";
import Main from "./assets/components/Main";
import SideBar from "./assets/components/SideBar";
import DateSideBar from "./assets/components/DateSideBar";


function App() {

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

  function handleDateChange(selectedDate) {
    setData(selectedDate); 
    localStorage.setItem('lastViewedKey', JSON.stringify(selectedDate));
    console.log(`Date changed: ${selectedDate.date}`)
    console.log(selectedDate);
  }
  




  useEffect(() => {
    async function fetchApiData() {
      const url = "https://api.nasa.gov/planetary/apod";
      const API_KEY = import.meta.env.VITE_API_KEY_NASA;
      const urlApiKey = `${url}?start_date=2024-09-16&api_key=${API_KEY}`
      const todayStringed = (new Date()).toDateString()
      const localKey = `NASA-DATE-OBJ`
      if(localStorage.getItem('lastViewedKey') && JSON.parse(localStorage.getItem(localKey))){
        const apiDatalast = JSON.parse(localStorage.getItem('lastViewedKey'))
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setDateData(apiData);
        setData(apiDatalast);
        console.log('Fetched last view from cache today yesss')
        return
      }
      else if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        const lastInJson = getLastElement(apiData)
        setDateData(apiData);
        setData(lastInJson);
        console.log('Fetched from cache today yesss')
        return
      }
      localStorage.clear()
      try {
        const response = await fetch(urlApiKey);
        const apiData = await response.json();
        localStorage.setItem(localKey, JSON.stringify(apiData))
        console.log('Fetched from API today')

        const lastInJson = getLastElement(apiData)
        setDateData(apiData);
        setData(lastInJson);
        localStorage.setItem('lastViewedKey', JSON.stringify(lastInJson));
        console.log("Data:\n", lastInJson);

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
        <DateSideBar  onDateClick={handleDateChange} data={data} dateData={dateData} handleToggleModalDate={handleToggleModalDate} />)}
      {data &&
        (<Footer data={data} showModal={showModal} handleToggleModal={handleToggleModal} handleToggleModalDate={handleToggleModalDate} />)}
    </>
  )
}

export default App
