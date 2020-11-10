const productList = {
  products: [
    {
      title: 'A Pillow',
      img: 'https://www.serta.com/sites/ssb/serta.com/uploads/2018/accessories/pillows/Cool%20Comfy%20Queen/CoolComfy1.jpg',
      price: 19.99,
      description: 'A soft pillow'
    },
    {
      title: 'A Carpet',
      img: 'https://secure.img1-fg.wfcdn.com/im/97284506/resize-h800-w800%5Ecompr-r85/6053/60539358/Morrell+Shag+Hand-Tufted+Light+Gray+Area+Rug.jpg',
      price: 89.99,
      description: 'A nice shaggy carpet'
    }
  ],
  render(){
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = "product-list";
    for(const prod of this.products){
      const prodEl = document.createElement('li')
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
          <img src="${prod.img}", alt="prod.title">
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div> 
        </div>`
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

productList.render();
