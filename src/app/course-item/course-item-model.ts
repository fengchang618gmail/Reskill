export class Course {
    id: string;
    name: string;
    description: string;

    constructor({
        id = '',
        name = '',
        description = '',
    } = {}) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}
