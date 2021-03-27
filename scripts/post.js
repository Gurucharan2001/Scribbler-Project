//Edit button 
$(document).ready(function(){
    $(".edit-btn").click(function(){
        $("#edit-btn").html("Save  <i class='fa fa-save'></i>")
        var edit_box = $("<textarea cols='200' rows='13'></textarea>")
        edit_box.attr("id","edited-text-box")
        var text_post = $("#blog-text").html()
        edit_box.html(text_post)
        $("#post-text1").append(edit_box)
        $("#blog-text").css("display","none")
        $("#edit-btn").css("border","none")
    })

    //like button
    $(".like-btn").click(function(){
        $(".like-btn").html("<i class='fa fa-thumbs-up'></i> Liked!")
    })


    //code for comments
    $("#comment-form").on("submit",function(e){
        e.preventDefault()
        $("#all-comments").css("display","block")
        var comment_box = $("<div style='width:100%;height:35px;background-color:white;margin-bottom:5px'></div>")
        var para = $("<p></p>")
        var comment = $("#txt-area").val()
        para.html(comment)
        comment_box.append(para)
        $("#comments-on-post").append(comment_box)
        $(".jumbotron").css("display","block")
    })
})
