import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum Sports {
  BASKETBALL = "BASKETBALL",
  FOOTBALL = "FOOTBALL",
  CRICKET = "CRICKET",
  BASEBALL = "BASEBALL",
  GYM = "GYM",
  RUNNING = "RUNNING",
  TABLETENNIS = "TABLETENNIS",
  RUGBY = "RUGBY"
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHERS = "OTHERS"
}



type EagerMatch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Match, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Users?: Users | null;
  readonly Users1?: Users | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly matchUsersId?: string | null;
  readonly matchUsers1Id?: string | null;
}

type LazyMatch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Match, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Users: AsyncItem<Users | undefined>;
  readonly Users1: AsyncItem<Users | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly matchUsersId?: string | null;
  readonly matchUsers1Id?: string | null;
}

export declare type Match = LazyLoading extends LazyLoadingDisabled ? EagerMatch : LazyMatch

export declare const Match: (new (init: ModelInit<Match>) => Match) & {
  copyOf(source: Match, mutator: (draft: MutableModel<Match>) => MutableModel<Match> | void): Match;
}

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly bio?: string | null;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly sports?: Sports | keyof typeof Sports | null;
  readonly video?: string | null;
  readonly skillLevel: string;
  readonly language?: string | null;
  readonly age: number;
  readonly location: string;
  readonly sub: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly bio?: string | null;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly sports?: Sports | keyof typeof Sports | null;
  readonly video?: string | null;
  readonly skillLevel: string;
  readonly language?: string | null;
  readonly age: number;
  readonly location: string;
  readonly sub: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}