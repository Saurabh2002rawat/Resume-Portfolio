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
    emailjs.init("H2GqXCckiBf4XAKk4");  // EmailJS User ID

    let params = {
        name: document.querySelector("input[name='Name']").value,
        email: document.querySelector("input[name='Email']").value,
        message: document.querySelector("textarea[name='msg']").value
    };

    emailjs.send("service_4wv5b7c", "template_dddzlsu", params)
    .then(function(response) {
        alert("Email sent successfully!");
    }, function(error) {
        alert("Failed to send email: " + error);
    });
}
    
