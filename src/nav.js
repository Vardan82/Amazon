import { useState } from "react"
import Header from "./componentes/Header"



function Nav(){

const [serch, setSerch] = useState(false)
const [flag, setFlag] = useState(false)
const [helloAcount, setHelloAcount] = useState(false)
const [closeLeftHover, setCloseLeftHover] = useState(false)
const [selected, setSelected] = useState("");

  

const changeSelectOptionHandler = (event) => {
  setSelected(event.target.value);
};



    return(
        <div className="nav" onMouseLeave={()=>setSerch(false)}> <div>
      
        
     <div>
      
        </div>
    </div>
            <div className="amazon_nav" >
                    <div className="nav_left_amazon" >
                        <a href=""  className="amazon_img"></a>
                        <a href="" className="map_armenia">
                            <div className="map_armeni_div"></div>
                            <div className="deliverto_armenia">
                                <span className="enviara"> Dellver to </span>
                                <span className="armenia"> Armenia  </span>
                            </div>
                        </a>
                    </div>
                <div className="nav_center_amazon"  >
                   
                
                
                           
                            <select className="todos" onClick={()=>setSerch(!serch)}  style={{border:serch?"3px solid orange":""}} onChange={changeSelectOptionHandler} >
                            <option className="onclick_serch_text"   >   All </option>
                               <option className="onclick_serch_text"   >   All Departtaments </option>
                               <option className="onclick_serch_text"  > Arts & Crafts </option>
                               <option className="onclick_serch_text" > Automotive </option>
                               <option className="onclick_serch_text" > Automotive </option>
                               <option className="onclick_serch_text" > Baby </option>
                               <option className="onclick_serch_text" > Beauty and Personal Care </option>
                               <option className="onclick_serch_text" > Books </option>
                               <option className="onclick_serch_text" > Boys Fashion </option>
                               <option className="onclick_serch_text" > Computars </option>
                               <option className="onclick_serch_text" > Deals </option>
                               <option className="onclick_serch_text" > Digital Musics </option>
                               <option className="onclick_serch_text" > Electronic </option>
                               <option className="onclick_serch_text" > Girls Fashion </option>
                               <option className="onclick_serch_text" > Health & Hausehold </option>
                               <option className="onclick_serch_text" > Home & Kitchen </option>
                               <option className="onclick_serch_text" > Industreial & Scientific </option>
                               <option className="onclick_serch_text" > Kindle Store </option>
                               <option className="onclick_serch_text" > luggage </option>
                               <option className="onclick_serch_text" > Mens Fashion </option>
                               <option className="onclick_serch_text" > Movies & TV </option>
                               <option className="onclick_serch_text" > Music CD & Vinyl </option>
                               <option className="onclick_serch_text" > Pet Supplaies </option>
                               <option className="onclick_serch_text" > Prime Video </option>
                               <option className="onclick_serch_text" > Software </option>
                               <option className="onclick_serch_text" > Sports & Outdoors </option>
                               <option className="onclick_serch_text" > Tools & Home Improvement </option>
                               <option className="onclick_serch_text" > Toys & Games </option>
                               <option className="onclick_serch_text" > Video Games </option>
                               <option className="onclick_serch_text" > Womens Fashion </option>                                
                           </select>
               

                    
                   
                    <div className="input">
                        <input/>
                    </div>
                    <div className="serch">
                        <span></span>
                    </div>
                </div>
                <div className="nav_right_amazon">
                    <a href="" className="usa_flag_down" onMouseEnter={()=>setFlag(true)} onMouseLeave={()=>setFlag(!flag)}>
                        <span className="usa"> </span>
                        <img  className="down" src="./img/dropdown_icon.png"/>

                        { flag &&
                         <div className="hover_english_flag"   >
                            <span className="change_language_lern_more_flag"><p className="change_language_flag"> Change language</p> <p className="learn_more_flag"> Learn more </p></span>
                            <label className="language_flag"> <span className="circule_span_flag"> <input  className="circle_flag" /> </span> <span className="languajes_flag"> English - EN </span></label>
                            <hr className="hr"/>
                            <label className="language_flag"> <span className="circule_span_flag"> <input  className="circle_flag" /> </span> <span className="languajes_flag"> español - ES </span></label>
                            <label className="language_flag"> <span className="circule_span_flag"> <input  className="circle_flag" /> </span> <span className="languajes_flag"> الترجمة - AR   </span></label>
                            <label className="language _flag"> <span className="circule_span_flag"> <input  className="circle_flag" /> </span> <span className="languajes_flag"> Deutsch - DE  </span></label>
                            <label className="language_flag"> <span className="circule_span_flag"> <input  className="circle_flag" /> </span> <span className="languajes_flag">  תרגום - HE  </span></label>
                            <label className="language_flag"> <span className="circule_span_flag"> <input  className="circle_flag" /> </span> <span className="languajes_flag"> 한국어 - KO </span></label>
                            <label className="language_flag"> <span className="circule_span_flag"> <input  className="circle_flag" /> </span> <span className="languajes_flag"> português - PT </span></label>
                            <label className="language_flag"> <span className="circule_span_flag"> <input  className="circle_flag" /> </span> <span className="languajes_flag"> 中文 (简体) - ZH </span></label>
                            <label className="language_flag"> <span className="circule_span_flag"> <input  className="circle_flag" /> </span> <span className="languajes_flag"> 中文 (繁體) - ZH  </span></label>
                            <hr className="hr_flag"/>
                            <span className="change_language_lern_more_flag"><p className="change_language_flag"> Change currency </p> <p className="learn_more_flag"> Learn more </p></span>
                            <div className="flag_usd_dollar_chage"> <span className="flag_usd_dollar"> $  - USD - US Dollar</span> <a href="" className="flag_change"> Change </a> </div>
                            <hr className="hr_flag"/>
                            <span className="flag_you_are_shoping_on">
                                <span className="flag">   </span>
                                <span className="you_are_shoping_on"> You are shoping on </span>
                            </span>
                            <span className="amazon_com"> Amazon.com</span>
                            <br/>
                             <a href="" className="change_country_region"> Change country/region. </a> 
                            
                       </div>
                        }
                    </a>
                    <a href="" className="hello_singin_account_lists" onMouseEnter={()=>setHelloAcount(true)} onMouseLeave={()=>setHelloAcount(!helloAcount)}>
                        <span className="hello_singin"> Hello, Sing in</span>
                        <span className="account_lists"> Account & Lists <img /> <img  className="down" src="./img/dropdown_icon.png"/> </span>
                        {
                            helloAcount && <div className="hello_singin_account_lists_hover">
                            <div className="hello_singin_account_lists_hover_nav">
                                <a href="" className="sing_in_hover"> Sing in</a>
                                <span className="new_customer_start_here_hover"> New customer?  <a href="" className="start_here"> Start here</a></span>
                            </div>
                        <div className="you_lists_your_account_hover">
                            <div className="you_lists_your_account_hover_text_left">
                                <span className="your_lists_hover"> Your Lists </span>
                                <a href="" className="your_lists_hover_text"> Create a List </a>
                                <a href="" className="your_lists_hover_text"> Find a List or Registry </a>
                                <a href="" className="your_lists_hover_text"> Amazon Smile Charity Lists </a>
                            </div>
                            <div className="you_lists_your_account_hover_text_right">
                                <span className="your_lists_hover"> Your Account </span>
                                <a href="" className="your_lists_hover_text"> Account </a>
                                <a href="" className="your_lists_hover_text"> Orders </a>
                                <a href="" className="your_lists_hover_text"> Recommendations </a>
                                <a href="" className="your_lists_hover_text"> Browsing History </a>
                                <a href="" className="your_lists_hover_text"> Watchlist </a>
                                <a href="" className="your_lists_hover_text"> Video Purchases & Rentals </a>
                                <a href="" className="your_lists_hover_text"> Kindle Unlimited </a>
                                <a href="" className="your_lists_hover_text"> Contetn & Devices </a>
                                <a href="" className="your_lists_hover_text"> Subscribe & Save lterms </a>
                                <a href="" className="your_lists_hover_text"> Memberships & Subscriptions </a>
                                <a href="" className="your_lists_hover_text"> Music Library </a>
                            </div>
                        </div>
                            
            </div>
                        }





                    </a>
                    <a href="" className="retums_orders">
                        <span className="retums"> Retums </span>
                        <span className="orders"> & Orders </span>
                    </a>
                    <a className="ziro_carrt">
                        <div className="ziro">
                            <span className="ziro_number"> 0 </span>
                            <span className="carriage"></span>
                        </div>
                        <div className="cart">
                            <span> Cart </span>
                        </div>
                    </a>
                </div>
             </div>
             
             <div className="amazon_nav_main">
                <div className="header_div_div" style={{transform: `translateX(${closeLeftHover *100}%)`, display:closeLeftHover?"block":"none", transition:"0.5s"}}  > <Header closeLeftHover={closeLeftHover} setCloseLeftHover={setCloseLeftHover} /> </div>
                <div className="display_Flex">
                    <div className="flex">
                            <div className="amazon_nav_main_left" onClick={()=>setCloseLeftHover(!closeLeftHover)} > 

                                <a  className="amazon_nav_main_left_a"  >
                                    <span className="burger"></span>
                                    
                                    <span> All </span>
                                </a>
                            </div>
                            <div className="amazon_nav_main_senter">
                                <a href=""> Today's Deals </a>
                                <a href=""> Customer Service </a>
                                <a href=""> Registry </a>
                                <a href=""> Gift Cards </a>
                                <a href=""> Sell </a>
                            </div>
                    </div>
                    <div className="amazon_nav_main_right">
                            <a href=""> Shop Father's Day Gifts</a>
                    </div>
                </div>
             </div>
             
        </div>
    )
}

export default Nav