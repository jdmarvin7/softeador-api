import { CriarTimesController } from './../modules/times/useCases/criarTimesUseCase/CriarTimesController';
import { ListarTimesController } from './../modules/times/useCases/litarTimesUseCase/ListarTimesController';
import { response, Router } from "express";

const routes = Router();

const listarTimesController = new ListarTimesController();
const criarTimesController = new CriarTimesController();

routes.get('/', (request, response) => {
    return response.send('Teste')
});

routes.get('/times', listarTimesController.handle);
routes.post('/times/create', criarTimesController.handle);

export { routes };