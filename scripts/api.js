'use strict';
/* global store */

// eslint-disable-next-line no-unused-vars
const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/suman';
  function getItems(callback){    
    $.getJSON(`${BASE_URL}/bookmarks`,callback);

  }

  function createItem(item, callback){
    let newItem =JSON.stringify(
      {  
        id : cuid(),      
        title : item.title,
        url: item.url,
        desc : item.description,
        rating : item.rating,
       });
    $.ajax({
      url : `${BASE_URL}/bookmarks`,
      method : 'POST',
      data : newItem,
      contentType : 'application/json',
      success : callback,
      error : (response) => {
        errorHandler.setError(response);        
      },
    });        
  }

  function updateItem(id,updateData,callback){
    $.ajax({
      url : `${BASE_URL}/items/${id}`,
      method : 'PATCH',
      data : JSON.stringify(updateData),
      contentType : 'application/json',
      success : callback,
      error : (response) => {
        errorHandler.setError(response);        
      },
    });
  }

  function deleteItem(id, callback){
    console.log("inside delete api");
    $.ajax({
      url : `${BASE_URL}/items/${id}`,
      method : 'DELETE',
      success : callback,
      error : (response) => {
        errorHandler.setError(response);        
      },
    });
  }

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem,
  };
}());