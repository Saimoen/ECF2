function goTheTop() {
    let top = document.getElementById('top')

    top.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth'})
    })
}
