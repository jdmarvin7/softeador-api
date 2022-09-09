import { TimesRepository } from './../../repositories/implamentations/TimesRepository';
import { ITimeDTO } from './../../repositories/Dtos/ITimeDTO';
import { injectable, inject } from 'tsyringe';
import { ITimesRepository } from '../../repositories/ITimesRepository';

@injectable()
export class ListarTimesUseCase {
    constructor(
        @inject("TimesRepository")
        private timesRepository: TimesRepository
    ) { }

    async execute() {
        const times = await this.timesRepository.list();
        return times;
    }
}