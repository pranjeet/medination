import React from 'react';
import Product from "./Product";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://www.pixelstalk.net/wp-content/uploads/images1/Medical-Wallpapers-HD-Free-download.jpg"
                alt="" 
            />
            
            {/* Product id,title,price,rating,image */}
            <h2>Devices</h2>
            <div className="home__row">
                <Product 
                id="1"
                title="Prozo Plus Steam Inhaler Vaporizer"
                price={279.30}
                rating={5}
                image="https://cdn01.pharmeasy.in/dam/products_otc/W79394/prozo-plus-steam-inhaler-vaporizer-premium-quality-with-3-months-warranty-2-1606915331.jpg"
                />

                <Product 
                id="2"
                title="Bpl Smart Oxy Finger Tip Pulse Black Oximeter"
                price={2450.00}
                rating={4}
                image="https://cdn01.pharmeasy.in/dam/products_otc/M67325/bpl-smart-oxy-finger-tip-pulse-black-oximeter-black-6.4-1601980881.jpg" 
                />

                <Product 
                id="3"
                title="Omron Mc-246-c1 Thermometer"
                price={232.00}
                rating={4}
                image="https://cdn01.pharmeasy.in/dam/products_otc/131350/omron-mc-246-c1-thermometer-6.1-1612781095.jpg" 
                />

                 <Product 
                id="4"
                title="Accu-chek Active Glucometer Kit"
                price={1359.15}
                rating={4}
                image="https://cdn01.pharmeasy.in/dam/products_otc/000660/accu-chek-active-glucometer-kit-with-free-10-strips-2-1598446781.jpg" 
                />

                <Product 
                id="5"
                title="Oxy99 Portable Oxygen Cylinder - 500ml"
                price={520.00}
                rating={4}
                image="https://cdn01.pharmeasy.in/dam/products_otc/Q03600/oxy99-portable-oxygen-cylinder-500ml-2-1612248405.jpg" 
                />

                <Product 
                id="6"
                title="Canyearn Medical Infrared Thermometer"
                price={4205.00}
                rating={5}
                image= "https://www.netmeds.com/images/product-v1/150x150/908302/canyearn_medical_infrared_thermometer_0_0.jpg" 
                />
            </div>

            <h2>Nutrition and Fitness Supplements</h2>
            <div className="home__row">
                <Product 
                id="7"
                title="Liveasy Wellness Immuno Protein - Adult Protein Drink With Vitamins & Minerals"
                price={659.45}
                rating={5}
                image="https://cdn01.pharmeasy.in/dam/products_otc/F54285/liveasy-wellness-immuno-protein-adult-protein-drink-with-vitamins-minerals-provides-energy-vitality-jar-of-500-gram-2-1598018537.jpg" 
                />

                <Product 
                id="8"
                title="
                Liveasy Wellness Immunity Pro - Vitamin C & Zinc - With Herbal Immunity Blend"
                price={399.50}
                rating={4}
                image="https://cdn01.pharmeasy.in/dam/products_otc/U58783/liveasy-wellness-immunity-pro-vitamin-c-zinc-with-herbal-immunity-blend-amla-giloy-ashwagandha-tulsi-curcumin-60-tablets-2-1597831718.jpg" 
                />

                <Product 
                id="9"
                title="Threptin Chocolate Nutrition Diskettes Tin Of 275 G"
                price={374.00}
                rating={4}
                image="https://cdn01.pharmeasy.in/dam/products_otc/169990/threptin-chocolate-nutrition-diskettes-tin-of-275-g-2-1613113925.jpg" 
                />

                <Product 
                id="10"
                title="Liveasy Wellness Apple Cider Vinegar 500mg - Digestion Support Tablets"
                price={311.48}
                rating={4}
                image="https://cdn01.pharmeasy.in/dam/products_otc/T00237/liveasy-wellness-apple-cider-vinegar-500mg-digestion-support-tablets-weight-management-bottle-of-60-2-1608817512.jpg" 
                />
            </div>

            <h2>Home Care</h2>
            <div className="home__row">
                <Product 
                id="11"
                title="Dettol Antiseptic Liquid Bottle Of 550 Ml"
                price={160.80}
                rating={5}
                image="https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-2-1600447088.jpg?dim=240x0&dpr=1&q=80" 
                />

                <Product 
                id="12"
                title="Liveasy Essentials Instant Hand Sanitizer Gel Based - 200ml"
                price={98.00}
                rating={4}
                image="https://cdn01.pharmeasy.in/dam/products_otc/G99739/liveasy-essentials-instant-hand-sanitizer-kills-999-germs-7234-iso-propyl-alcohol-gel-based-200ml-2-1598591213.jpg?dim=240x0&dpr=1&q=80" 
                />

                <Product 
                id="13"
                title="Keepsafe Multi Purpose Disinfectant Spray - 90 Ml"
                price={86.00}
                rating={4}
                image="https://cdn01.pharmeasy.in/dam/products_otc/J44982/keepsafe-multi-purpose-disinfectant-spray-90-ml-2-1613636728.jpg" 
                />

                <Product 
                id="14"
                title="Dettol Surface Disinfectant Spray Sanitizer - 225ml"
                price={159.00}
                rating={5}
                image="https://cdn01.pharmeasy.in/dam/products_otc/V01925/dettol-surface-disinfectant-spray-sanitizer-for-germ-protection-on-hard-soft-surfaces-original-pine-225ml-6.1-1610694806.jpg" 
                />

                <Product 
                id="15"
                title="Ezee Bio-degradable Small Garbage Bags Packet Of 30"
                price={40.95}
                rating={5}
                image="https://cdn01.pharmeasy.in/dam/products_otc/H92697/ezee-bio-degradable-small-garbage-bags-17-x-19-inches-packet-of-30-2-1614264092.jpg" 
                />
            </div>
            
            <h2>Skin Care</h2>
            <div className="home__row">
                <Product 
                id="16"
                title="Everyuth Naturals Nourishing Aloe Vera & Cucumber Gel"
                price={72.00}
                rating={5}
                image="https://cdn01.pharmeasy.in/dam/products_otc/H83130/everyuth-naturals-nourishing-aloe-vera-cucumber-gel-100g-2-1609239263.jpg" 
                />

               <Product 
                id="17"
                title="Wow Skin Science Ubtan Face Wash - 100ml"
                price={149.40}
                rating={5}
                image= "https://cdn01.pharmeasy.in/dam/products_otc/K38478/wow-skin-science-ubtan-face-wash-100ml-2-1600955122.jpg" 
                />

                <Product 
                id="18"
                title="La Shield Spf 40 Sunscreen Gel 60gm"
                price={553.00}
                rating={4}
                image= "https://cdn01.pharmeasy.in/dam/products_otc/239792/la-shield-spf-40-sunscreen-gel-60gm-2-1613476348.jpg" 
                />

                <Product 
                id="19"
                title="Nivea Body Milk Moisturizing Lotion Bottle Of 400 Ml"
                price={271.15}
                rating={4}
                image= "https://cdn01.pharmeasy.in/dam/products_otc/I40905/nivea-body-milk-moisturizing-lotion-bottle-of-400-ml-2-1601731732.jpg" 
                />

                <Product 
                id="20"
                title="Dettol Germ Protection Bathing Bar Soap Original - 125 G"
                price={47.50}
                rating={4}
                image= "https://cdn01.pharmeasy.in/dam/products_otc/054560/dettol-germ-protection-bathing-bar-soap-original-125-g-6.2-1612781295.jpg" 
                />
            </div>

            <h2>Short Term Ailments</h2>
            <div className="home__row">
                <Product 
                id="21"
                title="Cofsils Ginger Lemon Cold & Cough Lozenges Strip Of 10 's"
                price={27.00}
                rating={4}
                image="https://cdn01.pharmeasy.in/dam/products_otc/282039/cofsils-ginger-lemon-cold-cough-lozenges-strip-of-10-s-2-1597361191.jpg" 
                />

                <Product 
                id="22"
                title="Moov Pain Relief Spray Bottle Of 80 G"
                price={238.50}
                rating={5}
                image= "https://cdn01.pharmeasy.in/dam/products_otc/116770/moov-pain-relief-spray-bottle-of-80-g-6.1-1610441954.jpg" 
                />

                <Product 
                id="23"
                title="Hansaplast Patch Bandage Jar Of 50"
                price={84.00}
                rating={4}
                image= "https://cdn01.pharmeasy.in/dam/products_otc/I47496/hansaplast-patch-bandage-jar-of-50-2-1613636904.jpg" 
                />

                <Product 
                id="24"
                title="Everherb Jointcare - Joint & Bone Health - Bottle Of 60 Tablets"
                price={499.50}
                rating={5}
                image= "https://cdn01.pharmeasy.in/dam/products_otc/Y79593/everherb-jointcare-9-scientifically-researched-herbs-joint-and-bone-health-arthritis-relief-anti-inflammatory-60-veg-tablets-1.jpg" 
                />
            </div>
           
            <h2>COVID 19 Essentials</h2>
            <div className="home__row">
                <Product 
                id="25"
                title="Wildcraft Hypashield W95 Reusable Outdoor Protection Face Mask - Large"
                price={180.00}
                rating={4}
                image="https://www.netmeds.com/images/product-v1/600x600/909963/wildcraft_hypashield_w95_reusable_outdoor_protection_face_mask_0_0.jpg" 
                />

                <Product 
                id="26"
                title="Soft Hands Non Sterile Latex Medical Examination Gloves (L) 100's"
                price={ 854.00}
                rating={5}
                image= "https://www.netmeds.com/images/product-v1/600x600/908054/soft_hands_non_sterile_latex_medical_examination_gloves_l_100s_0_0.jpg" 
                />

                <Product 
                id="27"
                title="1Mile Protective Face Shield - Be Alert (400 Micron)"
                price={129.00}
                rating={4}
                image= "https://www.netmeds.com/images/product-v1/600x600/915418/1mile_protective_face_shield_be_alert_400_micron_0_0.jpg" 
                />

                <Product 
                id="28"
                title="Innvolution PPE Kit 1's"
                price={1300.00}
                rating={5}
                image= "https://www.netmeds.com/images/product-v1/600x600/916057/innvolution_ppe_kit_1s_0_0.jpg" 
                />
            </div>
        </div>
    );
}

export default Home;
