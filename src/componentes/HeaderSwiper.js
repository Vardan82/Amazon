import { useState } from "react"



 

function HeaderSwiper(){

    const [navig, setNavig] = useState(false)

    const[aktivite, setAktivite] = useState(
        [
            {
                img: "./img/SX3000_.jpg"
            },
            {
                img: "./img/61DUO0NqyyL._SX3000_.jpg"
            },
            {
                img: "./img/61jovjd+f9L._SX3000_.jpg"
            },
            {
                img: "./img/71qid7QFWJL._SX3000_.jpg"
            },
            {
                img: "./img/711Y9Al9RNL._SX3000_.jpg"
            }
        ]
    )

    const incrementIndex = () => {
        if(navig < aktivite.length - 1) {
            setNavig(navig+1)
        }else{
            setNavig((aktivite.length.reverse(0, -1))+1)
        }
    }

    const decrementIndex = () => {
        if(navig >0){
            setNavig(navig-1)

        }else{
            setNavig((aktivite.length)-1)
        }
    }
    return(
        <div className="header">
            <div className="header_swiper_ferst_img">
                <div className="left_icon" onClick= {decrementIndex} style={{border:navig?"1px solid white":"none"}}> <span  style={{border:navig?"1px solid blue":"none"}}> <img  className="left" src="./img/left_icon.png"/> </span> </div>
                {
        aktivite?.map((el, i) => {
            return(
                <div className="header_swiper_ferst_imges" style={{transform: `translateX(-${navig *100}%)`,}}>
                  
                    <img className="imgBrous" src={el.img}/>
                 
                   
               </div>
            )
        })
    }
              
                <div className="right_icon" onClick= {incrementIndex} style={{border:navig?"1px solid white":"none"}}> <span style={{border:navig?"1px solid blue":"none"}}> <img className="right" src="./img/right_icon.png"/> </span> </div>

            </div>
            <div className="gamin_accessories_shopby_category_health_personalcare_singinthebest_experience">
                <div className="title_icon_content_nav_header">
                    <div className="title_icon_content_nav">
                        <div className="content"> <span> Gamming accessories </span> </div>
                        <div className="title_icones_nav">
                            <div className="title_icones">
                                <div className="title_icon">
                                    <img className="icon" src="./img/nauchnik.jpg"/>
                                    <span className="title"> Headsets </span>
                                </div>
                                <div className="title_icon">
                                    <img className="icon" src="./img/klavish.jpg"/>
                                    <span className="title"> Keyboards </span>
                                </div>
                            </div>
                            <div className="title_icones">
                                <div className="title_icon">
                                    <img className="icon" src="./img/mauz.jpg"/>
                                    <span className="title"> Computer mices </span>
                                </div>
                                <div className="title_icon">
                                    <img className="icon" src="./img/Chair.jpg"/>
                                    <span className="title"> Chairs </span>
                                </div>
                            </div>
                        </div>
                        <div className="title_footer"> <span> See more </span> </div>
                    </div>
                    <div className="title_icon_content_nav">
                        <div className="content"> <span> Shop by Category </span> </div>
                        <div className="title_icones_nav">
                            <div className="title_icones">
                                <div className="title_icon">
                                    <img className="icon" src="./img/notebook.jpg"/>
                                    <span className="title"> Computers & Accessories </span>
                                </div>
                                <div className="title_icon_video">
                                    <img className="icon" src="./img/video games.jpg"/>
                                    <span className="title"> Video Games </span>
                                </div>
                            </div>
                            <div className="title_icones">
                                <div className="title_icon">
                                    <img className="icon" src="./img/baby fhone.jpg"/>
                                    <span className="title"> Baby </span>
                                </div>
                                <div className="title_icon_yoys">
                                    <img className="icon_yoys_games" src="./img/Lol games.jpg"/>
                                    <span className="title"> Yoys & Games </span>
                                </div>
                            </div>
                        </div>
                        <div className="title_footer"> <span> Shop now </span> </div>
                    </div>
                    <div className="title_icon_content_nav">
                        <div className="content"> <span> Health & Personal Care </span> </div>
                        <img className="icon_produqts" src="./img/shanpunes.jpg"/>
                        <div className="title_footer"> <span> Shop now </span> </div>

                    </div>
                    <div className="singin_forthebest_experience_nav">
                        <div className="singin_forthebest_experience">
                            <div className="content"> <span> Sign in for the best experience </span> </div>
                            <div className="sign_inIsecurely"><span><button className="sign_inIsecurely_button"> Sign in securely </button></span></div>

                        </div>
                        <div className="chek_box"> <img className="" src="./img/chok box.jpg"/> </div>
                    </div>
                </div>
                <div className="title_icon_content_nav_header_produqts">
                    <div className="content_icon_title_footer">
                        <div className="content"> <span> Shop Father's Day Gifts </span> </div>
                        <img className="icon_produqts" src="./img/footbolka.jpg"/>
                        <div className="title_footer"> <span> Shop now </span> </div>
                    </div>
                    <div className="content_icon_title_footer">
                        <div className="content"> <span> Dresses </span> </div>
                        <img className="icon_produqts" src="./img/dresees.jpg"/>
                        <div className="title_footer"> <span> Shop now </span> </div>
                    </div>
                    <div className="singin_forthebest_experience_nav_footer">
                        <div className="chek_box"> <img className="" src="./img/chok box.jpg"/> </div>
                        <div className="singin_forthebest_experience">
                            <div className="content"> <span> Sign in for the best experience </span> </div>
                            <div className="sign_inIsecurely"><span><button className="sign_inIsecurely_button"> Sign in securely </button></span></div>

                        </div>
                    </div>
                    <div className="content_icon_title_footer">
                        <div className="content"> <span> Electronics </span> </div>
                        <img className="icon_produqt" src="./img/electroniqs.jpg"/>
                        <div className="title_footer"> <span> See more </span> </div>
                    </div>
                    <div className="content_icon_title_footer">
                        <div className="content"> <span> Computers & Accessories </span> </div>
                        <img className="icon_produqts" src="./img/computers acsesuars.jpg"/>
                        <div className="title_footer"> <span> Shop now </span> </div>
                    </div>
                    <div className="title_icon_content_nav_footer">
                        <div className="content"> <span> Health & Personal Care </span> </div>
                        <img className="icon_produqts" src="./img/shanpunes.jpg"/>
                        <div className="title_footer"> <span> Shop now </span> </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeaderSwiper




