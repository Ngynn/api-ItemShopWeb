/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemDocument = HydratedDocument<Item>;

@Schema({
    timestamps: true,
})
export class Item {
    @Prop()
    name: string;

    @Prop()
    description: string;
    @Prop()
    quantity: number;
    @Prop()
    price: number;
    @Prop()
    image: string;

    @Prop()
    stock: number;

}

export const ItemSchema = SchemaFactory.createForClass(Item);
