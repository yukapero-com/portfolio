var express = require('express');
var router = express.Router();
const appRoot = require('app-root-path');
const __ = require('underscore');
const fs = require('fs');

router.get('/get_work_image_file_names', async function(req, res, next) {
  var targetWorkImgDirName = req.query.key;
  var result;

  try {
    result = await getWorkImgFileNames(`${appRoot}/public/img/work/${targetWorkImgDirName}`);
  } catch {
    result = [];
  }

  res.send(result);
});

var getWorkImgFileNames = function (dirPath) {
  return new Promise((resolve, reject) => {
    // var dirPath = appRoot + '/log/scraping';
    fs.readdir(dirPath, function (err, files) {
      if (err) {
        return reject(err);
      }

      var fileList = files.filter(function (file) {
        var filePath = dirPath + "/" + file;
        // return fs.statSync(filePath).isFile() && /.*\.log$/.test(filePath);
        return fs.statSync(filePath).isFile() && file != 'thumbnail.jpg';
      });

      return resolve(fileList);
    });
  });
};

module.exports = router;
