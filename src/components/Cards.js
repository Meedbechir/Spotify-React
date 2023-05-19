  import React from "react";
  import image15 from '../Images/image15.png'
  import image16 from '../Images/image16.png'
  import image17 from '../Images/image17.png'
  import image18 from '../Images/image18.png'
  import image19 from '../Images/image19.png'
  import image20 from '../Images/image20.png'
  import image21 from '../Images/image21.png'
  import image22 from '../Images/image22.png'
  import image23 from '../Images/image23.png'
  import image24 from '../Images/image24.png'


  const Cards = () => {
    const cards = [
      {
        img: image15,
        titre: "Instrumental study",
        paragraphe: "Uptempo instrumental hip hopbeats the background.",
      },
      {
        img: image16,
        titre: "Instrumental study",
        paragraphe: "Uptempo instrumental hip hopbeats the background.",
      },
      {
        img: image17,
        titre: "Instrumental study",
        paragraphe: "Uptempo instrumental hip hopbeats the background.",
      },
      {
        img: image18,
        titre: "Instrumental study",
        paragraphe: "Uptempo instrumental hip hopbeats the background.",
      },
      {
        img: image19,
        titre: "Instrumental study",
        paragraphe: "Uptempo instrumental hip hopbeats the background.",
      },
      {
        img: image20,
        titre: "Chill Hits",
        paragraphe:  "The biggest songs of the 2010s Gucci Mane Dababy hottest 50.",
      },
      {
        img: image21,
        titre: "Chill Hits",
        paragraphe:  "The biggest songs of the 2010s Gucci Mane Dababy hottest 50.",
      },
      {
        img: image22,
        titre: "Chill Hits",
        paragraphe: "The biggest songs of the 2010s Gucci Mane Dababy hottest 50.",
      },
      {
        img: image23,
        titre: "Chill Hits",
        paragraphe:  "The biggest songs of the 2010s Gucci Mane Dababy hottest 50.",
      },
      {
        img: image24,
        titre: "Chill Hits",
        paragraphe:  "The biggest songs of the 2010s Gucci Mane Dababy hottest 50.",
      },
    ];
    return (
      <div className="container py-3">
          <h3 className="text-white my-4">Focus</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5">
          {cards.map((card, index) => (
            <div className="col mb-4" key={index}>
              <div className="card bg-dark">
                <img src={card.img} className="card-img-top img-fluid" alt="Img" />
                <div className="card-body">
                  <h5 className="card-title text-white">{card.titre}</h5>
                  <p className="card-text text-white mt-3">{card.paragraphe}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Cards;
