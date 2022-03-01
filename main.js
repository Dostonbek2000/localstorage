var arr =
  JSON.parse(localStorage.getItem("mybaza")) !== null
    ? JSON.parse(localStorage.getItem("mybaza"))
    : [];

function Add() {
  var Input = document.getElementById("inp");
  if (Input.value == "") {
    alert("inputni toldiring");
  } else {
    arr.push({ name: Input.value });
    localStorage.setItem("mybaza", JSON.stringify(arr));
  }
  Initial();
  Input.value = "";
}

function Initial(params) {
  var newarr = JSON.parse(localStorage.getItem("mybaza"));

  //var next = newarr.sort(function (a, b) {
  // var textA = a.name.toUpperCase();
  // var textB = b.name.toUpperCase();
  //  return textA < textB ? -1 : textA > textB ? 1 : 0;
  //});

  var user = "";
  newarr.map((item, index) => {
    user =
      user +
      `<div>${item.name} <button onclick="Delete(${index})">del</button></div>`;
  });
  document.getElementById("text").innerHTML = user;
}



function Delete(index) {
  var newarr = JSON.parse(localStorage.getItem("mybaza"));
  newarr.splice(index, 1);
  localStorage.setItem("mybaza", JSON.stringify(newarr));
  Initial();
}

Initial();
