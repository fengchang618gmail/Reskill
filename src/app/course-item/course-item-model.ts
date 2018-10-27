export class Course {
    id: string;
    name: string;
    description: string;
    photoUrl: string;

    constructor({
        id = '',
        name = '',
        description = '',
        photoUrl = '',
    } = {}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.photoUrl = photoUrl;
    }
}
