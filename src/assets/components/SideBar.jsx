export default function SideBar(props) {

    const {handleToggleModal} = props;
    return (
        <>
            <div className="sidebar">
                <div className="bgOverlay" onClick={handleToggleModal} ></div>
                <div className="sidebarContents">
                    <h2>Picture of the red planet, the planet for the King Elon.</h2>
                    <div className="descriptionContainer">
                        <h3 className="descriptionTitle">Date</h3>
                        <p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum laudantium reiciendis cumque id, at molestiae iure non fugit earum perferendis minus, magni praesentium ullam provident, rem pariatur suscipit ut animi?
                            Minima tempore alias corrupti. Cupiditate, dolorem! Deleniti atque consequuntur cum quis exercitationem corrupti similique asperiores, hic at dolorem dolorum voluptate praesentium officiis ut placeat quasi odit minima quae fuga. Minima.
                            Fuga dolores voluptatum nisi quia, a dolor deleniti dignissimos quam illum harum omnis cum pariatur rem corrupti? Illo nostrum vel, id odio ipsa optio distinctio minus animi similique ipsam dicta?
                            Reprehenderit, aliquid. Excepturi quisquam inventore expedita ipsa, praesentium sit temporibus architecto, ratione illum repellat totam cupiditate veniam at, laboriosam tenetur laborum minima! Ducimus incidunt accusantium quam, obcaecati inventore quos consequuntur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aut pariatur tenetur iure magni, mollitia quidem sed incidunt totam beatae, eum voluptate voluptatum eligendi excepturi quos, quisquam recusandae maxime nesciunt!!
                        </p>
                    </div>
                    <button onClick={handleToggleModal}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </>
    )
}