const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const {id} = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if(!ong) {
            return response.status(400).json({error:'There is no ONG with the given ID'});
        }
        
        return response.json(ong);
    }
}