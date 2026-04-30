//export default function CardItem(props) {
export default function CardItem({ item }) {

    //const {src,series}= props
    //console.log(props)
    return (
        <>

            {<div className="col" >
                <div className="card h-20 w-5">
                    <img src={item.thumb} alt={item.series} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
                    <div className="card-body">
                        <h3 className="title">{item.series}</h3>
                    </div>
                </div>
            </div>}
        </>
    )
}