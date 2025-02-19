function Playlist() {
  this.songs = [];

  Playlist.prototype.addSong = (song) => {
    this.songs.push(song)
  };
}

const song = "Sunn Raha Hai - Aashiqui 2"
const playlist = new Playlist()
playlist.addSong(song)
console.log(playlist.songs);
