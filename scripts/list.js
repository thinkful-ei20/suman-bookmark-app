'use strict';

const list = (function(){
  function deleteBookmark(){
    console.log("inside delete list");
    console.log(api.getItems(generateBookListItems));
    $('.js-bookmark-list').on('click','.js-delete-bookmark', event =>{
      const id = getItemIdFromElement(event.currentTarget);
      api.deleteItem(id, function(id){
        api.getItems(generateBookListItems) = api.getItems(generateBookListItems).filter(item => item.id !== id);
      });
    })
  }

function handleEvents(){
  deleteBookmark();
}

return {
  handleEvents,
}
})();
