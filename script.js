function goTheTop() {
    let top = document.getElementById('toTheTop')

    top.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth'})
    })
}
