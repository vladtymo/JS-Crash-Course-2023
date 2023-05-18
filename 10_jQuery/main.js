// ------------- jQuery -------------
// syntax: $(selector).method();
const listSelector = 'ul.product-list';

// append(), prepend(), before(), after()
$(listSelector).append('<li>New Item by jQuery Append</li>');
$(listSelector).prepend('<li>New Item by jQuery Prepend</li>');

$(listSelector).before('<p>Before list element</p>');
$(listSelector).after('<p>After list element</p>');

const list = $(listSelector);

// :first, :last, :odd, :even
$('ul.product-list li:odd').css({ color: "red" });
$('ul.product-list li:even').attr('title', 'I am odd evelemt');

// ----------- events
$('ul.product-list li').on("click", function (e) {
    console.log("Clicked");

    // [this] - selector of the target DOM element
    $(this).css({ fontSize: 'larger' });
});

$('#add-form').on('submit', function (e) {
    console.log("Submit clicked!");

    // text() - get/set text content
    // html() - get/set html content
    // val()  - get/set input value
    const title = $(this).find('input[name="title"]').val();
    list.append(`<li>${title}</li>`);

    // e.preventDefault();
    // you can return false insdead of the code above
    return false;
});

// ----------- css classes
$("ul li:last").on("click", function () {

    // addClass() - add new css class
    // removeClass() - remove existign css class
    // toggleClass() - remove if exist or add if not exist
    $(this).toggleClass('text-muted');
});

// --------- navigation
$("ul li:nth-child(3)").prev().text("Element before third!");
$("ul li:nth-child(3)").next().text("Element after third!");

$("ul li").each(function (index) {

    console.log($(this).text());
});
