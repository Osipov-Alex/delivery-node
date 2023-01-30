const uuid = require('uuid');
const path = require('path');

class ImageService {
  saveFile(file) {
    try {
      // eslint-disable-next-line prefer-template
      const fileName = uuid.v4() + '.png';
      const filePath = path.resolve('static', fileName);
      file.mv(filePath);
      return fileName;
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports =  new ImageService();
