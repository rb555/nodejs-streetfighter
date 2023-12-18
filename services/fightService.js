import { fightRepository } from "../repositories/fightRepository.js";

class FightersService {
  // OPTIONAL TODO: Implement methods to work with fights
  constructor(){}

   async find(){
    const res = await models.FIGHT.findAll();
    return res;
   }

   async findOne(id){
    const res = await models.FIGHT.findByPk(id);
    return res;
   }

   async create(data) {
    const res = await models.FIGHT.create(data);
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

const fightersService = new FightersService();

export { fightersService };
