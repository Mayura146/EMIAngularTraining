export class Employee {
    id: number;
    name: string;
    location: string;
    Gender: string;
    isActive: boolean;
    constructor(id: number, name: string, location: string, Gender: string, isActive: boolean) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.Gender = Gender;
        this.isActive = isActive;
    }
}
