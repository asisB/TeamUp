/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMessageInput = {
  id?: string | null,
  createdAt?: string | null,
  content?: string | null,
  senderID: string,
  receiverID: string,
};

export type ModelMessageConditionInput = {
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  senderID?: ModelIDInput | null,
  receiverID?: ModelIDInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Message = {
  __typename: "Message",
  id?: string | null,
  createdAt?: string | null,
  content?: string | null,
  senderID: string,
  receiverID: string,
  sender?: User | null,
  receiver?: User | null,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  image?: string | null,
  bio: string,
  gender?: Gender | null,
  skills: string,
  language?: string | null,
  sports: Sports,
  age?: string | null,
  location: string,
  partners?: ModelPartnerConnection | null,
  messages?: ModelMessageConnection | null,
  createdAt: string,
  updatedAt: string,
};

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
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
  BADMINTON = "BADMINTON",
}


export type ModelPartnerConnection = {
  __typename: "ModelPartnerConnection",
  items:  Array<Partner | null >,
  nextToken?: string | null,
};

export type Partner = {
  __typename: "Partner",
  id: string,
  status?: Status | null,
  userID?: string | null,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
};

export enum Status {
  REQUESTED = "REQUESTED",
  ACCEPTED = "ACCEPTED",
}


export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type UpdateMessageInput = {
  id: string,
  createdAt?: string | null,
  content?: string | null,
  senderID?: string | null,
  receiverID?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreatePartnerInput = {
  id?: string | null,
  status?: Status | null,
  userID?: string | null,
};

export type ModelPartnerConditionInput = {
  status?: ModelStatusInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPartnerConditionInput | null > | null,
  or?: Array< ModelPartnerConditionInput | null > | null,
  not?: ModelPartnerConditionInput | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type UpdatePartnerInput = {
  id: string,
  status?: Status | null,
  userID?: string | null,
};

export type DeletePartnerInput = {
  id: string,
};

export type CreateTeamupInput = {
  id?: string | null,
  teamupUserId?: string | null,
  teamupUser1Id?: string | null,
};

export type ModelTeamupConditionInput = {
  and?: Array< ModelTeamupConditionInput | null > | null,
  or?: Array< ModelTeamupConditionInput | null > | null,
  not?: ModelTeamupConditionInput | null,
  teamupUserId?: ModelIDInput | null,
  teamupUser1Id?: ModelIDInput | null,
};

export type Teamup = {
  __typename: "Teamup",
  id: string,
  User?: User | null,
  User1?: User | null,
  createdAt: string,
  updatedAt: string,
  teamupUserId?: string | null,
  teamupUser1Id?: string | null,
};

export type UpdateTeamupInput = {
  id: string,
  teamupUserId?: string | null,
  teamupUser1Id?: string | null,
};

export type DeleteTeamupInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  image?: string | null,
  bio: string,
  gender?: Gender | null,
  skills: string,
  language?: string | null,
  sports: Sports,
  age?: string | null,
  location: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  gender?: ModelGenderInput | null,
  skills?: ModelStringInput | null,
  language?: ModelStringInput | null,
  sports?: ModelSportsInput | null,
  age?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelGenderInput = {
  eq?: Gender | null,
  ne?: Gender | null,
};

export type ModelSportsInput = {
  eq?: Sports | null,
  ne?: Sports | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  bio?: string | null,
  gender?: Gender | null,
  skills?: string | null,
  language?: string | null,
  sports?: Sports | null,
  age?: string | null,
  location?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  senderID?: ModelIDInput | null,
  receiverID?: ModelIDInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPartnerFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelStatusInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPartnerFilterInput | null > | null,
  or?: Array< ModelPartnerFilterInput | null > | null,
  not?: ModelPartnerFilterInput | null,
};

export type ModelTeamupFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelTeamupFilterInput | null > | null,
  or?: Array< ModelTeamupFilterInput | null > | null,
  not?: ModelTeamupFilterInput | null,
  teamupUserId?: ModelIDInput | null,
  teamupUser1Id?: ModelIDInput | null,
};

export type ModelTeamupConnection = {
  __typename: "ModelTeamupConnection",
  items:  Array<Teamup | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  gender?: ModelGenderInput | null,
  skills?: ModelStringInput | null,
  language?: ModelStringInput | null,
  sports?: ModelSportsInput | null,
  age?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  senderID?: ModelSubscriptionIDInput | null,
  receiverID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPartnerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPartnerFilterInput | null > | null,
  or?: Array< ModelSubscriptionPartnerFilterInput | null > | null,
};

export type ModelSubscriptionTeamupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionTeamupFilterInput | null > | null,
  or?: Array< ModelSubscriptionTeamupFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  skills?: ModelSubscriptionStringInput | null,
  language?: ModelSubscriptionStringInput | null,
  sports?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id?: string | null,
    createdAt?: string | null,
    content?: string | null,
    senderID: string,
    receiverID: string,
    sender?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiver?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id?: string | null,
    createdAt?: string | null,
    content?: string | null,
    senderID: string,
    receiverID: string,
    sender?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiver?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id?: string | null,
    createdAt?: string | null,
    content?: string | null,
    senderID: string,
    receiverID: string,
    sender?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiver?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreatePartnerMutationVariables = {
  input: CreatePartnerInput,
  condition?: ModelPartnerConditionInput | null,
};

export type CreatePartnerMutation = {
  createPartner?:  {
    __typename: "Partner",
    id: string,
    status?: Status | null,
    userID?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePartnerMutationVariables = {
  input: UpdatePartnerInput,
  condition?: ModelPartnerConditionInput | null,
};

export type UpdatePartnerMutation = {
  updatePartner?:  {
    __typename: "Partner",
    id: string,
    status?: Status | null,
    userID?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePartnerMutationVariables = {
  input: DeletePartnerInput,
  condition?: ModelPartnerConditionInput | null,
};

export type DeletePartnerMutation = {
  deletePartner?:  {
    __typename: "Partner",
    id: string,
    status?: Status | null,
    userID?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTeamupMutationVariables = {
  input: CreateTeamupInput,
  condition?: ModelTeamupConditionInput | null,
};

export type CreateTeamupMutation = {
  createTeamup?:  {
    __typename: "Teamup",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    User1?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamupUserId?: string | null,
    teamupUser1Id?: string | null,
  } | null,
};

export type UpdateTeamupMutationVariables = {
  input: UpdateTeamupInput,
  condition?: ModelTeamupConditionInput | null,
};

export type UpdateTeamupMutation = {
  updateTeamup?:  {
    __typename: "Teamup",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    User1?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamupUserId?: string | null,
    teamupUser1Id?: string | null,
  } | null,
};

export type DeleteTeamupMutationVariables = {
  input: DeleteTeamupInput,
  condition?: ModelTeamupConditionInput | null,
};

export type DeleteTeamupMutation = {
  deleteTeamup?:  {
    __typename: "Teamup",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    User1?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamupUserId?: string | null,
    teamupUser1Id?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    bio: string,
    gender?: Gender | null,
    skills: string,
    language?: string | null,
    sports: Sports,
    age?: string | null,
    location: string,
    partners?:  {
      __typename: "ModelPartnerConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    bio: string,
    gender?: Gender | null,
    skills: string,
    language?: string | null,
    sports: Sports,
    age?: string | null,
    location: string,
    partners?:  {
      __typename: "ModelPartnerConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    bio: string,
    gender?: Gender | null,
    skills: string,
    language?: string | null,
    sports: Sports,
    age?: string | null,
    location: string,
    partners?:  {
      __typename: "ModelPartnerConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id?: string | null,
    createdAt?: string | null,
    content?: string | null,
    senderID: string,
    receiverID: string,
    sender?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiver?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id?: string | null,
      createdAt?: string | null,
      content?: string | null,
      senderID: string,
      receiverID: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MessagesByReceiverIDQueryVariables = {
  receiverID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByReceiverIDQuery = {
  messagesByReceiverID?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id?: string | null,
      createdAt?: string | null,
      content?: string | null,
      senderID: string,
      receiverID: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPartnerQueryVariables = {
  id: string,
};

export type GetPartnerQuery = {
  getPartner?:  {
    __typename: "Partner",
    id: string,
    status?: Status | null,
    userID?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPartnersQueryVariables = {
  filter?: ModelPartnerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPartnersQuery = {
  listPartners?:  {
    __typename: "ModelPartnerConnection",
    items:  Array< {
      __typename: "Partner",
      id: string,
      status?: Status | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PartnersByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPartnerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PartnersByUserIDQuery = {
  partnersByUserID?:  {
    __typename: "ModelPartnerConnection",
    items:  Array< {
      __typename: "Partner",
      id: string,
      status?: Status | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTeamupQueryVariables = {
  id: string,
};

export type GetTeamupQuery = {
  getTeamup?:  {
    __typename: "Teamup",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    User1?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamupUserId?: string | null,
    teamupUser1Id?: string | null,
  } | null,
};

export type ListTeamupsQueryVariables = {
  filter?: ModelTeamupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamupsQuery = {
  listTeamups?:  {
    __typename: "ModelTeamupConnection",
    items:  Array< {
      __typename: "Teamup",
      id: string,
      createdAt: string,
      updatedAt: string,
      teamupUserId?: string | null,
      teamupUser1Id?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    bio: string,
    gender?: Gender | null,
    skills: string,
    language?: string | null,
    sports: Sports,
    age?: string | null,
    location: string,
    partners?:  {
      __typename: "ModelPartnerConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id?: string | null,
    createdAt?: string | null,
    content?: string | null,
    senderID: string,
    receiverID: string,
    sender?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiver?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id?: string | null,
    createdAt?: string | null,
    content?: string | null,
    senderID: string,
    receiverID: string,
    sender?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiver?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id?: string | null,
    createdAt?: string | null,
    content?: string | null,
    senderID: string,
    receiverID: string,
    sender?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiver?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePartnerSubscriptionVariables = {
  filter?: ModelSubscriptionPartnerFilterInput | null,
};

export type OnCreatePartnerSubscription = {
  onCreatePartner?:  {
    __typename: "Partner",
    id: string,
    status?: Status | null,
    userID?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePartnerSubscriptionVariables = {
  filter?: ModelSubscriptionPartnerFilterInput | null,
};

export type OnUpdatePartnerSubscription = {
  onUpdatePartner?:  {
    __typename: "Partner",
    id: string,
    status?: Status | null,
    userID?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePartnerSubscriptionVariables = {
  filter?: ModelSubscriptionPartnerFilterInput | null,
};

export type OnDeletePartnerSubscription = {
  onDeletePartner?:  {
    __typename: "Partner",
    id: string,
    status?: Status | null,
    userID?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTeamupSubscriptionVariables = {
  filter?: ModelSubscriptionTeamupFilterInput | null,
};

export type OnCreateTeamupSubscription = {
  onCreateTeamup?:  {
    __typename: "Teamup",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    User1?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamupUserId?: string | null,
    teamupUser1Id?: string | null,
  } | null,
};

export type OnUpdateTeamupSubscriptionVariables = {
  filter?: ModelSubscriptionTeamupFilterInput | null,
};

export type OnUpdateTeamupSubscription = {
  onUpdateTeamup?:  {
    __typename: "Teamup",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    User1?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamupUserId?: string | null,
    teamupUser1Id?: string | null,
  } | null,
};

export type OnDeleteTeamupSubscriptionVariables = {
  filter?: ModelSubscriptionTeamupFilterInput | null,
};

export type OnDeleteTeamupSubscription = {
  onDeleteTeamup?:  {
    __typename: "Teamup",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    User1?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      bio: string,
      gender?: Gender | null,
      skills: string,
      language?: string | null,
      sports: Sports,
      age?: string | null,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamupUserId?: string | null,
    teamupUser1Id?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    bio: string,
    gender?: Gender | null,
    skills: string,
    language?: string | null,
    sports: Sports,
    age?: string | null,
    location: string,
    partners?:  {
      __typename: "ModelPartnerConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    bio: string,
    gender?: Gender | null,
    skills: string,
    language?: string | null,
    sports: Sports,
    age?: string | null,
    location: string,
    partners?:  {
      __typename: "ModelPartnerConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    bio: string,
    gender?: Gender | null,
    skills: string,
    language?: string | null,
    sports: Sports,
    age?: string | null,
    location: string,
    partners?:  {
      __typename: "ModelPartnerConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
