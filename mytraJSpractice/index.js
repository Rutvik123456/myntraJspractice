
let itemarray = 
    {
        id: '001',
        image: 'images/1.jpg',
        rating: {
            stars: 4.5,
            count: 1400,
        },
        company: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 1045,
        current_price: 606,
    discount_percentage: 42,
    }   
        
let divhtml = document.querySelector('.itemscontainer');

divhtml.innerHTML=` <div class="itemcontainer">
                <img src="/mytraJSpractice/${itemarray.image} " alt="product-image">
                <div class="ratings">
                    ${itemarray.rating.stars} ⭐ | ${itemarray.rating.count} 
                </div>
                <div class="company-name">${itemarray.company}</div>
                <div class="item-name">${itemarray.item_name}</div>
                <div class="pricing">
                    <span class="current-price">₹${itemarray.current_price}</span>
                    <span class="original-price">₹${itemarray.original_price}</span>
                    <span class="discount">(${itemarray.discount_percentage}% OFF)</span>
                </div>
                <button class="btn">Add to Bag</button>

            </div>`