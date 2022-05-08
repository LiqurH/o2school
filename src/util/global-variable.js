function globalStorage(){
  let storage={};
  return {
    get(key){
      return storage[key];
    },
    set(key,value){
      return storage[key]=value
    }
  }
}
const storage = new globalStorage();
export default storage;
