

class GnomeModel {
  id;
  name;
  thumbnail;
  age;
  weight;
  height;
  hair_color;
  professions;
  friends;

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