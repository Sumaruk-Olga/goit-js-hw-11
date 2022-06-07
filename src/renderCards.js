export function renderCard({webformatURL, tags, likes, views, comments, downloads, largeImageURL}) {

    return `
    <div class="photo-card">
    <a class="card-big-img" href="${largeImageURL}">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" class="card-img"/>
  </a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      <span>${likes}</span>
    </p>
    <p class="info-item">
      <b>Views</b>
      <span>${views}</span>
    </p>
    <p class="info-item">
      <b>Comments</b>
      <span>${comments}</span>
    </p>
    <p class="info-item">
      <b>Downloads</b>
      <span>${downloads}</span>
    </p>
  </div>
</div>`
}