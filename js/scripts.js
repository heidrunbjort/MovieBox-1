var r = new XMLHttpRequest(); //hluti af javascript
r.open("GET", 'https://api.themoviedb.org/3/movie/550?api_key=b121c7cc62271f6902d3cd115457a166', true);
r.onreadystatechange = function () {
  if (r.readyState != 4 || r.status != 200) return;
//  alert("Success: " + r.responseText);
	const response = JSON.parse(r.responseText);
	const container = document.createElement("div");
	const image = document.createElement("img");
	const title = document.createElement("h1");
	//image.src = "http://image.tmdb.org/t/p/original" + response.backdrop_path;
	title.innerHTML = response.original_title;
	//container.append(image);
	container.append(title);
	document.getElementById("test").append(container);
};
r.send("banana=yellow");