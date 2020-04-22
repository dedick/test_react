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
  isMale = true;
  genderDetection = ["sara","emma","ette", "ia"];

  constructor(data) {
    Object.assign(this, data);
    for (let i = 0; i < this.genderDetection.length; i++) {
      if (this.name.toLowerCase().includes(this.genderDetection[i])){
        this.isMale = false;
        break;
      }
    }
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