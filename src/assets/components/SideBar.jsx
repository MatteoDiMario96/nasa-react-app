export default function SideBar(props) {

    const { handleToggleModal, data } = props;
    return (
        <>
            <div className="sidebar">
                <div className="bgOverlay" onClick={handleToggleModal} ></div>
                <div className="sidebarContents">
                    <div>
                        <h2>{data.title}</h2>
                        <div className="descriptionContainer">
                            <h3 className="descriptionTitle">
                                {data.date}
                            </h3>
                            <p >
                                {data.explanation}
                            </p>
                        </div>
                    </div>
                    <div className="div-button">
                        <button className="button-sidebar" onClick={handleToggleModal}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}