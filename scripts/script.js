const praiseList = [
  'UwU',
  'OwO',
  'ÒwÓ'
];

document.getElementById("praise").addEventListener("click", praiseHer);

function praiseHer() {
  document.getElementById("praise").classList.add("hover");

  var praise = praiseList[Math.floor(Math.random() * praiseList.length)];
  alert(praise);

  setTimeout(function() {
    document.getElementById("praise").classList.remove("hover");
  }, 2000)
}