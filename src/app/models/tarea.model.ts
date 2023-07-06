export class ToDo {
    title: string;
    description: string;
    completed: boolean;

    constructor(pTitle: string = '', pDescription: string = '') {
        this.title = pTitle;
        this.description = pDescription;
        this.completed = false;

    }
}