document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
  
    document.querySelector('#new-item-form').addEventListener('submit', handleFormSubmit);
  })
  
const handleFormSubmit = function (event) {
    event.preventDefault();
    const album = this.album.value;
    const artist = this.artist.value;
    const release = this.release.value;
    const colour = this.colour.value;
    
    const newListItem = document.createElement('li');

    const innerAlbum = document.createElement('div');
    innerAlbum.classList.add('show-album');
    innerAlbum.textContent = album;

    const innerArtist = document.createElement('div');
    innerArtist.classList.add('show-artist');
    innerArtist.textContent = artist;

    const innerRelease = document.createElement('div');
    innerRelease.classList.add('show-release');
    innerRelease.textContent = release;

    const innerColour = document.createElement('div');
    innerColour.classList.add('show-colour');
    innerColour.textContent = colour;

    newListItem.appendChild(innerAlbum)
    newListItem.appendChild(innerArtist)
    newListItem.appendChild(innerRelease)
    newListItem.appendChild(innerColour)

    const list = document.querySelector('#record-list');
    list.appendChild(newListItem)
    
    this.reset()
}