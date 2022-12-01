function goTheTop() {
    // pointe l'élément html
  let top = document.getElementById("toTheTop");

    //ajout d'un écouteur/événement
  top.addEventListener("click", () => {
    //au clique tu scroll la fenêtre
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
