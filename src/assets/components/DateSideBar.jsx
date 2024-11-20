export default function DateSideBar(props) {

    const { dateData, handleToggleModalDate } = props;
    return (
        <>
            <div className="sidebar date-sidebar">
            <div className="bgOverlay" onClick={handleToggleModalDate} ></div>
                <div className="div-buttonDate">
                    <h3>
                        Change the date and see the picture of the date
                    </h3>


                    {dateData.map((item, index) => (
                        <button className="button-dateSidebar" key={index}>{item.date}</button>
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