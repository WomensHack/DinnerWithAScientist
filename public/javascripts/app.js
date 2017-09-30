/* fullpage.js methods*/

$(document).ready(function() {
    $('#fullpage').fullpage();
});

/* DOM manipulation methods */

// $('.btn-success').onSubmit(function (e) {
//     e.preventDefault();
//     console.log(e);
// })

$('form').on('submit', function (e) {
    // debugger;
    e.preventDefault();
    $('.form').html('<div class="successMessage">Success!</div>');
});

function setUserType(data) {
    if (data == "mentee") {
        var userType = document.getElementById("userType");
        userType.innerHTML = "mentee";
    } else if (data == "mentor") {
        var userType = document.getElementById("userType");
        userType.innerHTML = "mentor";
    }



}
/* Bootstrap Form */

var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

allWells.hide();

navListItems.click(function (e) {
    e.preventDefault();
    var $target = $($(this).attr('href')),
            $item = $(this);

    if (!$item.hasClass('disabled')) {
        navListItems.removeClass('btn-primary').addClass('btn-default');
        $item.addClass('btn-primary');
        allWells.hide();
        $target.show();
        $target.find('input:eq(0)').focus();
    }
});

allNextBtn.click(function(){
    var curStep = $(this).closest(".setup-content"),
        curStepBtn = curStep.attr("id"),
        nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
        curInputs = curStep.find("input[type='text'],input[type='url']"),
        isValid = true;

    $(".form-group").removeClass("has-error");
    for(var i=0; i<curInputs.length; i++){
        if (!curInputs[i].validity.valid){
            isValid = false;
            $(curInputs[i]).closest(".form-group").addClass("has-error");
        }
    }

    if (isValid)
        nextStepWizard.removeAttr('disabled').trigger('click');
});

$('div.setup-panel div a.btn-primary').trigger('click');


