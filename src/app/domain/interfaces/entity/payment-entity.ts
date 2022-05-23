import { UserEntity } from "./user-entity";

export interface PaymentEntity {
    id: string;
    user: UserEntity;
    value: number;
    date: Date;
    status: boolean;
}
