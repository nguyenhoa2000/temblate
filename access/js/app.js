const $ = document.querySelector.bind(document);
const  $$ = document.querySelectorAll.bind(document);
var backTop = $('.back__top');
var btnSubscribe = $('.btn-sub')
var modalElement = $('.modal');
var closeModal = $('.close')
var subcribedModal = $('.modal__content button')
var modalContainer  = $('.modal__container')
var feedbackLikes = $$('.feedback__btn:first-child')
var feedbackReplies = $$('.feedback__btn:last-child')
var feedbackComment = $$('.content__post .comment')
var brandBtn = $$('.brand__btn')
console.log(brandBtn)

function start() {

    feedbackLikes.forEach(function(feedbackLike, index) {
        feedbackLike.onclick = function() {
            feedbackLike.innerHTML = '<i class="fa-solid fa-check"></i> Liked'

        }
        feedbackReplies[index].onclick = function() {
            feedbackComment[index].classList.toggle('replies')
        }
    })

    // back top
    backTop.onclick = function () {
        window.scrollTo(0, 0);
    }

    // show modal
    btnSubscribe.onclick = function () {
       modalElement.classList.add('open');
    }


    // hide modal
    closeModal.addEventListener('click', function() {
        modalElement.classList.remove('open');
    })

    subcribedModal.addEventListener('click', function() {
        modalElement.classList.remove('open');
    })
    modalElement.addEventListener('click', function() {
        modalElement.classList.remove('open');
    })
    modalContainer.addEventListener('click', function(e) {
        e.stopPropagation();
    })
}

start()






