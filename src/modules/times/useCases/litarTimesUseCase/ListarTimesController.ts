import { ListarTimesUseCase } from './ListarTimesUseCase';
import { container } from 'tsyringe';
import { Request, Response } from "express";

export class ListarTimesController {
    async handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>> {
        const listarTimesUseCase = container.resolve(ListarTimesUseCase);

        const times = await listarTimesUseCase.execute();
        return response.status(200).send(times)
    }
}