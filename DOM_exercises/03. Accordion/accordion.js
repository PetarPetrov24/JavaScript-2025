function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let moreInfo = document.getElementById('extra');

    if (moreInfo.style.display == 'none' || moreInfo.style.display == '') {
        moreInfo.style.display = 'block';
        button.textContent = 'Less';
    }
    else  {
        moreInfo.style.display = 'none';
        button.textContent = 'More';
        
    }
}