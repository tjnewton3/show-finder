// Centralized propType definitions
import { shape, number, string, object, array, arrayOf } from 'prop-types';

export const searchPhrase = shape(string);

export const show = shape({
  id: number,
  url: string,
  name: string,
  type: string,
  language: string,
  genres: array,
  status: string,
  runtime: number,
  premiered: string,
  officialSite: string,
  schedule: object,
  rating: object,
  weight: number,
  network: object,
  webChannel: object,
  externals: object,
  image: object,
  summary: string,
  updated: number,
  _links: object
});

export const shows = arrayOf(shape({
  score: number,
  show: show
}));

