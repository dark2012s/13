window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.start__start-button').addEventListener('click', function(){
        document.querySelector('.survey__box-1').classList.toggle('is-active')
        document.querySelector('.start__box').classList.toggle('not-active')
    })
    document.getElementById('submit1').addEventListener('click', function(){
        document.querySelector('.survey__box-2').classList.toggle('is-active')
        document.getElementById('survey__question-1').style.display = "none"
    })
    document.getElementById('submit2').addEventListener('click', function(){
        document.querySelector('.survey__box-3').classList.toggle('is-active')
        document.getElementById('survey__question-2').style.display = "none"
    })
    document.getElementById('submit3').addEventListener('click', function(){
        document.querySelector('.survey__box-4').classList.toggle('is-active')
        document.getElementById('survey__question-3').style.display = "none"
    })
    document.getElementById('submit4').addEventListener('click', function(){
        document.querySelector('.survey__box-5').classList.toggle('is-active')
        document.getElementById('survey__question-4').style.display = "none"
    })
    document.getElementById('submit5').addEventListener('click', function(){
        document.querySelector('.survey__box-6').classList.toggle('is-active')
        document.getElementById('survey__question-5').style.display = "none"
    })
    document.getElementById('submit6').addEventListener('click', function(){
        document.querySelector('.survey__box-7').classList.toggle('is-active')
        document.getElementById('survey__question-6').style.display = "none"
    })
    document.getElementById('submit7').addEventListener('click', function(){
        document.querySelector('.survey__box-8').classList.toggle('is-active')
        document.getElementById('survey__question-7').style.display = "none"
    })

let answers = {
    
}
})