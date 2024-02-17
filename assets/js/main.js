const usersDom = document.querySelector(".cards__items");
let allUsers = [];

document.addEventListener('DOMContentLoaded',()=>{
    axios
    .get("http://localhost:3000/items")
    .then((res)=>{
       allUsers = res.data;
       renderUsers(allUsers);
    })
    .catch((err)=>{
       console.log("Data does not load");
    })
});
function renderUsers(_users) {
    allUsers.map((user)=>{
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('cards__item');
        cardDiv.innerHTML=`
       <div class="cards__header">
            <div class="cards__documents">
                <span class="cards__number">${user.id}</span>
                <a href="#">آپلود مستندات</a>
            </div>
            <span class="cards__span">${user.date}</span>
        </div>
        <div class="cards__request">
            <div class="cards__request__title">
                <h2>درخواست عضویت</h2>
                <span class="cards__span">شناسه درخواست ${user.reqNum} # </span>
            </div>
            <div class="cards__person">
                <img src=${user.img} alt="">
                <h3>${user.name}</h3>
            </div>
        </div>
        <div class="cards__btn">
            <a href="#">
                مشاهده درخواست 
            </a>
        </div>
        `;
        usersDom.appendChild(cardDiv);
    }); 
}