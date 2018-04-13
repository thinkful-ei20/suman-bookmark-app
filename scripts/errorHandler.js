'use strict';
/* global cuid */
const errorHandler = (function(){
  const setError = function(response){
      $('.js-error-message').html(response.message);      
  }

  return {        
    setError,
  };
})();