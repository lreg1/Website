const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})



function setupCarousel(imgsId, leftBtnId, rightBtnId, textAreaId, texts) {
    const imgs = document.getElementById(imgsId);
    const leftBtn = document.getElementById(leftBtnId);
    const rightBtn = document.getElementById(rightBtnId);
    const textArea = document.getElementById(textAreaId);
  
    const img = imgs.querySelectorAll('img');
    let idx = 0;
  
    let interval = setInterval(run, 2000);
  
    function run() {
      idx++;
      changeImage();
    }
  
    function changeImage() {
      const carouselWidth = imgs.parentElement.clientWidth; // Dynamically get carousel width
      if (idx > img.length - 1) {
        idx = 0;
      } else if (idx < 0) {
        idx = img.length - 1;
      }
      imgs.style.transform = `translateX(${-idx * carouselWidth}px)`;
      textArea.innerHTML = `<p>${texts[idx]}</p>`;
    }
  
    function resetInterval() {
      clearInterval(interval);
      interval = setInterval(run, 2000);
    }
  
    rightBtn.addEventListener('click', () => {
      idx++;
      changeImage();
      resetInterval();
    });
  
    leftBtn.addEventListener('click', () => {
      idx--;
      changeImage();
      resetInterval();
    });
  }
  
  // Initialize the carousels
  setupCarousel('imgs1', 'left1', 'right1', 'text-area1', [
    'Yeshiva-Wide Siyum on Maseches Kiddushin!',
    'Special Guest Shiur from Rav Asher Weiss Shlit"a!',
    'Masmidim Chabura has special Q and A with Rebbeim!',
    'All Night Thursday Night Learning is Back!',
  ]);
  
  setupCarousel('imgs2', 'left2', 'right2', 'text-area2', [
    'Star Student Ari Regensberg finishes First Place in CS competition',
    'Teacher of the Year Awarded to our very own Proffessor Fried',
    'Community-Wide October 7th Commemeration',
    'LCM Graduate wins Nobel Peace Prize for Curing Cancer!',
  ]);
  
