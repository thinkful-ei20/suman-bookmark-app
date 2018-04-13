'use strict';
/*global store, api*/

const bookmarkList =(function(){
  function generateStars(rating){
    let starString = '';

    for(let i =0; i < 5;i++){
        if(i< rating){
        starString = starString + `<span class="fa fa-star checked"></span>`;
      }      
      else{
        starString = starString + `<span class="fa fa-star"></span>`;
      }
    }
    return starString;
  }

  function generateBookMarkElement(item){
    let numberOfStars = generateStars(item.rating);
    return `<li>
      <div class="display-bookmark">                               
        <div class="bookmark-name">${item.title}</span>
        <button class="edit-bookmark js-edit-bookmark">EDIT BOOKMARK</button>
        <button class="delete-bookmark js-delete-bookmark">DELETE BOOKMARK</button>            
      </div> 
      ${numberOfStars}
    </li>`;
  }

  function generateBookListItems(items) {
    const itemsGenerated = items.map((item) => generateBookMarkElement(item));
    console.log(itemsGenerated);
    $('.js-bookmark-list').html(itemsGenerated.join(''));    
  }

  function render(){    
    api.getItems(generateBookListItems);  
  } 

  return {
    render,
    generateBookListItems,
    generateBookMarkElement,    
  }
})();

$(document).ready(function() {  
    
  bookmarkList.render();
});