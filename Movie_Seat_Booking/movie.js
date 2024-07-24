const seatAll=document.querySelectorAll('div.seat');
const nb_seat=document.getElementById('nb_seat');
const price_node=document.getElementById('price');
const movie=document.querySelector('#movies');
const movie_price=movie.selectedOptions[0].value;

let count=0;
let price=0;


function resume(){
    nb_seat.textContent=count;
    price_node.textContent=parseInt(price_node.textContent);
}


function handleclick(){
    for (const seat of seatAll) {
        seat.addEventListener('click', ()=>{

            if(!seat.classList.contains('seat_occupied')){
                if(seat.classList.contains('seat_na')){
                    seat.classList.remove('seat_na');
                    seat.classList.add('seat_selected');
                    count+=1;
                }else if(seat.classList.contains('seat_selected')){
                    seat.classList.remove('seat_selected');
                    seat.classList.add('seat_na');
                    count-=1;
                }
            }

            resume();
            console.log(movie_price + "€");
        })
    }
}

handleclick();

