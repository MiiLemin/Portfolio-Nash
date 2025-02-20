function toggleText(id) {
    var allTexts = document.querySelectorAll('.game-info');

    allTexts.forEach(function(text) {
        if (text.id === id) {
          
            text.style.display = (text.style.display === "block") ? "none" : "block";
        } else {
            
            text.style.display = "none";
        }
    });
}
