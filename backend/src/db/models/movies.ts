import * as Mongoose from 'mongoose';
import { Document, Model, model} from 'mongoose';
import { IMovies } from './IMovies';

export interface IMoviesModel extends IMovies, Document {}
const movieSchema = new Mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  likeCount: {
    type: Number,
    required: true,
    default: 0
  }
});

export const movies: Model<IMoviesModel> = model<
IMoviesModel
>('movies', movieSchema);
