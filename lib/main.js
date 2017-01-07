$(() => {
  $('.view-more-1').on("click", () => {
    $('.view-more-1').addClass('hidden-button');
    $('.more-proj-1').removeClass('hidden');
    $('.view-more-2').removeClass('hidden');
  });

  $('.view-more-2').on("click", () => {
    $('.view-more-2').addClass('hidden-button');
    $('.more-proj-2').removeClass('hidden');
  });
});

var trackOutboundLink = function(url) {
   ga('send', 'event', 'outbound', 'click', url, {
     'transport': 'beacon',
     'hitCallback': function(){
       window.open(url,'_blank');
      //  document.location = url;
     }
   });
}
