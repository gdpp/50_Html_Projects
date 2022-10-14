const joke = document.getElementById('joke');
const btn = document.getElementById('joke-btn');

newJoke();

btn.addEventListener('click', newJoke);

async function newJoke(){
	const params = {
		headers: {
			'Accept': 'application/json'
		}
	};

	const res = await fetch('https://icanhazdadjoke.com', params);
	const data = await res.json(); 
	joke.innerHTML = data.joke;
}