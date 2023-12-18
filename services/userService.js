import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user
  constructor(){}

  async find(){
   const res = await models.USER.findAll();
   return res;
  }

  async findOne(id){
   const res = await models.USER.findByPk(id);
   return res;
  }

  async create(data) {
   const res = await models.USER.create(data);
   return res;
  }

  async update(id,data) {
   const model = await this.findOne(id);
   const res = await model.update(data);
   return res;
  }

  async delete(id) {
   const model = await this.findOne(id);
   await model.destroy();
   return{deleted: true};
  }
}

const userService = new UserService();

export { userService };
