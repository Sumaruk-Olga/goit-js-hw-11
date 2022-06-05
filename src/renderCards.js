export function renderCard(data) {
    const src = data.webformatURL;
    const alt = data.tags;

// У відповіді буде масив зображень, що задовольнили критерії 
//параметрів запиту.Кожне зображення описується об'єктом, з якого 
//тобі цікаві тільки наступні властивості:

// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.
    return `
    <div class="photo-card">
  <img src="${src}" alt="${alt}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
</div>`
}