const router = require('express').Router();

// Load Product model
let BottledWater = require('../../models/BottledWater.js');

// Get all products
router.route('/').get((req, res) => {
  BottledWater.find()
    .then(bottledWaterProducts => res.json(bottledWaterProducts))
});

// Get a product by id
router.route('/:id').get((req, res) => {
  BottledWater.findById(req.params.id)
      .then(bottledWaterProduct => res.json(bottledWaterProduct))
  });
  
  // Delete a product by id
  router.route('/:id').delete((req, res) => {
    BottledWater.findByIdAndDelete(req.params.id)
      .then(() => res.json('Product deleted.'))
  });
  
  // Get products sorted by sortBy and tag
  router.route('/sort/:sortBy/tags/:tag').get((req, res) => {
    BottledWater.find({tags: req.params.tag})
      .sort(req.params.sortBy)
      .then(bottledWaterProducts => res.json(bottledWaterProducts))
  });
  
  // Get products with a specific tag
  router.route('/tags/:tag').get((req, res) => {
    BottledWater.find({tags: req.params.tag})
      .then(bottledWaterProducts => res.json(bottledWaterProducts))
  });
  
  // Get products sorted by sortBy
  router.route('/sort/:sortBy').get((req, res) => {
    BottledWater.find()
      .sort(req.params.sortBy)
      .then(bottledWaterProducts => res.json(bottledWaterProducts))
  });
  
    // Add a product
    router.route('/add').post((req, res) => {
    const name = req.body.name;
    const price = Number(req.body.price);
    //const caloriesPerServing = Number(req.body.caloriesPerServing);
    const img = req.body.img;
    const link = req.body.link;
    //const tags = req.body.tags;

    const newBottledWater = new BottledWater({
        name,
        price,
        img,
        link
        //calsPerDol: -((caloriesPerServing * servingsPerProduct / price).toFixed()),
        //tags

    });

    newBottledWater.save()
    .then(() => res.json('Product added!'))
    });



module.exports = router;
