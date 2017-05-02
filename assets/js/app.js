document.getElementById("explorer").addEventListener("click",function(){

	var nav2 = document.getElementById("navbar2");
		
		if (nav2.classList) 
			{nav2.classList.toggle("visible");} 

    	else {
        		var classes = nav2.className.split(" ");
        		var i = classes.indexOf("visible");

        		if (i >= 0) 
            	classes.splice(i, 1);

        		else 
            		classes.push("visible");
            	nav2.className = classes.join(" "); 
    }



})