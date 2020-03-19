const csvToArray = require('csv-to-array')
const fs = require('fs');
const User = require('../models').User;

exports.Index = (req, res, next) => {
  let file = req.files.file;
  let filePath = '../public/'+ file.name;
  file.mv(filePath, async (err, response) => {

    if (err) {
      return res.sendStatus(403);
    }

    var columns = ["field_1", "field_2", "field_3", "field_4", "field_5", "field_6", "field_7", "field_8"];

    await csvToArray({
      file: filePath,
      columns: columns
    }, function (err, array) {
      if (array) {
        console.log(array);

        let index = 0;

        const insertData = () => {
          let data = {
            name: array[index].field_4,
            email: array[index].field_5,
            password: array[index].field_6,
            contact_no: array[index].field_7
          }
          User.create(data).then(res => {
            // increment for next array key
            index++;
            if (array.length > index) {
              insertData();
            } else {
              return true;
            }
          });
        }
        insertData();
      }
    });

    fs.unlinkSync(filePath);
    return res.status(200).json({message: 'file imported successfully.' });
  })
}
