
const button = document.querySelectorAll('.tabButton');

button.forEach(function(btn) {
  btn.addEventListener('click', tabClick);
})

function tabClick(event) {

  let currentTab = document.querySelectorAll('.active');

  currentTab.forEach(function(tab) {

    tab.classList.remove('active');
    event.target.parentElement.classList.add('active');
    document.querySelectorAll('.tabInner').forEach(el => el.classList.remove('on'));
    document.getElementById(event.target.href.split('#')[1]).classList.add('on');
  })
};


