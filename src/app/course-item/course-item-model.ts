export class Course {
    name: string;
    description: string;

    constructor({
        name = '',
        description = '',
    } = {}) {
        this.name = name;
        this.description = description;
    }
}
