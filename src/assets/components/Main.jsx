import { useEffect, useState } from "react";

export default function Main(props) {

    const { data } = props;
    const [isImageLoading, setIsImageLoading] = useState(true);

    function handleImageLoad() {
        setIsImageLoading(false);
    }

    useEffect(() => {
        // Quando cambiano i dati, riattiva il loading per la nuova immagine
        setIsImageLoading(true);
    }, [data]);
    return (
        <>
            <main className="imgContainer">
                {isImageLoading && (
                    <div className="loadingState">
                        <i className="fa-solid fa-gear"></i>
                    </div>
                )
                }
                <img src={data.hdurl} alt={data.title} onLoad={handleImageLoad} // Quando l'immagine è caricata
                    style={{ display: isImageLoading ? "none" : "block" }} />
            </main>
        </>
    )
}