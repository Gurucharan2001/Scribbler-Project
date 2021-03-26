$(document).ready(function(){
    $("#create-form").on("submit",function(){
        e.preventDefault()
        alert("Post created")
        this.reset()
        
    })
})