$(document).ready(function(){
    $("form").on('submit',function(e){
        e.preventDefault();
        let task = $(".task").val();
        let newTask = $('<li></li>');

        $(`<li>${task}</li>`).appendTo(newTask);
        $(newTask).appendTo('ul');

        $('li').click(function (){
            $(this).addClass('selected');
        });

        $(".task").val('');
    })
})