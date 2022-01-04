$(document).ready(function(){
    $(".product__list").slick({
        infinite: true,
        prevArrow: $('.product__slider').find(".arrow_prev"),
        nextArrow: $('.product__slider').find(".arrow_next"),
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $(".partners__list").slick({
        infinite: true,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:false,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });
    $(".form__label-input[name='tel']").inputmask('+7 (999) 999-99-99');
    $(".btn_open-diler-modal").on("click",function(){
        $(".diler-modal").fadeIn(300);
    })
    $(".btn_open-help-modal").on("click",function(){
        $(".help-modal").fadeIn(300)
    })
    $(".modal__close,.modal-bg").on("click",function(){
        $(this).closest('.modal').fadeOut(300)
    })
    $(".accrd-selecter__select").on('click',function(){
        if (!$(this).hasClass("item_selected")) {
            $(".accrd-selecter__select.item_selected").removeClass("item_selected");
            $(this).addClass("item_selected");
            let clickedSelectItem = this;
            $(".accrd-item").hide();
            $(".accrd-selecter__select").each(function(index){
                if (this == clickedSelectItem) {
                    $($(".accrd-item")[index]).show();
                }
            })
        }
    })
})
$(document).ready(function () {
    svg4everybody({});
});
// Библиотека wow.js для анимации

(function () {
	new WOW().init();
})();