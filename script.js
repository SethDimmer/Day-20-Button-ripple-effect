const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click',function (e) {
        const x = e.clientX
        const y = e.clientY
        // console.log(x, y)

        // e.target means the element the EVENT FIRES OFF OF in this case it is the button.
        const buttonTop = e.target.offsetTop
        // offset = equals where it starts in this case starts from the top or left
        const buttonLeft = e.target.offsetLeft

        // console.log(buttonTop, buttonLeft)
        // this console logging the position of the button itself NOT WHERE I CLICK

        // i want to calculate where in the button i click

        // xInside means inside the button
                        // clicking the x value in the entire  viewport then subtracting from the buttonTop the offset of it self
        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        // console.log(xInside, yInside)


        // ---------------------------------------------------------------------------------------------------------------

        // creating a circle element that i want to bring in to the DOM from my HTML
        const circle = document.createElement('span')
        circle.classList.add('circle')
        // adding the class of circle

        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        
        // PROBLEM WITH VANILLA JS IS I HAVE TO HANDLE EVERYTHING IF I PUT SOMETHING 
        // INTO THE DOM I HAVE TO REMOVE IT FROM THE DOM.

        setTimeout(() => circle.remove(), 500)
    })
})