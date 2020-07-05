console.log("yo")

//check off specific todos by clicking
//WHEN AN LI is click inside the function a UL run the code.
//on is needed for the event listener becasuse it adds listerner to new lis
$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
   
});

//event listener for delete(x)
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
}) 

$("input[type='text'").on("keypress", function(event){
    if(event.which === 13){
        //grabbing text from input
        var todoText = ($(this).val())
        $(this).val("");
        //create a new il and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")
    }
})

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
})