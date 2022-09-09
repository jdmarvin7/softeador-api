import { Time } from '@prisma/client';
import { prisma } from '../../../../infra/database/prismaClient';
import { ITimeDTO } from '../Dtos/ITimeDTO';
import { ITimesRepository } from './../ITimesRepository';

export class TimesRepository implements ITimesRepository {
    async create({ nome, foto, logo }: ITimeDTO): Promise<Time> {
        const time = await prisma.time.create({
            data: {
                nome,
                foto,
                logo
            }
        });

        return time;
    }

    async list(): Promise<Time[]> {
        const times = await prisma.time.findMany();
        return times;
    }

    update(id: string): void {
        throw new Error('Method not implemented.');
    }

    delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }

    getTimeByName(nome: string): Promise<Time> {
        throw new Error('Method not implemented.');
    }

    getTimeByID(id: string): Promise<Time> {
        throw new Error('Method not implemented.');
    }

}