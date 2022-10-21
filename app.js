var btn = document.querySelector('.btn');
var form = document.querySelector('.form-login');
var wrap = document.querySelector('.form-login');
var tabs = document.querySelectorAll('.tab-content-item')
var lists = document.querySelectorAll('.list')

function showForm() {
    form.classList.add('open');
}

function hideForm() {
    form.classList.remove('open');
}

btn.addEventListener('click', showForm);
wrap.addEventListener('click', function (event) {
    if (event.target.classList.contains('form-login')) {
        hideForm();
    }
})


function removeBorder()
{
    lists.forEach(item => {
        item.classList.remove('list-border');
    })
}

function selectItem()
{
    removeBorder();
    removeShow();
    this.classList.add('list-border');
    // const tab = document.querySelector(`${this.getAttribute('')}`);
    const tab = document.querySelector(`#${this.id}-content`);
    tab.classList.add('show');
}


function removeShow()
{
    tabs.forEach(item => {
        item.classList.remove('show');
    })
}




lists.forEach(item => {
    item.addEventListener('click', selectItem)
})