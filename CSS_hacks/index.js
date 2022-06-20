let output = document.querySelector('#output')
let button = document.querySelector('#button')
let input = document.querySelector('#input')

button.addEventListener('click', () => {
    const promiseOfImages = getImagesThorughAxios(input.value)
    promiseOfImages.then(handleImagesAndShowThem)
})

function handleImagesAndShowThem(array) {
    array.map(element => {
        const img = document.createElement('img')
        img.src = element.thumbnail
        document.querySelector('#output').appendChild(img)
    })
}