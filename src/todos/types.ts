import {GetTodoQuery} from 'src/API';

export type Todo = Omit<Exclude<GetTodoQuery['getTodo'], null>, '__typename'>;
