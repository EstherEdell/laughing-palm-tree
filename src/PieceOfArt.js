const PieceOfArt = (props) => {
    return(
        <>
            <img src={props.art.webImage.url} alt={props.title}/>
            <h2>{props.art.title}</h2>
            <h3>{props.art.principalOrFirstMaker}</h3>
        </>
    )
}

export default PieceOfArt;