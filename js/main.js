const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// select tab content item
function selectItem(e) {
    removeShow();
    // add border to current tab
    this.classList.add('tab-border');
    // GRAB content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //ADD show class
    tabContentItem.classList.add('show');

}



function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}
// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
