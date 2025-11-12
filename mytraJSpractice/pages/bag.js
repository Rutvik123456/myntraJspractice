
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
                      return items[i];}}});

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
                        <div class="remove-from-cart" onclick="xbut(${i.id});">X</div>;
                        </div>`})};

loadbic ();  

function xbut(itemID) {
bag_container_ele = bag_container_ele.filter(value =>value != itemID);
localStorage.setItem("bagEle",JSON.stringify(bag_container_ele));
innerhtml_bag_items_container.innerHTML='';
loadbic ();
printitemCount();
}

// for bag icon 

printitemCount();

function printitemCount (){
    bag_item_count = document.querySelector('.bag-items');
    bag_item_count.innerText = bag_container_ele.length;
    visiblity();  
}


function visiblity(){
    let countVisibility = document.querySelector('.bag-items');
    (bag_container_ele.length<1) ? countVisibility.style.visibility = "hidden" : countVisibility.style.visibility = "visible" ;
}


// bag summary


let TotalItem = bag_container_ele.length;
let TotalmRP = 0;
let dicountmrp = 0;
let convfees = 0;


function loadsummary (){
  summaryHtml = document.querySelector('.bag-summary');
  summaryHtml.innerHTML = `<div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${TotalItem} Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs${TotalmRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-Rs${dicountmrp}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs ${convfees}</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs 1240</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`
}

loadsummary();

