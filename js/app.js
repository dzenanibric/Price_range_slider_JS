const range_input = document.querySelectorAll(".range_input input"),
progress = document.querySelector(".slider .progress"),
price_input = document.querySelectorAll(".price_input input");

const price_gap = 1000;

price_input.forEach(input => {
    input.addEventListener("input", e =>{
        let min_val = parseInt(price_input[0].value),
        max_val = parseInt(price_input[1].value); 

        if((max_val - min_val >= price_gap) && max_val <= 10000){
            if(e.target.className === "min_price_input_field"){
                range_input[0].value = min_val;
                progress.style.left = (min_val / range_input[0].max) * 100 + "%";
            }
            else{
                range_input[1].value = max_val;
                progress.style.right = 100 - (max_val / range_input[1].max) * 100 + "%";
            }
        }
    });
});
range_input.forEach(input => {
    input.addEventListener("input", e =>{
        let min_val = parseInt(range_input[0].value), 
        max_val = parseInt(range_input[1].value); 

        if(max_val - min_val < price_gap){
            if(e.target.className === "range_min"){
                range_input[0].value = max_val - price_gap;
            }
            else{
                range_input[1].value = min_val + price_gap;
            }
        }
        else{
            price_input[0].value = min_val;
            price_input[1].value = max_val;
            progress.style.left = (min_val / range_input[0].max) * 100 + "%"; 
            progress.style.right = 100 - (max_val / range_input[1].max) *100 + "%";
        }
    });
});