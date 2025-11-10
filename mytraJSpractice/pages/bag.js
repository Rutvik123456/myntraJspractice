
// 10/11/25

let bag_container_ele = [1,4,6];

let new_bag_con_ele = bag_container_ele.map(value => {
  for(let i=0;i<items.length;i++){
    if(items[i].id == value){
      return items[i];

    }
  }
})

// console.log(new_bag_con_ele);

// ------------------------------------------------------------



// const item1 = 
//     { 
//         id: '001',
//         image: 'images/1.jpg',
//         company: 'Carlton London',
//         item_name: 'Rhodium-Plated CZ Floral Studs',
//         original_price: 1045,
//         current_price: 606,
//         discount_percentage: 42,
//         return_period: 14,
//         delivery_date: '10 Oct 2023',
//         rating: {
//             stars: 4.5,
//             count: 1400,
//         }}


loadbic ();

function loadbic (){
    let innerhtml_bag_items_container = document.querySelector('.bag-items-container');
                new_bag_con_ele.forEach (){innerhtml_bag_items_container.innerHTML += ( (i) =>{ `<div class="bag-item-container">

            <div class="item-left-part">
              <img class="bag-item-img" src="../${new_bag_con_ele[i].image}">
            </div>
            <div class="item-right-part">
              <div class="company">${new_bag_con_ele[i].company}</div>
              <div class="item-name">${new_bag_con_ele[i].item_name}</div>
              <div class="price-container">
                <span class="current-price">Rs ${new_bag_con_ele[i].current_price}</span>
                <span class="original-price">Rs ${new_bag_con_ele[i].original_price}</span>
                <span class="discount-percentage">(${new_bag_con_ele[i].discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${new_bag_con_ele[i].return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${new_bag_con_ele[i].delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart">X</div>;
          
          </div>`
                        })}}