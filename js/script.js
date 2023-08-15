document.addEventListener("DOMContentLoaded", function (event) {
	document.querySelector("#chicken").addEventListener("click", function () {
	  // Call server to get the entry and the items
	  var xttp = new XMLHttpRequest();
	  xttp.onreadystatechange = function () {
		if ((this.readyState == 4) && (this.status == 200)) {
		  var items = JSON.parse(this.responseText);
  
		  // Create a container to hold all the items
		  var itemsContainer = document.createElement("div");
  
		  // Loop through each item in the JSON array
		  for (var i = 0; i < items.length; i++) {
			// Clone the item template content
			var itemTemplate = document.querySelector("#item-template").content.cloneNode(true);
  
			// Replace the placeholders in the template with the data from the JSON
			itemTemplate.querySelector(".section-title").textContent = items[i].name;
			itemTemplate.querySelector("p").textContent = items[i].description;
  
			// Append the modified item to the container
			itemsContainer.appendChild(itemTemplate);
		  }
  
		  // Replace the content of the #content div with the items container
		  document.querySelector(".container").innerHTML = "";
		  document.querySelector(".menu").innerHTML = "Lunch";
		  document.querySelector(".container").appendChild(itemsContainer);
		  document.querySelector(".back").innerHTML = "Back";

		}
	  };
	  xttp.open("GET", "data/chicken.json", true);
	  xttp.send(null); // for POST only
	});
  });
  
  document.addEventListener("DOMContentLoaded", function (event) {
	document.querySelector("#beef").addEventListener("click", function () {
	  // Call server to get the entry and the items
	  var xttp = new XMLHttpRequest();
	  xttp.onreadystatechange = function () {
		if ((this.readyState == 4) && (this.status == 200)) {
		  var items = JSON.parse(this.responseText);
  
		  // Create a container to hold all the items
		  var itemsContainer = document.createElement("div");
  
		  // Loop through each item in the JSON array
		  for (var i = 0; i < items.length; i++) {
			// Clone the item template content
			var itemTemplate = document.querySelector("#item-template").content.cloneNode(true);
  
			// Replace the placeholders in the template with the data from the JSON
			itemTemplate.querySelector(".section-title").textContent = items[i].name;
			itemTemplate.querySelector("p").textContent = items[i].description;
  
			// Append the modified item to the container
			itemsContainer.appendChild(itemTemplate);
		  }
  
		  // Replace the content of the #content div with the items container
		  document.querySelector(".container").innerHTML = "";
		  document.querySelector(".menu").innerHTML = "Dinner";
		  document.querySelector(".container").appendChild(itemsContainer);
		  document.querySelector(".back").innerHTML = "Back";

		}
	  };
	  xttp.open("GET", "data/beef.json", true);
	  xttp.send(null); // for POST only
	});
  });
  
  document.addEventListener("DOMContentLoaded", function (event) {
	document.querySelector("#sushi").addEventListener("click", function () {
	  // Call server to get the entry and the items
	  var xttp = new XMLHttpRequest();
	  xttp.onreadystatechange = function () {
		if ((this.readyState == 4) && (this.status == 200)) {
		  var items = JSON.parse(this.responseText);
  
		  // Create a container to hold all the items
		  var itemsContainer = document.createElement("div");
  
		  // Loop through each item in the JSON array
		  for (var i = 0; i < items.length; i++) {
			// Clone the item template content
			var itemTemplate = document.querySelector("#item-template").content.cloneNode(true);
  
			// Replace the placeholders in the template with the data from the JSON
			itemTemplate.querySelector(".section-title").textContent = items[i].name;
			itemTemplate.querySelector("p").textContent = items[i].description;
  
			// Append the modified item to the container
			itemsContainer.appendChild(itemTemplate);
		  }
  
		  // Replace the content of the #content div with the items container
		  document.querySelector(".container").innerHTML = "";
		  document.querySelector(".menu").innerHTML = "Sandwiches";
		  document.querySelector(".container").appendChild(itemsContainer);
		  document.querySelector(".back").innerHTML = "Back";
		  
		  
		}
	  };
	  xttp.open("GET", "data/sushi.json", true);
	  xttp.send(null); // for POST only
	});
	
  });
  
  
