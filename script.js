console.log("عرض صفحه: " + window.innerWidth + "px");
console.log("ارتفاع صفحه: " + window.innerHeight + "px");
//==================================================

// نمایش تب‌ها و پنهان کردن تب‌های دیگر
// function changeTab(tabName) {
//   const allTabs = document.querySelectorAll('.tab-content');
//   allTabs.forEach(tab => tab.style.display = 'none');
//   document.getElementById(tabName + '-content').style.display = 'block';
// }

// به طور پیش‌فرض، تب "پخش نمایش" نمایش داده شود
// changeTab('play');

// کد JavaScript برای تغییر تب‌ها و نمایش باکس در تب "Play"
function changeTab(tabName) {
  const allTabs = document.querySelectorAll('.tab-content');
  allTabs.forEach(tab => tab.style.display = 'none');
  
  // نمایش تب خاص
  document.getElementById(tabName + '-content').style.display = 'block';

  // نمایش باکس فقط در تب "Play"
  if (tabName === 'play') {
    document.getElementById('top-left-box').style.display = 'block';
  } else {
    document.getElementById('top-left-box').style.display = 'none';
  }
}


// به طور پیش‌فرض، تب "پخش نمایش" نمایش داده شود
changeTab('settings');



// تابعی برای نمایش ساعت و تاریخ شمسی
function updateTimeAndDate() {
    // ساعت و تاریخ میلادی را بگیرید
    var now = moment();

    // به روز رسانی ساعت
    document.getElementById("clock").innerText = now.format("HH:mm:ss");

    // به روز رسانی تاریخ شمسی
    document.getElementById("date").innerText = now.format("jYYYY/jMM/jDD");
}

// به روز رسانی هر ثانیه
setInterval(updateTimeAndDate, 1000);
console.log(moment().format("jYYYY/jMM/jDD")); // این باید تاریخ شمسی جاری را نمایش دهد

// این تابع برای خواندن فایل متنی استفاده می‌شود
fetch('namayesh/films.txt')  // مسیر نسبی به فایل films.txt
  .then(response => response.text())
  .then(data => {
    const videos = data.split('\n'); // جدا کردن فیلم‌ها با خط جدید
    const playBoxMore = document.getElementById('play-box-more');

    // حذف محتوای قبلی
    playBoxMore.innerHTML = '';

    // برای هر فیلم یک باکس ایجاد کن
    videos.forEach(video => {
      if (video.trim() !== '') {
        const videoBox = document.createElement('div');
        videoBox.classList.add('video-box');

        const videoTitle = document.createElement('div');
        videoTitle.classList.add('video-title');
        videoTitle.textContent = `فیلم: ${video.trim()}`;

        videoBox.appendChild(videoTitle);
        playBoxMore.appendChild(videoBox);
      }
    });
  })
  .catch(error => console.error('Error loading videos:', error));

  // دسترسی به عناصر HTML
const videoPlayer = document.getElementById("video-player");
const playPauseBtn = document.getElementById("play-pause-btn");
const volumeControl = document.getElementById("volume-control");
const volumeLevel = document.getElementById("volume-level");

// پخش/مکث ویدیو
playPauseBtn.addEventListener("click", () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playPauseBtn.textContent = "Pause"; // تغییر متن دکمه به Pause
  } else {
    videoPlayer.pause();
    playPauseBtn.textContent = "Play"; // تغییر متن دکمه به Play
  }
});

// تنظیم حجم صدا
volumeControl.addEventListener("input", () => {
  videoPlayer.volume = volumeControl.value;
  volumeLevel.textContent = Math.round(volumeControl.value * 100) + "%"; // نمایش حجم به صورت درصد
});

document.getElementById("hdcp-value").textContent = "2.2-AF45";

document.getElementById('folderPicker').addEventListener('change', function(event) {
  const files = event.target.files;
  const allowedExtensions = ['.enc'];

  for (const file of files) {
    const ext = file.name.substring(file.name.lastIndexOf('.'));
    if (allowedExtensions.includes(ext.toLowerCase())) {
      console.log("Allowed:", file.name);
      // process file
    } else {
      console.log("Skipped:", file.name);
    }
  }
});

const input = document.getElementById("folderPicker");
const output = document.getElementById("selected-name");

window.addEventListener("DOMContentLoaded", function () {
  const systemCodeElement = document.getElementById("system-code");
  const qrcodeContainer = document.getElementById("qrcode");

  if (systemCodeElement && qrcodeContainer) {
    const systemCode = systemCodeElement.textContent;

    // پاک‌سازی در صورت اجرای مجدد
    qrcodeContainer.innerHTML = "";

    new QRCode(qrcodeContainer, {
      text: systemCode,
      width: 120,
      height: 120,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }
});

