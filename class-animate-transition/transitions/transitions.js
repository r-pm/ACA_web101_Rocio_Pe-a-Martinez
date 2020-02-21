function initCubicBezier(el) {
  // console.log('document', document.querySelector('.timing-component-track'))
  let parentWidth = el.parentElement.clientWidth
  let childWidth = el.clientWidth
  el.classList.toggle('active')
  let marginLeft = el.style.marginLeft = ((parentWidth - childWidth) - 12) + 'px'; 
}