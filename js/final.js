const linkAdobe = document.querySelector('.link-adobe');
const linkCad = document.querySelector('.link-cad');
const linkPhotos = document.querySelector('.link-photos');

linkAdobe.addEventListener('mouseover', () => {
  const imageGroup = document.querySelector('.image-group1');
  imageGroup.style.display = 'block';
});

linkCad.addEventListener('mouseover', () => {
  const imageGroup = document.querySelector('.image-group2');
  imageGroup.style.display = 'block';
});

linkPhotos.addEventListener('mouseover', () => {
  const imageGroup = document.querySelector('.image-group3');
  imageGroup.style.display = 'block';
});
