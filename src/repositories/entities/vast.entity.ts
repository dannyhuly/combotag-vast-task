import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Vast extends BaseEntity {

    private static readonly positionValues = [
        'top_left', 'top_middle', 'top_right',
        'middle_left', 'middle_right',
        'bottom_left', 'bottom_middle', 'bottom_right'
    ];

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 600 })
    vast_url: string;

    @Column("enum", { enum: Vast.positionValues })
    position: string;

    @Column('tinyint', { length: 1 })
    hide_ui: boolean;

}