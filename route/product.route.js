//Route

const express=require('express');
const router=express.Router();

//Require the controllers
const product_controller=require('D:/learning javascript/js-node/crud/product_app/controller/product.controller');

// a simple test url to check that all our file communicating correctly
router.post('/create',product_controller.product_create);
router.get('/:id',product_controller.product_details);
router.put('/:id/update',product_controller.product_update);
router.delete('/:id/delete',product_controller.product_delete);

module.exports=router;

