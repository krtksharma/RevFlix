import React, { useEffect, useState } from 'react';
import axios from "axios";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css';
import { img_300, noPicture} from "../../config/config";

const handleDragStart = (e) => e.preventDefault();



const Carousel = ({media_type,id}) => {
    const [credits, setCredits] = useState([])

    const fetchCredits = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${"edc0572366c6ae0683fdcf653297f19d"}&language=en-US`
        );
        setCredits(data.cast);
      };
    
      useEffect(() => {
        fetchCredits();
        // eslint-disable-next-line
      }, []);
      const responsive = {
        0: {
          items: 3,
        },
        512: {
          items: 5,
        },
        1024: {
          items: 7,
        },
      };

      const items = credits.map((c) => (
        <div className="carouselItem">
          <img
            src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
            alt={c?.name}
            onDragStart={handleDragStart}
            className="carouselItem__img"
          />
          <b className="carouselItem__txt">{c?.name}</b>
        </div>
      ));

  return (
    <AliceCarousel responsive={responsive} mouseTracking items={items} disableButtonsControls disableDotsControls autoPlay infinite/>
  );
}
export default Carousel;