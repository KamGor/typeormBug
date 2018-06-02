import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({
    name: 'user',
    schema: 'public'
})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    someOtherColumn: string;

}
