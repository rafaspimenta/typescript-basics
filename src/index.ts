type Employee = {
    readonly id: number;
    name: string;
    retire: (date: Date) => void;
}
let employee: Employee= {
    id: 1,
    name: "rafael",
    retire: (date: Date) => console.log(date),
};

function kgtoLbs(weight: number | string) : number {
    if (typeof weight === 'number') {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2
    }
};

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let UImouse: UIWidget = {
    drag: () => {},
    resize: () => {}
};

UImouse.drag();

type Customer = {
    birthday: Date
};

function getCustomer(id: Number): Customer | null {
    return id === 0 ? null : { birthday: new Date() };
}
