export default function Footer(props) {

    const {handleToggleModal} = props;
    return (
        <>
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>NASA APOD REACT PROJECT</h1>
                <h2>The landing of the red planet, come to NASA for visit it. </h2>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
        </>
    )
}