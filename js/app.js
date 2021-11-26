document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
  
    document.querySelector('#new-record-form').addEventListener('submit', handleFormSubmit);
    document.querySelector('#delete-button').addEventListener('click', handleDelete);
    vdocument.querySelector("#audioID").addEventListener('onmouseover', handleHover);

  })
  
const handleFormSubmit = function (event) {
    event.preventDefault();
    const album = this.album.value;
    const artist = this.artist.value;
    const release = this.release.value;
    
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


    newListItem.appendChild(innerAlbum)
    newListItem.appendChild(innerArtist)
    newListItem.appendChild(innerRelease)
    
    newListItem.classList.add('list-item');
    newListItem.classList.add('flex');

    const list = document.querySelector('#record-list');
    list.appendChild(newListItem)
    

    this.reset()
}

const handleDelete = function () {
    const resultParagraph = document.querySelector('#record-list');
    resultParagraph.textContent = '';
};


const handleHover = function () {
    const audio1 = document.querySelector('#record-list');
    function playAudio() {
        audio1.play();   
    }
}