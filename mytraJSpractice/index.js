

let insidediv = document.querySelector('.itemscontainer');


items.forEach(function(item){
    insidediv.innerHTML +=  `<div class="itemcontainer">
                <img src="/mytraJSpractice/${item.image} " alt="product-image">
                <div class="ratings">
                    ${item.rating.stars} ⭐ | ${item.rating.count} 
                </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="pricing">
                    <span class="current-price">₹${item.current_price}</span>
                    <span class="original-price">₹${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}% OFF)</span>
                </div>
                <button class="btn" onclick="Action();">Add to Bag</button>

            </div>` 
})


function Action() {
    
}