$(() => {
  $('.view-more-button').on("click", () => {
    $('.view-more-button').addClass('hidden-button');
    $('.more-projects').removeClass('hidden');
  });
});
