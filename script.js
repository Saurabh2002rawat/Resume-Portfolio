var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for (let tablink of tablinks){
            tablink.classList.remove("active-link") ;
        }
        for (let tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab") ;
        }
        event.currentTarget.classList.add ("active-link") ;
        document.getElementById(tabname).classList.add("active-tab") ;
    }

     
var sidemenu = document.getElementById("sidemenu") ;
function openmenu(){
    sidemenu.style.right = "0" ;
}
function closemenu(){
    sidemenu.style.right = "-200px" ;
}

function more () {
    let moreButton = document.getElementById ("seeMore") ; 
    let moreCards = document.querySelectorAll (".hidden") ;
    let isHidden = moreCards[0].classList.contains( "show") ;

    moreCards.forEach( card => {
        card.classList.toggle ("show") ;
    } ) ;
    moreButton.textContent = isHidden ? "See Less" : "See More" ;
}

function sendMail() {
    emailjs.init("0k6kAWDUURHINjv27");  // EmailJS User ID

    let params = {
        name: document.getElementById("Name").value,
        email: document.getElementById("Email").value,
        msg: document.getElementById("msg").value,
        subject: document.getElementById("subject").value

    };

    emailjs.send("service_yb1qecp", "template_e2cd9y7", params)
    .then(function(response) {
        alert("Thanks for the Mail ! Will Contact You Soon !");
    }, function(error) {
        alert("Failed to send email: " + error);
    });
    return false ;
}