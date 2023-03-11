// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Information, Answer8, Answer7, Answer6, Answer5, Answer4, Answer3, Answer2, Answer1 } = initSchema(schema);

export {
  Information,
  Answer8,
  Answer7,
  Answer6,
  Answer5,
  Answer4,
  Answer3,
  Answer2,
  Answer1
};