

class GnomeModel {
  id;
  name;
  thumbnail;
  age;
  weight;
  heigth;
  hair_color;
  professions;
  friends;
  isVisible = false;

  constructor(data) {
    Object.assign(this, data);
  }
  static checkProperty(obj){
    return 'id' in obj &&
            'name' in obj &&
            'thumbnail' in obj &&
            'age' in obj &&
            'weight' in obj &&
            'height' in obj &&
            'hair_color' in obj &&
            'professions' in obj &&
            'friends' in obj;
  }
}

export default GnomeModel;