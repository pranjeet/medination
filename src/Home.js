import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://www.pixelstalk.net/wp-content/uploads/images1/Medical-Wallpapers-HD-Free-download.jpg"
                alt="" 
            />
            {/* Product id,title,price,rating,image */}
            <div className="home__row">
                <Product 
                id="1"
                title="Dettol Antiseptic Liquid Bottle Of 550 Ml"
                price={160.80}
                rating={5}
                image="https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-2-1600447088.jpg?dim=240x0&dpr=1&q=80" 
                />

                <Product 
                id="2"
                title="Liveasy Essentials Instant Hand Sanitizer-kills 99.9% Germs-72.34% Iso Propyl Alcohol - Gel Based - 200ml"
                price={92}
                rating={4}
                image="https://cdn01.pharmeasy.in/dam/products_otc/G99739/liveasy-essentials-instant-hand-sanitizer-kills-999-germs-7234-iso-propyl-alcohol-gel-based-200ml-2-1598591213.jpg?dim=240x0&dpr=1&q=80" 
                />

                <Product 
                id="3"
                title="B-Protin Nutritional Powder Supplement - Chocolate 500 gm"
                price={470}
                rating={4}
                image="https://www.netmeds.com/images/product-v1/150x150/38061/b_protin_nutritional_powder_supplement_chocolate_500_gm_0.jpg" 
                />
            </div>

            <div className="home__row">
                <Product 
                id="4"
                title="Acnelak Soap 75gm
                Acne
                ALOE VERA,TEA TREE OIL,TRICLOSAN,ZINC"
                price={89}
                rating={5}
                image="https://www.netmeds.com/images/product-v1/150x150/358348/acnelak_soap_75gm_0.jpg" 
                />

                <Product 
                id="5"
                title="POLYMOL DS 250mg Oral Suspension 60ml
                Fever
                PARACETAMOL(ACETAMINOPHEN) 250 mg"
                price={39.64}
                rating={5}
                image="https://www.netmeds.com/images/product-v1/150x150/895865/polymol_ds_250mg_oral_suspension_60ml_0_2.jpg" 
                />

                <Product 
                id="6"
                title="4 QUIN BROM Eye Drops 5ml"
                price={146}
                rating={4}
                image="https://www.netmeds.com/images/product-v1/150x150/886490/4_quin_brom_eye_drops_5ml_0_0.jpg" 
                />
            </div>
            
            <div className="home__row">
                <Product 
                id="7"
                title="Natures Velvet Vitamin C 1000 mg Tablets 60's"
                price={1500}
                rating={5}
                image="https://www.netmeds.com/images/product-v1/150x150/828422/natures_velvet_vitamin_c_1000_mg_tablets_60_s_0.jpg" 
                />

                <Product 
                id="8"
                title="Canyearn Medical Infrared Thermometer"
                price={4205}
                rating={5}
                image= "https://www.netmeds.com/images/product-v1/150x150/908302/canyearn_medical_infrared_thermometer_0_0.jpg" 
                />

                <Product 
                id="8"
                title="Wildcraft Hypashield W95 Reusable Outdoor Protection Face Mask - Large"
                price={170}
                rating={5}
                image= "https://www.netmeds.com/images/product-v1/150x150/909963/wildcraft_hypashield_w95_reusable_outdoor_protection_face_mask_0_0.jpg" 
                />
            </div>

           
        </div>
    );
}

export default Home;
