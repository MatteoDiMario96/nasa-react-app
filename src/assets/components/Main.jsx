export default function Main(props){

    const {data} = props;
    return(
        <>
            <main className="imgContainer">
                <img src={data.url} alt={data.title}/>
            </main>
        </>
    )
}