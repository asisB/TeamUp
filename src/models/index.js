// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Sports = {
  "BASKETBALL": "BASKETBALL",
  "FOOTBALL": "FOOTBALL",
  "CRICKET": "CRICKET",
  "BASEBALL": "BASEBALL",
  "GYM": "GYM",
  "RUNNING": "RUNNING",
  "TABLETENNIS": "TABLETENNIS",
  "RUGBY": "RUGBY"
};

const Gender = {
  "MALE": "MALE",
  "FEMALE": "FEMALE",
  "OTHERS": "OTHERS"
};

const { Match, Users } = initSchema(schema);

export {
  Match,
  Users,
  Sports,
  Gender
};