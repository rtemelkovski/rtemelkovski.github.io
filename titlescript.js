var descriptions = [
	"Computer Science Student",
	"Software Developer",
	"Open Source Enthusiast",
	"Musician and Songwriter",
	"Caffeine Lover"
]

function loadNext(cur){
	setTimeout(function(){ 
		var elem = document.getElementById("alterable-subtitle");
		elem.innerHTML = descriptions[cur];
		var next = (cur + 1) % descriptions.length;
		loadNext(next,elem);
    }, 5000);
}

window.onload = function() {
	var title = document.getElementById("alterable-subtitle")
	title.innerHTML = descriptions[0]
	loadNext(1);
};