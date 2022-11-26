const banners = ({title, description, img}) =>

{
    return (
        <div>
            <img src = {img} alt = {title} />
            <h2>{title}</h2>
            <div>{description}</div>
        </div>
    )
}
export default banners