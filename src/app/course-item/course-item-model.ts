export class Course {
    id: string;
    name: string;
    description: string;
    photoUrl: string;
    slug: string;

    constructor({
        id = '',
        name = '',
        description = '',
        photoUrl = '',
        slug = '',
    } = {}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.photoUrl = photoUrl;
        this.slug = slug;
    }
}
