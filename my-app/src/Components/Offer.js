const Offer = ({title, description, img})=> {
    return (
        <div>
       <div>{title} </div>
       <div>{description} </div> 
       <img src = {img} alt = {title} />
       </div>
    )
}
export default Offer