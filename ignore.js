var member_id = "U02BGQYTN"; //this is my ID, replace with the member_id of the user you'd like to ignore
$('a[data-member-id="'+member_id+'"]').parent().hide();
var observer = new MutationObserver(function(mutations, observer) {
    $('a[data-member-id="'+member_id+'"]').parent().hide();
});

observer.observe(document, {
  subtree: true,
  childList: true
});
