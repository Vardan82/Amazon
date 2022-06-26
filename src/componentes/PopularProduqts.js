import { useState } from "react"



function PopularProduqts(){

    const [popular, setPopular] = useState(false)
    const [line, setLine] = useState(false)

    const [popularAktivite, setPopularAktivite] = useState(
        [

            {
                img: "./img/RTX VINTILYATOR.jpg"
            },
            {
                img: "./img/KINGSTON.jpg"
            },
            {
                img: "./img/VINCH.jpg"
            },
            {
                img: "./img/KLAVYATURA.jpg"
            },
            {
                img: "./img/USB.jpg"
            },
            {
                img: "./img/CRUSIAL.jpg"
            },
            {
                img: "./img/mauz.jpg"
            },
            {
                img: "./img/CHIP.jpg"
            },
            {
                img: "./img/SANDISK.jpg"
            },
            {
                img: "./img/RTX VINTILYATOR.jpg"
            },
            {
                img: "./img/AVRUS.jpg"
            },
            {
                img: "./img/RYZEN.jpg"
            },
            {
                img: "./img/USB LINE.jpg"
            },
            {
                img: "./img/SAMSUNG USB.jpg"
            },
            {
                img: "./img/SAMSUNG DRAIVER.jpg"
            },
            {
                img: "./img/RTX VINTILYATOR.jpg"
            },
            {
                img: "./img/VINTILYATOR.jpg"
            },
            {
                img: "./img/RYZEN.jpg"
            },
            {
                img: "./img/NOTBOOK.jpg"
            },
            {
                img: "./img/CORE TWO.jpg"
            },
            {
                img: "./img/MAUS TWO.jpg"
            },
            {
                img: "./img/SUNDISK.jpg"
            },
            {
                img: "./img/RTX VINTILYATOR.jpg"
            },
            {
                img: "./img/CORE.jpg"
            },
            {
                img: "./img/procesor.jpg"
            },
            
            
        ]
    )


    const incrementIndexPopular = () => {
        if(popular < popularAktivite.length-5) {
            setPopular(popular+1)
        }else  {
            setPopular(popular-0)

        }
    }

    const decrementIndexPopular = () => {
        if(popular >0){
            setPopular(popular-1)

        }else{
            setPopular(false)
        }
    }

    
    return(
        <div className="popular_produqts_nav">
           <div className="popular_produqts_header" onMouseLeave={()=>setLine(!line)}>
              <div className="text_popular_produqts" onMouseLeave={()=>setLine(!line)}> <span > Popular products in PC internationally </span> </div>
                <div className="popular_produqts" onMouseEnter={()=>setLine(true)}>
                    <div className="left_popular_products" onClick={decrementIndexPopular}  style={{border:popular?"3px solid blue":"3px solid blue", opacity: popular ==0 ?  '0.5' : ''}}> <img  className="left_products" src="./img/left_icon.png"/> </div>
                {
                    popularAktivite?.map((el, i)=>{
                        return(
                            <div className="popular_produqts_img" style={{transform: `translateX(-${ popular *100}%)`,}}>
                                <img className="popular_produqts_imges" src={el.img}/> 
                            </div>
                        )

                    })
                }
                     <div className="right_popular_products"  onClick={incrementIndexPopular} style={{border:popular?"3px solid blue":"3px solid blue", opacity: popular >= popularAktivite.length-5 ?  '0.5' : ''}}> <img className="right_products" src="./img/right_icon.png"/> </div>
                </div>
                <div className="line_click">
                    {
                       line && <span className="click_hover" style={{transform:`translateX(${popular*34}%)`}} >  </span>

                    }
                    
                    
                </div>
           </div>
           
               
           
              
        </div>
    )
}

export default PopularProduqts