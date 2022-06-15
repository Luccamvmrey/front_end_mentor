const accordion = document.querySelectorAll(".question");

accordion.forEach(item => {
  item.addEventListener("click", function() {

    const answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "";
    } else if (answer.style.display === "") {
      answer.style.display = "block";
    }
  })
})