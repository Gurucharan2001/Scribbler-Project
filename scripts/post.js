//Edit button 
$(document).ready(function(){
    $(".edit-btn").click(function(){
        $("#edit-btn").css("display","none")
        $("#save-btn").css("display","block")
        var edit_content = $("<textarea cols='200' rows='13'></textarea>")
        edit_content.attr("id","edited-text-box")
        var text_post = $("#blog-text").html()
        edit_content.html(text_post)
        $("#post-text1").append(edit_content)
        
        var edit_title = $("<textarea cols='30' rows='1' style='font-size:18px;'></textarea>")
        var post_title = $("#post-title").html()
        edit_title.attr("id","edited-title")
        edit_title.html(post_title)
        $("#main-box").append(edit_title)
        $("#post-title").css("display","none")
        edit_title.css("margin-left","40%")


        $("#blog-text").css("display","none")
        $("#edit-btn").css("border","none")
    })

    //save the new post
    $("#save-btn").click(function(){
        $("#edit-btn").css("display","block")
        $("#save-btn").css("display","none")

        $("#blog-text").html()
        $("#post-title").html()


        var new_post = $("textarea#edited-text-box").val()
        var edited_title = $("textarea#edited-title").val()
        $("#blog-text").css("display","block")
        $("#blog-text").html(new_post)

        $("#post-title").css("display","block")
        $("#post-title").html(edited_title)
        $("#edited-title").css("display","none")
        $("#edited-text-box").css("display","none")
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
