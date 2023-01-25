const form = document.querySelector("#searchForm")
form.addEventListener('submit', async function (e) {
  e.preventDefault();
  //console.log("submitted!")
  const searchTerm = form.elements.query.value
  const config = { params: { q: searchTerm, isFunny: 'colt' }, header: {} }
  const res = await axios.get(`http://api.tvmaze.com/search/shows?`, config);
  //console.log(res.data)
  addImages(res.data)
  form.elements.query.value = ''


})



const addImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG")
      img.src = result.show.image.medium;
      document.body.append(img)
    }
  }
}