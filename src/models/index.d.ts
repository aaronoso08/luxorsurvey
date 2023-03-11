import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerAnswer8 = {
  readonly Answer?: string | null;
  readonly Answer8?: string | null;
}

type LazyAnswer8 = {
  readonly Answer?: string | null;
  readonly Answer8?: string | null;
}

export declare type Answer8 = LazyLoading extends LazyLoadingDisabled ? EagerAnswer8 : LazyAnswer8

export declare const Answer8: (new (init: ModelInit<Answer8>) => Answer8)

type EagerAnswer7 = {
  readonly Answer?: string | null;
  readonly Answer7?: string | null;
  readonly untitledfield?: Answer8 | null;
}

type LazyAnswer7 = {
  readonly Answer?: string | null;
  readonly Answer7?: string | null;
  readonly untitledfield?: Answer8 | null;
}

export declare type Answer7 = LazyLoading extends LazyLoadingDisabled ? EagerAnswer7 : LazyAnswer7

export declare const Answer7: (new (init: ModelInit<Answer7>) => Answer7)

type EagerAnswer6 = {
  readonly Answer?: string | null;
  readonly Answer6?: string | null;
  readonly untitledfield?: Answer7 | null;
}

type LazyAnswer6 = {
  readonly Answer?: string | null;
  readonly Answer6?: string | null;
  readonly untitledfield?: Answer7 | null;
}

export declare type Answer6 = LazyLoading extends LazyLoadingDisabled ? EagerAnswer6 : LazyAnswer6

export declare const Answer6: (new (init: ModelInit<Answer6>) => Answer6)

type EagerAnswer5 = {
  readonly Answer?: string | null;
  readonly Answer5?: string | null;
  readonly untitledfield?: Answer6 | null;
}

type LazyAnswer5 = {
  readonly Answer?: string | null;
  readonly Answer5?: string | null;
  readonly untitledfield?: Answer6 | null;
}

export declare type Answer5 = LazyLoading extends LazyLoadingDisabled ? EagerAnswer5 : LazyAnswer5

export declare const Answer5: (new (init: ModelInit<Answer5>) => Answer5)

type EagerAnswer4 = {
  readonly Answer?: string | null;
  readonly Answer4?: string | null;
  readonly untitledfield?: Answer5 | null;
}

type LazyAnswer4 = {
  readonly Answer?: string | null;
  readonly Answer4?: string | null;
  readonly untitledfield?: Answer5 | null;
}

export declare type Answer4 = LazyLoading extends LazyLoadingDisabled ? EagerAnswer4 : LazyAnswer4

export declare const Answer4: (new (init: ModelInit<Answer4>) => Answer4)

type EagerAnswer3 = {
  readonly Answer?: string | null;
  readonly Answer3?: string | null;
  readonly untitledfield?: Answer4 | null;
}

type LazyAnswer3 = {
  readonly Answer?: string | null;
  readonly Answer3?: string | null;
  readonly untitledfield?: Answer4 | null;
}

export declare type Answer3 = LazyLoading extends LazyLoadingDisabled ? EagerAnswer3 : LazyAnswer3

export declare const Answer3: (new (init: ModelInit<Answer3>) => Answer3)

type EagerAnswer2 = {
  readonly Answer?: string | null;
  readonly Answer2?: string | null;
  readonly untitledfield?: Answer3 | null;
}

type LazyAnswer2 = {
  readonly Answer?: string | null;
  readonly Answer2?: string | null;
  readonly untitledfield?: Answer3 | null;
}

export declare type Answer2 = LazyLoading extends LazyLoadingDisabled ? EagerAnswer2 : LazyAnswer2

export declare const Answer2: (new (init: ModelInit<Answer2>) => Answer2)

type EagerAnswer1 = {
  readonly Answer?: string | null;
  readonly Answer1?: string | null;
  readonly untitledfield?: Answer2 | null;
}

type LazyAnswer1 = {
  readonly Answer?: string | null;
  readonly Answer1?: string | null;
  readonly untitledfield?: Answer2 | null;
}

export declare type Answer1 = LazyLoading extends LazyLoadingDisabled ? EagerAnswer1 : LazyAnswer1

export declare const Answer1: (new (init: ModelInit<Answer1>) => Answer1)

type EagerInformation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Information, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FullName?: string | null;
  readonly RepID?: string | null;
  readonly Date?: string | null;
  readonly untitledfield?: Answer1 | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInformation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Information, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FullName?: string | null;
  readonly RepID?: string | null;
  readonly Date?: string | null;
  readonly untitledfield?: Answer1 | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Information = LazyLoading extends LazyLoadingDisabled ? EagerInformation : LazyInformation

export declare const Information: (new (init: ModelInit<Information>) => Information) & {
  copyOf(source: Information, mutator: (draft: MutableModel<Information>) => MutableModel<Information> | void): Information;
}