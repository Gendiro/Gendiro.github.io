const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {observer.observe(el)});

function change_pic(index) {
    const pic = document.getElementById("plan_img");
    pic.src = "floor_" + index + ".png";
    const description = document.getElementById("description");
    switch(index) {
        case 1:
            description.innerHTML = "Этот этаж будет служить входом в великий шпиль, ознаменовывая путь вверх или вниз по великому шпилю, ну и все такое, викинг, делай блять описание ну ебанный рот, я устал кодить";
            break;
        case 2:
            description.innerHTML = "Описание для второго этажа чтоб отличить можно было";
            break;
        default:
            description.innerHTML = "Пшел отсюдова! Не написано еще!";
            break;
    }
}