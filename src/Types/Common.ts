interface button {
  children: React.ReactNode;
  className?: string;
  onClick?:() => void;
}
interface Input {
  type: string;
  placeholder: string;
  className: string;
}
interface Search {
  count: number;
  cost: number;
}
interface Show {
  place: string;
}
interface DataContextType {
  data: any;
}
interface DataType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingType;
  count :number
}

interface RatingType {
  rate: number;
  count: number;
}

 interface GlobalStateType  {
    data: DataType[];
    cart:DataType[];
    setCart:React.Dispatch<React.SetStateAction<any>>
  };
  interface List {
    children:string
  }
  interface CardProducts {
    decrement:(id:number, count:number) => void;
    increment:(id:number, count:number) => void;
    calculateSubtotal:(item:DataType) => React.ReactNode;
    item:DataType;
    removeItem:(item:number) => void
  }
  interface Total {
    calculateTotal:() => React.ReactNode
  }