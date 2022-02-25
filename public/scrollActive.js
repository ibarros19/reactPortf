var removeActiveClass = function (elements) {
    for (var i = 0; i < elements.length; ++i) {
        elements[i].classList.remove('active');
    }
}

function formValidate (el, idError, message) {
    if (!el.value.trim()) {
        document.getElementById(idError).textContent = message
    }
}

window.addEventListener('scroll', function onScroll() {
    var anchors = document.querySelectorAll('.site-menu-item');
    const topDiff = 120
    var foundActive = false
    for (var i = anchors.length-1; i >= 0; i--) {
        const id = anchors[i].getAttribute('href').substring(1)
        var sectionEl = document.getElementById(id);
        var sectionElTop = sectionEl.getBoundingClientRect().top;
        var sectionElTopAbs = window.scrollY + sectionElTop
        if (window.scrollY < 30) {
            removeActiveClass(anchors);
            break;
        }
        else if (window.scrollY > sectionElTopAbs - topDiff) {
            const hasActive = anchors[i].classList.contains("active");
            if (!hasActive) {
                removeActiveClass(anchors);
                anchors[i].classList.add("active");
            }
            foundActive = true
            // console.log(id, window.scrollY, sectionElTopAbs)
            break;
        }
        
    }

    if (!foundActive) {
        removeActiveClass(anchors);
    }
})

