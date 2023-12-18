import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  // TODO: Implement methods to work with fighters
   constructor(){}

   async find(){
    const res = await models.FIGHTER.findAll();
    return res;
   }

   async findOne(id){
    const res = await models.FIGHTER.findByPk(id);
    return res;
   }

   async create(data) {
    const res = await models.FIGHTER.create(data);
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

const fighterService = new FighterService();

export { fighterService };
