
const item1 = 
    { 
        id: '001',
        image: 'images/1.jpg',
        company: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        }}


loadbic ();

function loadbic (){
    let innerhtml_bag_items_container = document.querySelector('.bag-items-container');
                innerhtml_bag_items_container.innerHTML = `<div class="bag-item-container">

            <div class="item-left-part">
              <img class="bag-item-img" src="../${item1.image}">
            </div>
            <div class="item-right-part">
              <div class="company">${item1.company}</div>
              <div class="item-name">${item1.item_name}</div>
              <div class="price-container">
                <span class="current-price">Rs ${item1.current_price}</span>
                <span class="original-price">Rs ${item1.original_price}</span>
                <span class="discount-percentage">(${item1.discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item1.return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item1.delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart">X</div>;
          
          </div>`
                        }  

let bag_container_ele;

let testarr = [1,2,3];
function filter (array){
    arr[i]} 
    filter();