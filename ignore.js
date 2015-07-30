var member_id = "U03CGHYTN"; //this is a fake ID, replace with the member_id of the user you'd like to ignore

$('a[data-member-id="'+member_id+'"]').parent().hide(); // this hides all currently displayed messages by that user
$('li.member_'+member_id).hide(); // and their listing in the direct messages list

var observer = new MutationObserver(function(mutations, observer) { // this watches for new messages and appearances by that user
    $('a[data-member-id="'+member_id+'"]').parent().hide();
    $('li.member_'+member_id).hide();
});

observer.observe(document, {
  subtree: true,
  childList: true
});
