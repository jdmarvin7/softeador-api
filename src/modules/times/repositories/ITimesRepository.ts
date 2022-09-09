import { ITimeDTO } from './Dtos/ITimeDTO';
import { Time } from "@prisma/client";

export interface ITimesRepository {
    create(data: ITimeDTO): Promise<Time>;
    list(): Promise<Time[]>;
    update(id: string): void;
    delete(id: string): Promise<void>;
    getTimeByName(nome: string): Promise<Time>;
    getTimeByID(id: string): Promise<Time>;
}