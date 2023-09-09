// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Gender = {
  "MALE": "MALE",
  "FEMALE": "FEMALE",
  "OTHER": "OTHER"
};

const Sports = {
  "BASKETBALL": "BASKETBALL",
  "VOLLEYBALL": "VOLLEYBALL",
  "FOOTBALL": "FOOTBALL",
  "CRICKET": "CRICKET",
  "TABLETENNIS": "TABLETENNIS",
  "GYM": "GYM",
  "BOXING": "BOXING",
  "RUNNING": "RUNNING",
  "BADMINTON": "BADMINTON"
};

const { Teamup, User } = initSchema(schema);

export {
  Teamup,
  User,
  Gender,
  Sports
};