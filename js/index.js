console.log("Your index.js file is loaded correctly!");

const texts = [
    { text: "bootstrapped startup", possessive: "its" },
    { text: "global manufacturer", possessive: "its" },
    { text: "nonprofit", possessive: "their" },

    { text: "brand", possessive: "their" },
    { text: "person", possessive: "their"}
];

$(document).ready(function() {
    let currentIndex = 0;
    const changeInterval = 3000; // 3000 milliseconds = 3 seconds

    function updateText() {
        // Update the variable text
        $('#variableText').text(texts[currentIndex].text);
        // Update its possessive pronoun
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
