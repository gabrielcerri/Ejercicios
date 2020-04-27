//1.  crear reproductor con una canción y un botón de play y pausa X
//2.  poner un solo botón que se llame "play/pausa" que ponga play si la canción está pausada y pausa si la canción esta sonando X
//3. agregar múltiples canciones y un botón de anterior y uno de siguiente


window.onload = (function (){

	const playStopButton = document.querySelector('.ps')
	const nextButton = document.querySelector('.next')
	const prevButton = document.querySelector('.prev')
	const audio = document.querySelector('audio')

	let sound = false
	let indiceSong = 0;


	const songs = ['songs/Mobb Deep - Survival of the Fittest [Explicit] --R.I.P. Prodigy--.mp3',
	 'songs/Gang Starr - Full Clip.mp3',
	 'songs/Big L - MVP.mp3']
	 console.log(songs)


	window.addEventListener ('MediaPlayPause', function(event){
		if(event=== "MediaPlayPause") {

		if(!sound) {
			audio.play()
			playStopButton.innerHTML = 'Pause'
			sound=true
			console.log(audio)
			} else {
				audio.pause()
				playStopButton.innerHTML ='Play'
				sound= false
				}


		}
	}, false)

	playStopButton.onclick = function () {
		if(!sound) {
			audio.play()
			playStopButton.innerHTML = 'Pause'
			sound=true
			
		} else {
			audio.pause()
			playStopButton.innerHTML ='Play'
			sound= false
		}

	}

	

	nextButton.onclick = function () {
		indiceSong++
		if(indiceSong>2){
			indiceSong=0

		}

		audio.src=songs[indiceSong]

		audio.play()
		
	}

	prevButton.onclick = function () {

		indiceSong--
		if (indiceSong<2) {
			indiceSong=0
		}

		audio.src=songs[indiceSong]
		audio.play()
	}

})