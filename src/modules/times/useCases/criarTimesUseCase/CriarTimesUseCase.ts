import { ITimeDTO } from './../../repositories/Dtos/ITimeDTO';
import { TimesRepository } from './../../repositories/implamentations/TimesRepository';
import { inject, injectable } from "tsyringe";

@injectable()
export class CriarTimesUseCase {

    constructor(
        @inject("TimesRepository")
        private timesRepository: TimesRepository
    ) { }

    async execute({ nome, foto, logo }: ITimeDTO) {
        const time = await this.timesRepository.create({
            nome,
            foto,
            logo
        });

        return time;
    }
}