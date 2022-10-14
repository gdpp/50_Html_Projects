const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
let loading = 0;

let int = setInterval(blurImg, 30);

function blurImg(){
	loading++;
	
	if(loading > 99){
		clearInterval(int);
	}
	
	loadingText.innerText = `${loading}%`;
	loadingText.style.opacity = scale(loading, 0, 100, 1, 0);
	bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
	return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}