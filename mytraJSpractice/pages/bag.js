
// 10/11/25

// for bagitems array from home page

 let bag_container_ele = JSON.parse(localStorage.getItem("bagEle"));
//  let bag_itemss = JSON.parse(bag_container_ele);



  
 
// load container

let innerhtml_bag_items_container = document.querySelector('.bag-items-container');

function loadbic (){
                let new_bag_con_ele = bag_container_ele.map(value => {
  for(let i=0;i<items.length;i++){
    if(items[i].id == value){
      return items[i];

    }
  }
});
                new_bag_con_ele.forEach( (i) => {
                innerhtml_bag_items_container.innerHTML +=  `<div class="bag-item-container">

            <div class="item-left-part">
              <img class="bag-item-img" src="../${i.image}">
            </div>
            <div class="item-right-part">
               <div class="company">${i.company}</div>
              <div class="item-name">${i.item_name}</div>
              <div class="price-container">
                <span class="current-price">Rs ${i.current_price}</span>
                <span class="original-price">Rs ${i.original_price}</span>
                <span class="discount-percentage">(${i.discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${i.return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${i.delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick="xbut(${i});">X</div>;
          
          </div>`
                       } )};

loadbic ();  

function xbut(index) {
bag_container_ele.splice(index,1);
innerhtml_bag_items_container.innerHTML='';
loadbic ();
}