const fondo = document.querySelector('.fondo')
const colors = ['Material/Q_azul.png','Material/Q_rosa.png','Material/Q_azul2.png','Material/Q_rosa2.png']

const figures = () => {
    for(let i=0; i<=100; i++){
        let img = document.createElement('img')
        let select = Math.round(colors.length * Math.random())
        img.src = colors[select >= colors.length ? select - 1 :select]
        console.log(img)

        img.style.top = innerHeight * Math.random()+'px'
        img.style.left = innerWidth * Math.random()+'px'
        img.style.rotate = 360 * Math.random()+'deg'
        
        fondo.appendChild(img)

        setInterval(() => {
            img.style.top = innerHeight * Math.random()+'px'
            img.style.left = innerWidth * Math.random()+'px'
            img.style.rotate = 360 * Math.random()+'deg'    
        }, 15000)
    }

    for(let i=0; i<=2; i++){
        let img = document.createElement('img')
        img.src = 'Material/P_Azul.png'
        console.log(img)

        img.style.top = innerHeight * Math.random()+'px'
        img.style.left = innerWidth * Math.random()+'px'
        img.style.rotate = 360 * Math.random()+'deg'
        img.style.width = '80px'
        img.style.height = 'auto'
        img.style.transition = '25s'
        
        fondo.appendChild(img)

        setInterval(() => {
            img.style.top = innerHeight * Math.random()+'px'
            img.style.left = innerWidth * Math.random()+'px'
            img.style.rotate = 360 * Math.random()+'deg'   
        }, 25000)
    }

    for(let i=0; i<=2; i++){
        let img = document.createElement('img')
        img.src = 'Material/P_rosa.png'
        console.log(img)

        img.style.top = innerHeight * Math.random()+'px'
        img.style.left = innerWidth * Math.random()+'px'
        img.style.rotate = 360 * Math.random()+'deg'
        img.style.width = '80px'
        img.style.height = 'auto'
        img.style.transition = '25s'
        
        fondo.appendChild(img)

        setInterval(() => {
            img.style.top = innerHeight * Math.random()+'px'
            img.style.left = innerWidth * Math.random()+'px' 
            img.style.rotate = 360 * Math.random()+'deg'   
        }, 25000)
    }

}

figures()
