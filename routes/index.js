var express = require('express');
var router = express.Router();
const ugs = require('ultimate-guitar-scraper')
var search = require('youtube-search');

var opts = {
  maxResults: 10,
  key: 'AIzaSyC9jXrn0L08BtPldPQw01F_GTjNY2Zgc8Y'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  
let tabUrl = 'https://tabs.ultimate-guitar.com/n/nirvana/smells_like_teen_spirit_ver2_crd.htm'
ugs.get(tabUrl, (error, tab) => {
  if (error) {
    console.log(error)
  } else {
    console.log(tab)
    res.render('index', { title: 'Express' , tab: tab});
  }
})
  
});

router.get('/search', function(req, res, next) {
  search('nothing else matters tutorial', opts, function(err, results) {
    if(err) {return console.log(err)};
   
    console.dir(results);
    res.render('search', { results: results})
  });
});

router.get('/sports', function(req, res, next){
  res.render('sports')
  
})

module.exports = router;
