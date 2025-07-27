console.log("عرض صفحه: " + window.innerWidth + "px");
console.log("ارتفاع صفحه: " + window.innerHeight + "px");
// نمایش تب‌ها و پنهان کردن تب‌های دیگر
function changeTab(tabName) {
  const allTabs = document.querySelectorAll('.tab-content');
  allTabs.forEach(tab => tab.style.display = 'none');
  document.getElementById(tabName + '-content').style.display = 'block';
}

// به طور پیش‌فرض، تب "پخش نمایش" نمایش داده شود
changeTab('play');

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
changeTab('play');


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
