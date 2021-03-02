document.addEventListener('DOMContentLoaded', function () {
  $('#sliderImg').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    fade: true,
    asNavFor: '#sliderText',
    customPaging: function (slider, i) {
      const thumb = $(slider.$slides[i])
        .find('.immunity-slide-img')
        .data('image');
      return `<div style="background-image: url('${thumb}');" class="immunity-slide-pagin"></div>`;
    },
    responsive: [
      {
        breakpoint: 950,
        settings: {
          dots: false,
          fade: false,
        },
      },
    ],
  });
  $('#sliderText').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '#sliderImg',
  });
});
