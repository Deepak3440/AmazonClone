import React from "react";
import Carousal from "./components/carousal";
import Categories from "../../common/categories";
import NavBar from "../../common/navbar";
import HomepageBody from "./components/homepageBody";

export const Homepage = () => {
    const images = [
        'https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Deals/GW/unrec/March/DEALS_HERO-2X._CB579826609_.jp',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/augatf23/hsbcunrec/WA_ETH_2x._CB580708889_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/Biss_2023/BISS_GW/GWNEW/GWNEW2/GW_PC_1500x600._CB572878474_.jpg',
       
    ];

    return (
        <>
            <NavBar />
            <Categories />
            {/* Pass the images array to the Carousal component */}
            <Carousal images={images} />
            <HomepageBody />
        </>
    );
};

export default Homepage;
