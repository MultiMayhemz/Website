function darkMode() {
   var element = document.body;

   element.classList.toggle("dark");

   alert("Everything you've done in life led you to click this button... Ok carry on now.")
}

function openNav() {
  document.getElementById("sidebarID").style.width = "170px";

  document.getElementById("everything").style.marginLeft = "170px";

}

function closeNav() {
  document.getElementById("sidebarID").style.width = "0px";

  document.getElementById("everything").style.marginLeft = "0px";
}

function searchFunction() {
  var input, filter, ul, li, a, i;

  input = document.getElementById("Search");

  filter = input.value.toUpperCase();

  ul = document.getElementById("Menu");

  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {

    a = li[i].getElementsByTagName("a")[0];

    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    }
    else {
      li[i].style.display = "none";
    }
  }
}
