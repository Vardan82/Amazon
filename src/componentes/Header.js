import { useState } from "react"

function Header({closeLeftHover, setCloseLeftHover}){

    const [seeAll, setSeeAll] = useState(false)
    const [seeAllDown, setSeeAllDown] = useState(false)
    const [closeLeft, setCloseLeft] = useState(false)

  
    return(
       <div className="header_div" style={{visibility :!closeLeftHover? "hidden":""}} > 
           
           
            <div className="header_hover"  style={{ transform: `translateX(-${!closeLeftHover *100}%)`, display:"block"}} >
               
                <div className="header_hello_sign_in">
                    <span className="header_hello_sign_in_img"></span>
                    <span className="header_hello_sign_in_nav_text"> Hello, Sign in </span>
                </div>
                <div className="header_close_nav"  style={{display:!closeLeftHover?"none":"block", transition:"0.5s"}} onClick={()=>setCloseLeftHover(!closeLeftHover)}>
                    <span className="header_close_img"></span>
                </div>
                <div className="left_right_overflou_hiden">
                <div className="overflow_scroll"  style={{transform:`translateX(-${closeLeft*50}%)`}}>
                    <div className="hello_sign_in_main" >
                        <span className="hello_sign_in_main_content"> Digital Content & Devices </span>
                        <span className="hello_sign_in_main_title" onClick={()=>setCloseLeft(!closeLeft)}> <a  className="hello_sign_in_main_title_text" > Amazon Music </a> <span className="hello_sign_in_main_title_img"></span></span>
                        <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Kindle E-readers & Books </a> <span className="hello_sign_in_main_title_img"></span></span>
                        <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Appstore for Android </a> <span className="hello_sign_in_main_title_img"></span></span>
                        <span className="hello_sign_in_main_line"></span>
                        <span className="hello_sign_in_main_content"> Shop By Departament </span>
                        <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Electronics </a> <span className="hello_sign_in_main_title_img"></span></span>
                        <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Computers </a> <span className="hello_sign_in_main_title_img"></span></span>
                        <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Smart Home </a> <span className="hello_sign_in_main_title_img"></span></span>
                        <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Art & Crafts </a> <span className="hello_sign_in_main_title_img"></span></span>
                        <span className="hello_sign_in_main_title_see_all_down" style={{display:seeAll?"none":""}} onClick={()=>setSeeAll(!seeAll)} > <a href="" className="hello_sign_in_main_title_see_all_text"> See All </a> <span className="hello_sign_in_main_title_see_all_down_img"></span></span>

                        <span className="hello_sign_in_main_line"></span>

                        { seeAll &&
                                    <div className="down_up">
                                                <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Automotive </a> <span className="hello_sign_in_main_title_img"></span></span>
                                                <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Baby </a> <span className="hello_sign_in_main_title_img"></span></span>
                                                <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Beauty and personal care </a> <span className="hello_sign_in_main_title_img"></span></span>
                                                <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Womens Fashion </a> <span className="hello_sign_in_main_title_img"></span></span>
                                                <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Mens Fashion </a> <span className="hello_sign_in_main_title_img"></span></span>
                                                <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Girls Fashion </a> <span className="hello_sign_in_main_title_img"></span></span>
                                                <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Boys Fashion </a> <span className="hello_sign_in_main_title_img"></span></span>
                                                <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Health and Household </a> <span className="hello_sign_in_main_title_img"></span></span>
                                                <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Home and Kitchen </a> <span className="hello_sign_in_main_title_img"></span></span>
                                                <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> industrial and Scientific care </a> <span className="hello_sign_in_main_title_img"></span></span>
                                                <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Luggage </a> <span className="hello_sign_in_main_title_img"></span></span>
                                                <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Movies & Television </a> <span className="hello_sign_in_main_title_img"></span></span>
                                                <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Pet supplies </a> <span className="hello_sign_in_main_title_img"></span></span>
                                                <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Software </a> <span className="hello_sign_in_main_title_img"></span></span>
                                                <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Sports and Outdoors </a> <span className="hello_sign_in_main_title_img"></span></span>
                                                <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Tools & Home Improvement </a> <span className="hello_sign_in_main_title_img"></span></span>
                                                <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Toys and Games </a> <span className="hello_sign_in_main_title_img"></span></span>
                                                <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Video Games </a> <span className="hello_sign_in_main_title_img"></span></span>
                                                <span className="hello_sign_in_main_title_text_see_less_up" style={{display:seeAll?"":"none"}} onClick={()=>setSeeAll(!seeAll)}> <a href="" className="hello_sign_in_main_title_text"> See Less </a> <span className="hello_sign_in_main_title_see_less_up_img"></span></span>
                                                <span className="hello_sign_in_main_line"></span>
                                    </div>
                        }
                        <span className="hello_sign_in_main_content"> Programes & Features </span>
                        <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Gift Cards </a> <span className="hello_sign_in_main_title_img"></span></span>
                        <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> #FfounditOnAmazon </a> </span>
                        <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Amazon Live </a> <span className="hello_sign_in_main_title_img"></span></span>
                        <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> International Shopping </a> <span className="hello_sign_in_main_title_img"></span></span>
                        <span className="hello_sign_in_main_line" style={{display:seeAllDown?"":"none"}}></span>
                        <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Amazon Second Chance </a> <span className="hello_sign_in_main_title_img"></span></span>
                        <span className="hello_sign_in_main_title_see_all_down" style={{display:seeAllDown?"none":""}} onClick={()=>setSeeAllDown(!seeAllDown)}> <a href="" className="hello_sign_in_main_title_see_all_text" > See All </a> <span className="hello_sign_in_main_title_see_all_down_img"></span></span>
                        { 
                        seeAllDown &&
                        
                        <div>
                            <span className="hello_sign_in_main_title_text_see_less_up" style={{display:seeAllDown?"":"none"}} onClick={()=>setSeeAllDown(!seeAllDown)}> <a href="" className="hello_sign_in_main_title_text"> See Less </a> <span className="hello_sign_in_main_title_see_less_up_img"></span></span>
                        </div>
                        }
                        <span className="hello_sign_in_main_line"></span>
                        <span className="hello_sign_in_main_content"> Programes & Features </span>
                        <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Help & Settings </a> </span>
                        <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Your Account </a> </span>
                        <span className="hello_sign_in_main_title_usa"> <span className="hello_sign_in_main_title_img_english"></span>  <a href="" className="hello_sign_in_main_title_text"> English </a> </span>
                        <span className="hello_sign_in_main_title_usa"> <span className="hello_sign_in_main_title_img_usa"></span> <a href="" className="hello_sign_in_main_title_text"> United States </a> </span>
                        <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Costumer Service </a> </span>
                        <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Sign in </a> </span>
                    </div>
                    <div className="main_menu" >
                        <span className="hello_sign_in_main_title_main_menu" onClick={()=>setCloseLeft(!closeLeft)}> <span className="hello_sign_in_main_title_img_main_menu"></span> <a className="hello_sign_in_main_title_text_main_menu"> MAIN MENU </a> </span>
                        <span className="hello_sign_in_main_line_main_menu"></span>
                        <span className="hello_sign_in_main_content"> Stream Music </span>
                        <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Amazon Music Unlimited </a> </span>
                        <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Free Streaming Music </a> </span>
                        <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Podcasts </a> </span>
                        <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Open Web Player </a> </span>
                        <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Open Web Player </a> </span>
                        <span className="hello_sign_in_main_title"> <a href="" className="hello_sign_in_main_title_text"> Download the app </a> </span>
                    </div>
                </div>
                </div>
            </div>
            
       </div>
    )
}
export default Header