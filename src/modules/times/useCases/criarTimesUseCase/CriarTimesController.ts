import { CriarTimesUseCase } from './CriarTimesUseCase';
import { container } from 'tsyringe';
import { Request, Response } from "express";



export class CriarTimesController {

    async handle(request: Request, response: Response) {
        const { nome, foto, logo } = request.body;
        const criarTimesUseCase = container.resolve(CriarTimesUseCase);

        const time = await criarTimesUseCase.execute({
            nome,
            foto,
            logo
        });

        return response.status(201).send({message: "Created", time});
    }
}