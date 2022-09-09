import { TimesRepository } from './../../modules/times/repositories/implamentations/TimesRepository';
import { ITimesRepository } from './../../modules/times/repositories/ITimesRepository';
import { container } from "tsyringe";

container.registerSingleton<ITimesRepository>(
    "TimesRepository",
    TimesRepository
)