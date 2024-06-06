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