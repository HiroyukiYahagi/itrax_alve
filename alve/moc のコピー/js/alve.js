function showSearchOption(){
  var isDisplayed = $('.search-options').css('display');
  if (isDisplayed == 'none') {
    $('.search-options').css('display' ,'inline-block');
  }else{
    $('.search-options').css('display' ,'none');
  }
}

$(function() {
  $('#sorter').tablesorter();
});