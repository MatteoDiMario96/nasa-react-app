export default function Footer(props) {

    const { handleToggleModal, handleToggleModalDate, data } = props;
    return (
        <>
            <footer>
                <div className="bgGradient"></div>
                <div>
                    <h1>NASA APOD REACT PROJECT</h1>
                    <h2>{data.title.toUpperCase()}</h2>
                </div>
                <div className="footer-button">
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-circle-info"></i>
                </button>
                <button onClick={handleToggleModalDate}>
                    <i class="fa-solid fa-calendar-days"></i>
                </button>
                </div>
            </footer>
        </>
    )
}