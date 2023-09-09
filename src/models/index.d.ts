import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER"
}

export enum Sports {
  BASKETBALL = "BASKETBALL",
  VOLLEYBALL = "VOLLEYBALL",
  FOOTBALL = "FOOTBALL",
  CRICKET = "CRICKET",
  TABLETENNIS = "TABLETENNIS",
  GYM = "GYM",
  BOXING = "BOXING",
  RUNNING = "RUNNING",
  BADMINTON = "BADMINTON"
}



type EagerTeamup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Teamup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly User?: User | null;
  readonly User1?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamupUserId?: string | null;
  readonly teamupUser1Id?: string | null;
}

type LazyTeamup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Teamup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly User: AsyncItem<User | undefined>;
  readonly User1: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamupUserId?: string | null;
  readonly teamupUser1Id?: string | null;
}

export declare type Teamup = LazyLoading extends LazyLoadingDisabled ? EagerTeamup : LazyTeamup

export declare const Teamup: (new (init: ModelInit<Teamup>) => Teamup) & {
  copyOf(source: Teamup, mutator: (draft: MutableModel<Teamup>) => MutableModel<Teamup> | void): Teamup;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly bio: string;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly skills: string;
  readonly language?: string | null;
  readonly sports: Sports | keyof typeof Sports;
  readonly age?: string | null;
  readonly location: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly bio: string;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly skills: string;
  readonly language?: string | null;
  readonly sports: Sports | keyof typeof Sports;
  readonly age?: string | null;
  readonly location: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}