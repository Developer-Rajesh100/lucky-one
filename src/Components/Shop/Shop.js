import React from "react";
import PlayersCart from "../../Players-Cart/Players-Cart";
import "./Shop.css";
const Shop = () => {
  const PlayerData = [
    {
      id: 1,
      name: "Antoine Griezmann",
      photo:
        "https://i.pinimg.com/474x/42/f0/b6/42f0b623ec52a2c254b3ab6e8f395821.jpg",
      price: 50000,
    },
    {
      id: 2,
      name: "Cristiano Ronaldo",
      photo:
        "https://imageio.forbes.com/specials-images/imageserve/b994eef0529742a39ebbb68930f08c49/960x0.jpg?fit=bounds&format=jpg&width=960",
      price: 305000,
    },
    {
      id: 3,
      name: "Eden Hazard",
      photo:
        "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg3NTk0NDA2MzQ0MjcxNzU5/imago1009904532h.jpg",
      price: 55000,
    },
    {
      id: 4,
      name: "James Rodríguez",
      photo:
        "https://www.goodisonnews.com/static/uploads/6/2021/09/James-Rodriguez-21200x824-1-1140x783.jpg",
      price: 65000,
    },
    {
      id: 5,
      name: "Kevin De Bruyne",
      photo:
        "https://e0.365dm.com/21/09/2048x1152/skysports-kevin-de-bruyne-man_5506851.jpg",
      price: 77000,
    },
    {
      id: 6,
      name: "Kylian Mbappé",
      photo:
        "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_500,c_limit/133cd25e-4e18-4190-8cba-07be635fba16/play-like-kylian-mbappe.jpg",
      price: 285000,
    },
    {
      id: 7,
      name: "Lionel Messi",
      photo:
        "https://c.ndtvimg.com/2021-08/k6728h88_messi-afp_625x300_06_August_21.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
      price: 101000,
    },
    {
      id: 8,
      name: "Luis Suárez",
      photo:
        "https://www.fcbarcelona.com/photo-resources/2019/05/01/d4efdc0b-d457-46c4-9768-442e3c75bbf0/photo5931742714070675417.jpg?width=800&height=500",
      price: 74000,
    },
    {
      id: 9,
      name: "Luka Modric",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/e/e9/ISL-HRV_%287%29.jpg",
      price: 39000,
    },
    {
      id: 10,
      name: "Mohamed Salah",
      photo:
        "https://e0.365dm.com/22/01/1600x900/skysports-mohamed-salah-liverpool_5638215.jpg?20220111105345",
      price: 54000,
    },
    {
      id: 11,
      name: "Neyner",
      photo:
        "https://extratimetalk.com/wp-content/uploads/2021/06/gettyimages-1324132723-594x594-1.jpg",
      price: 309000,
    },
    {
      id: 12,
      name: "Paul Pogba",
      photo:
        "https://i2-prod.manchestereveningnews.co.uk/sport/football/transfer-news/article22014629.ece/ALTERNATES/s1200c/0_GettyImages-1235954391.jpg",
      price: 45000,
    },
    {
      id: 13,
      name: "Philippe Coutinho",
      photo:
        "https://cdn.footballtransfertavern.com/wp-content/uploads/2022/02/2022-02-13T144507Z_243410746_UP1EI2D14Z54N_RTRMADP_3_SOCCER-ENGLAND-NEW-AVA-REPORT.jpg",
      price: 98000,
    },
    {
      id: 14,
      name: "Raphaël Varane",
      photo:
        "https://static.independent.co.uk/2021/09/28/16/acccdfa69d242950cda4a7dc54b72551Y29udGVudHNlYXJjaGFwaSwxNjMyOTI2ODc4-2-1.62345832?quality=75&width=982&height=726&auto=webp",
      price: 75000,
    },
    {
      id: 15,
      name: "Sergio Ramos",
      photo:
        "https://i.pinimg.com/236x/22/d6/3b/22d63b554c82911e2fb4fc50b49aea75--mens-hair-real-madrid.jpg",
      price: 26000,
    },
    {
      id: 16,
      name: "Thibaut Courtois",
      photo:
        "https://pbs.twimg.com/media/FJQAH0CXIAIJ5hj?format=jpg&name=4096x4096",
      price: 56000,
    },
  ];
  const AddedToCart = (player) => {
    console.log(player);
  };
  return (
    <div className="shop-container">
      <div className="players-container">
        {PlayerData.map((player) => (
          <PlayersCart
            player={player}
            key={player.id}
            addToCart={AddedToCart}
          ></PlayersCart>
        ))}
      </div>
      <div className="cart-container">
        <h2>Selected Players</h2>
        <button className="choose-1-player-buttun">
          <h4>Choose 1 For Me</h4>
        </button>
        <button className="choose-again-buttun">
          <h4>Choose Again</h4>
        </button>
      </div>
    </div>
  );
};

export default Shop;
