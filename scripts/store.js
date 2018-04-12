'use strict';
/* global cuid */
const store = (function(){
  let renderView = 'mainview';
  let items = [
      {
          id: 'abs',
          title: 'nada',
          link: 'abs.com',
          description: 'nothing',
          rating: '2',
        },
        {
          id: 'bcd',
          title: 'programing',
          link: 'prog.com',
          description: 'learn to code',
          rating: '4',
        }
  ];
  const addItem = function(item){
    this.items.push(item);
  };
  const deleteItem =function(id){
    this.items = this.items.filter(item => item.id !== id);
  };
  return {
    items,
    error: null,    
    renderView,

    addItem,
    deleteItem,
  };
})();
console.log(store.items);
