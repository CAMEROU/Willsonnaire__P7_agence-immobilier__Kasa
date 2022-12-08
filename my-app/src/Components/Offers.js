import { useState } from "react";
import Offer from './Offer';

const Offers = ({offers}) => {
    console.log( offers)
    const [isFlex, setIsFlex] = useState(false);

   return (
    <div>
        <h1>Nos annonces immobillières</h1>
        <div onClick={() => setIsFlex(!isFlex)} style={{display: isFlex ? 'flex' : 'block' }} >
            {
                offers.map((offer, index) => {
                    return (
                      <Offer
                      key={index}
                      title={offer?.title}
                      description={offer?.description}
                      img={offer?.cover}
                     />
                 )
             })
            }
       </div>
    </div>
   ) 
 }

   export default Offers ;











        