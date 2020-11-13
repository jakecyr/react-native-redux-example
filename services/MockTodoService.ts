import { Todo } from "../store/todo/model";

export class MockTodoService {

    public static async getTodos(): Promise<Todo[]> {
        return [
            {
                id: 1,
                title: 'Do homework',
                complete: true,
                dateDue: new Date(2020, 11, 13),
            }, {
                id: 2,
                title: 'Workout',
                complete: false,
                dateDue: new Date(2020, 11, 14),
            }, {
                id: 3,
                title: 'Work',
                complete: false,
                dateDue: new Date(2020, 11, 15),
            },
        ];
    }
}
