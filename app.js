// FOR SCROLLING NAVBAR

$(document).ready(()=>{
    $(window).scroll(()=>{
        if($(document).scrollTop()>50){
            $('nav').addClass("shrink")
        }
        else{
            $('nav').removeClass("shrink")
        }
    });
});
$(document).ready(()=>{
    $(window).scroll(()=>{
        if($(document).scrollTop()>50){
            document.getElementById("vitlogo1").src="./media/AIClubLogo.png"
        }
        else{
            document.getElementById("vitlogo1").src="./media/logochhota.png"
        }
    });
});

// FOR SCROLLING NAVBAR