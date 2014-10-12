$(".save-basic-button").click(function() {
    var title = $("#title-input").val(),
        location = $("#location-input").val(),
        summary = $("#summary-input").val(),
        minPeople = $("#min-input").val(),
        maxPeople = $("#max-input").val(),
        duration = $("#duration-input").val(),
        typeDuration = $("#typeduration-input").val(),
        price = $("#price-input").val(),
        category = $("#category-input"),
        privatenotes = $("#notes-input").val(),
        pricetype = $('input:radio[name=pricetype]:checked').val();


    var formResult = {
        title: title,
        location: location,
        summary: summary,
        minPeople: minPeople,
        maxPeople: maxPeople,
        duration: duration,
        typeDuration: typeDuration,
        price: price,
        pricetype: pricetype,
        category: category,
        privatenotes: privatenotes
    };

    console.log(formResult);
});

$(".save-insider-button").click(function() {

    var name = $("#name-input").val(),
        mail = $("#mail-input").val(),
        cnumber = $("#cnumber-input").val(),
        linkvideo = $("#linkvideo-input").val(),
        biography = $("#biography-input").val(),
        language = $("#language-input").val(),
        timezone = $("#timezone-input").val(),
        news, sms;
        if($("#check-news").is(':checked')){
            news = true;
        } else{
            news = false;
        }
        if($("#check-sms").is(':checked')){
            sms = true;
        } else{
            sms = false;
        }

        var insiderResults = {
            name: name,
            mail: mail,
            cnumber: cnumber,
            linkvideo:linkvideo,
            biography:biography,
            language: language,
            timezone:timezone,
            news:news,
            sms:sms
        }
});
