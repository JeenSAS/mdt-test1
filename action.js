window.onload = pageLoad;
function pageLoad()
{
  var a = document.getElementById("WorkPage");
  a.style.display = "none";

    var a = document.getElementById("AboutMeButton");
    a.onclick = AboutMePage;
    var b = document.getElementById("WorkButton");
    b.onclick = WorkPage;
}
function AboutMePage() {
  var a = document.getElementById("AboutMePage"); 
  var b = document.getElementById("WorkPage");
  if (a.style.display === "none") {
    a.style.display = "block";
    b.style.display = "none";
  } else {
    a.style.display = "block";
    b.style.display = "none";
  }
}
function WorkPage() {
  var a = document.getElementById("AboutMePage"); 
  var b = document.getElementById("WorkPage");
  if (b.style.display === "none") {
    a.style.display = "none";
    b.style.display = "block";
  } else {
    a.style.display = "none";
    b.style.display = "block";
  }
}