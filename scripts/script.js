const praiseList = [
  'Praise the almighty chrissy UwU',
  'Praise the most beautiful chrissy OwO',
  'Praise the most intelligent chrissy ÒwÓ',
  'Sending chrissy positive vibes OwO'
];

document.getElementById("praise").addEventListener("click", praiseHer);
getCounter();



function praiseHer() {
  var praise = praiseList[Math.floor(Math.random() * praiseList.length)];
  triggerSweetAlert(praise);
  upPraiseCounter();
}

function triggerSweetAlert(text) {
  Swal.fire({
    text: text,
    confirmButtonText: 'Praise the Chrissy!'
  })
}

function upPraiseCounter() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getCounter();
    }
  };
  xhttp.open("POST", "functions/praise_counter.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("praise=1");
}


function getCounter() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("count").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "functions/get_praise_counter.php", true);
  xhttp.send(); 
}