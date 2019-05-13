import React from 'react'
import $ from 'jquery'
import banner1 from './../../../static/banner1.jpg'
import banner2 from './../../../static/banner2.jpg'
import banner3 from './../../../static/banner3.png'

class Banner extends React.PureComponent{
    constructor(){
        super();
        this.changeBanner= this.changeBanner.bind(this);
    };
    componentDidMount(){
        this.changeBanner();
    }
    changeBanner(){
        let pageIndex = 0;
        let bannersid = null;
        let flag=true;
        let imgWidth = $(".banner ul li").width();
        let clone = $(".banner ul li").first().clone(true);
        $(".banner ul").append(clone);
        let len = $(".banner ul li").size();
        const moveLeft=function(){
            pageIndex++;
            if(pageIndex===len){
                $(".banner ul").css({left:0});
                pageIndex=1;
                $(".banner ul").animate({left:-pageIndex*imgWidth});
            }else{
                $(".banner ul").animate({left:-pageIndex*imgWidth});
            }
            if(pageIndex===len-1){
                $(".banner .btns span:eq(0)").addClass("active").siblings().removeClass("active");
            }else{
                $(".banner .btns span:eq("+pageIndex+")").addClass("active").siblings().removeClass("active");
            }
        }
        const moveRight =function(){
            pageIndex--;
            if(pageIndex===-1){
                $(".banner ul").css({left:-(len-1)*imgWidth});
                pageIndex=len-2;
            }
            $(".banner ul").animate({left:-pageIndex*imgWidth});
            $(".banner .btns span:eq("+pageIndex+")").addClass("active").siblings().removeClass("active");
        }
        $('.banner').hover(()=>{
            clearInterval(bannersid);
        },()=>{
            bannersid=setInterval(moveLeft,3000);
        });
        $(".banner button.left").bind("click",function(){
            if(flag){
                flag=false;
                moveRight();
                setTimeout(()=>{
                    flag=true
                },600);
            }
        });
        $(".banner button.right").bind("click",function(){
            if(flag){
                flag=false;
                moveLeft();
                setTimeout(()=>{
                    flag=true
                },600);
            }
        })
        $(".banner .btns span").bind("click",function(){
            pageIndex= $(this).index()-1;
            $(this).addClass("active").siblings().removeClass("active");
            moveLeft();
        })
        bannersid = setInterval(moveLeft,3000);
    }
    render(){
        return (
            <div className="banner">
                <ul>
                    <li><img src={banner1} alt=""/></li>
                    <li><img src={banner2} alt=""/></li>
                    <li><img src={banner3} alt=""/></li>
                </ul>
                <div className="btns">
                    <span className="active"></span>
                    <span></span>
                    <span></span>
                </div>
                <button className="left">&#9668;</button>
                <button className="right">&#9658;</button>
            </div>
        )
    }
    
}
export default Banner;