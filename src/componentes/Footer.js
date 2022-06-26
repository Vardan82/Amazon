import { useState } from "react"


function Footer(){

    const [hover, setHover] = useState(false)
    const [closeHover, setCloseHover] = useState(false)
    return(
        <div className="footer">
            <div className="back_to_top_main" >
                <div className="back_to_top"> <span> Back to top </span> </div>
                <div className="back_to_top_main_footer"   >
                    <div className="back_to_top_text_header">
                        <div className="back_to_top_text_main"  >
                            <div className="back_to_top_text_main_nav"> Get to Know Us </div>
                            <ul className="back_to_top_text_main_text">
                                <li> <a href=""> Careers </a></li>
                                <li> <a href=""> Blog </a></li>
                                <li> <a href=""> About Amazon </a></li>
                                <li> <a href=""> Investor Relations </a></li>
                                <li> <a href=""> Amazon Devices </a></li>
                                <li> <a href=""> Amazon Sciencs </a></li>
                            </ul>

                        </div>
                        <div className="back_to_top_text_main"  >
                            <div className="back_to_top_text_main_nav"> Make Money with Us </div>
                            <ul className="back_to_top_text_main_text">
                                <li> <a href=""> Sell products on Amazon </a></li>
                                <li> <a href=""> Sell on Amazon Buziness </a></li>
                                <li> <a href=""> Sell apps on Amazon </a></li>
                                <li> <a href=""> Become an Affiliate </a></li>
                                <li> <a href=""> Advertise Your Products </a></li>
                                <li> <a href=""> Selt-Publish with Us </a></li>
                                <li> <a href=""> Host an Amazon Hub </a></li>
                                <li> <a href=""> See More Make Money with Us </a></li>                                
                            </ul>

                        </div>
                        <div className="back_to_top_text_main">
                            <div className="back_to_top_text_main_nav"> Amazon Payment Products </div>
                            <ul className="back_to_top_text_main_text">
                                <li> <a href=""> Amazon Business Card </a></li>
                                <li> <a href=""> Shop with Points </a></li>
                                <li> <a href=""> Reload Your Balance </a></li>
                                <li> <a href=""> Amazon Currency Convertor </a></li>
                            </ul>

                        </div>
                        <div className="back_to_top_text_main">
                            <div className="back_to_top_text_main_nav"> Lrt Us Help You </div>
                            <ul className="back_to_top_text_main_text">
                                <li> <a href=""> Amazon and COVID-19 </a></li>
                                <li> <a href=""> Your Account </a></li>
                                <li> <a href=""> Your Orders </a></li>
                                <li> <a href=""> Shipping Rates & Policies </a></li>
                                <li> <a href=""> Retums & Replacements </a></li>
                                <li> <a href=""> Mamange Your Cintetn and Devices </a></li>
                                <li> <a href=""> Amazin Assistant </a></li>
                                <li> <a href=""> Help </a></li>
                            </ul>

                        </div>    
                    </div>
                    <div className="back_to_top_line" > </div>
                    <div className="amazon_nav_footer"  >
                        <div className="amazon"> </div>
                        <span className="english_usd_united-states" >
                            <a href="" className="english_nav" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(!hover)}  >
                          
                                <div className="map" ></div>
                                <div className="emglish" > English </div>
                                <div className="back_up" ></div>
                                
                                {
               hover && 
            <div className="hover_english"   >
                <span className="change_language_lern_more"><p className="change_language"> Change language</p> <p className="learn_more"> Learn more </p></span>
                <label className="language"> <span className="circule_span"> <input  className="circle" /> </span> <span className="languajes"> English - EN </span></label>
                <hr className="hr"/>
                <label className="language"> <span className="circule_span"> <input  className="circle" /> </span> <span className="languajes"> español - ES </span></label>
                <label className="language"> <span className="circule_span"> <input  className="circle" /> </span> <span className="languajes"> الترجمة - AR   </span></label>
                <label className="language"> <span className="circule_span"> <input  className="circle" /> </span> <span className="languajes"> Deutsch - DE  </span></label>
                <label className="language"> <span className="circule_span"> <input  className="circle" /> </span> <span className="languajes">  תרגום - HE  </span></label>
                <label className="language"> <span className="circule_span"> <input  className="circle" /> </span> <span className="languajes"> 한국어 - KO </span></label>
                <label className="language"> <span className="circule_span"> <input  className="circle" /> </span> <span className="languajes"> português - PT </span></label>
                <label className="language"> <span className="circule_span"> <input  className="circle" /> </span> <span className="languajes"> 中文 (简体) - ZH </span></label>
                <label className="language"> <span className="circule_span"> <input  className="circle" /> </span> <span className="languajes"> 中文 (繁體) - ZH  </span></label>
           </div>
           }
                            

                            </a>


                           <a href="" className="usd_us_dollar_nav">
                                <span className="dollar"> $ </span>
                                <span className="usd_us_dollar"> USD - U.S. Dollar </span>
                            </a>
                            <a href="" className="flag_united_states" >
                                <span className="flag">  </span>
                                <span className="united_states"> United States </span>
                            </a>
                        </span>
                        <div>

                        </div>
                    </div>
          
                </div>
            </div>
          
            
        </div>
    )
}

export default Footer