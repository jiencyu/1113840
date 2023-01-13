var music_name = new Array('justin.mp3','What You Know Bout Love.mp3','Galway Girl - Ed Sheeran.mp3','МиМиМи .mp3','let me down slowly.mp3','Without Ｍe--Halsey lyrics.mp3')
let play_btn = document.querySelector("#play");
let next_btn = document.querySelector("#next");
let prev_btn = document.querySelector("#prev");
let range = document.querySelector("#range");
let play_img = document.querySelector("#play_img")
let isPlaying = false;
let duration = 0;
let currentTime = 0;
let Song = new Audio();
let i = 0;
window.onload = playsong
function playsong(){
        play_btn.addEventListener('click',function(){
            Song.src=music_name[i];
            if(!isPlaying){
                Song.play();
                isPlaying = true;
                duration = Song.duration;
                range.max = duration;
                play_img.src= "https://i.postimg.cc/kX9DGSTk/pause.png"
            }else{
                Song.pause();
                isPlaying = false;
                play_img.src = "https://i.postimg.cc/1XVhBvRv/png-transparent-computer-icons-google-play-music-button-play-angle-rectangle-triangle-thumbnail.png"
            }
            range.addEventListener('change',function(){
                Song.currentTime=range.value;
            })
            Song.addEventListener('timeupdate', function(){
                range.value=Song.currentTime;
            })
            Song.addEventListener('ended',function(){
                Song.currentTime=0;
                Song.pause();
                isPlaying=false;
                range.value=0;
                play_img.src="https://i.postimg.cc/1XVhBvRv/png-transparent-computer-icons-google-play-music-button-play-angle-rectangle-triangle-thumbnail.png"
            })
        }
        )
        next_btn.addEventListener('click',function() {

            Song.pause();
            isPlaying = false;
            play_img.src = "https://i.postimg.cc/1XVhBvRv/png-transparent-computer-icons-google-play-music-button-play-angle-rectangle-triangle-thumbnail.png";
            
            i++;    
            })
        prev_btn.addEventListener('click',function() {

            Song.pause();
            isPlaying = false;
            play_img.src = "https://i.postimg.cc/1XVhBvRv/png-transparent-computer-icons-google-play-music-button-play-angle-rectangle-triangle-thumbnail.png";
            
            i-=1;    
        })
}




