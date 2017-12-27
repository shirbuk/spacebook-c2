var posts = [];
var idUnique = 1;
var text = $('#post-name').val()

//add post to the posts:
function addPosts(text, id) {
    var post = {
        "text": text,
        "id": id
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
        $('.posts').append('<div data-id="' + posts[i].id + '">' + posts[i].id + ' ' + posts[i].text + '<button type="button" class="remove">REMOVE</button></div>');
    }
}

$('.posts').on('click','.remove', function () {
    $('this'). 
})


