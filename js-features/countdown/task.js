const updateCountdown = function(){
	const timer = document.getElementById("timer");
	if(timer.textContent > 0){
		timer.textContent--;
        if(timer.textContent == 0) {
            alert("Вы победили в конкурсе!");
        }
	}	
}

setInterval(updateCountdown, 1000);