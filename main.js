var posts = [];
var idUnique = 1;
var text = $('#post-name').val()
var comments = [];

//add post to the posts:
function addPosts(text, id) {
    var post = {
        "text": text,
        "idUniqe": id,
    }
    posts.push(post);
};


$('.btn').on('click', function () {
    addPosts($('#post-name').val(), idUnique);
    idUnique++;
    renderPost();
})

function renderPost() {
    $('.posts').empty();
    for (var i = 0; i < posts.length; i++) {
        $('.posts').append
        ('<div data-id="' + posts[i].id + '">' 
        + posts[i].id + ' ' + posts[i].text 
        + '<button type="button" class="remove">REMOVE</button>' 
        + '<input class="add-Comment" type="text" placeholder="leave a comment">'
        + '<button type="button" class="comment-Button">COMMENT</button></div>');
    }
}

$('.posts').on('click','.remove', function () {
    var removePosts = $('this').closest("div").data().id;
    posts.splice(removePosts, 1);
    renderPost();
})


$('.btn').on('click','.add-comment', function() {
    var addIt = $('this').closest("div").data().id;
    renderPost();
})
