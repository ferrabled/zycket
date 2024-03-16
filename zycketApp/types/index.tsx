export class Ticket {
    name!: string;
    description!: string;
    image!: string;
    //object containing the rest
    attributes!: Attributes;
}

export class Attributes {
    promoter!: string;
    location!: string;
    quantity!: number;
    date!: string;
}