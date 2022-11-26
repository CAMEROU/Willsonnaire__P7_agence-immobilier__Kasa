/*function Banner() {
    return <h1>La maison jungle</h1>
}

export default Banner*/

//import Banner from './Banner';
const Banner = ({banners}) => {
    return (
        <div> <h1>Nos annonces immobilieres</h1>
        {
            banners.map((banners, index) => {
                return (
                    <Banner
                    key={index}
                    title={banners.title}
                    description={banners.description}
                    img={banners.cover}
                    />
                )
            })
        }  </div>
    )
}

export default Banner;