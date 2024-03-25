console.log("Your index.js file is loaded correctly!");

$('.nav-item').on('click', function() {
    // Update the 'selected' class for nav items
    $('.nav-item').removeClass('selected');
    $(this).addClass('selected');

    // Update the underline position and display it
    $('.nav-underline').css({
      'width': $(this).outerWidth(),
      'left': $(this).position().left,
      'display': 'block'
    });
  });


const texts = [
    { text: "startup", possessive: "its" },
    { text: "manufacturer", possessive: "its" },
    { text: "nonprofit", possessive: "its" },
    { text: "person", possessive: "their"}
];

$(document).ready(function() {
    let currentIndex = 0;
    const changeInterval = 2500;

    function updateText() {
        $('#variableText').text(texts[currentIndex].text);
        $('#variablePossessive').text(texts[currentIndex].possessive);

        // Move to the next text for the next cycle
        currentIndex++;
        // Loop back to the first text if we've reached the end of the array
        if (currentIndex >= texts.length) {
            currentIndex = 0;
        }
    }

    
    // Initialize the text update when the page loads
    updateText();
    // Set the text to update at regular intervals
    setInterval(updateText, changeInterval);

    console.log('The text cycling script with possessive pronouns has been initialized!');
});

$(document).ready(function() {
    $('.down-arrow').on('click', function() {
      $('html, body').animate({
        scrollTop: $('#next-section').offset().top
      }, 1000);
    });
  });
  