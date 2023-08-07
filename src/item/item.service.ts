import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from 'src/schemas/item.schema';

@Injectable()
export class ItemService {
  constructor(@InjectModel(Item.name) private itemModel: Model<Item>) {}

  async create(createItemDto: Item): Promise<Item> {
    const createdCat = new this.itemModel(createItemDto);
    return createdCat.save();
  }

  async findAll(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }

  async findOne(id: string): Promise<Item> {
    return this.itemModel.findById(id).exec();
  }

  async update(id: string, updateItemDto: Item): Promise<Item> {
    return await this.itemModel
      .findByIdAndUpdate(id, updateItemDto, {
        new: true,
      })
      .exec();
  }

  async remove(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id).exec();
  }
}
