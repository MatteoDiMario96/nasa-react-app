export default function DateSideBar(props) {

    const { data, dateData, handleToggleModalDate, onDateClick } = props;

    const reversedDateData = dateData.slice().reverse();
    return (
        <>
            <div className="sidebar date-sidebar">
            <div className="bgOverlay" onClick={handleToggleModalDate} ></div>
                <div className="div-buttonDate">
                    <h3>
                        Change the date and see the picture
                    </h3>
                    <h3>
                        You can change from {'today'.toUpperCase()} to 2024-01-01
                    </h3>

                    {reversedDateData.map((item, index) => (
                        <button className={`button-dateSidebar ${item.date === data.date ? 'active' : ''}`} key={index}
                        onClick={() => onDateClick(item)}
                        >{item.date}</button>
                    ))}
                </div>
                <div className="div-returnSidebar">
                    <button className="button-sidebar button-returnSidebar" onClick={handleToggleModalDate}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>

        </>
    )
}