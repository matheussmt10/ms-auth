import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'users', timestamps: true })
export class User {
  @Prop({ required: true })
  uuid: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  lastSessionDate: Date;

  @Prop({ type: Object })
  googleAuth?: {
    id: string;
    userPhotoUrl: string;
  };
}

export const UserSchema = SchemaFactory.createForClass(User);
