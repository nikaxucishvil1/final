interface button {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
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
  count: number;
}

interface RatingType {
  rate: number;
  count: number;
}

interface GlobalStateType {
  data: DataType[];
  cart: DataType[];
  setCart: React.Dispatch<React.SetStateAction<any>>;
  nav: string;
  countries:CountriesType[];
  setNav: React.Dispatch<React.SetStateAction<string>>;
}
interface CountriesType{
  code2:string,
  code3:string,
  name:string,
  capital:string,
  region:string,
  subregion:string,
  states:states[]
}
interface states {
  code:string,
  name:string,
  subdivision: string | null
}
interface List {
  children: string;
}
interface CardProducts {
  decrement: (id: number, count: number) => void;
  increment: (id: number, count: number) => void;
  calculateSubtotal: (item: DataType) => React.ReactNode;
  item: DataType;
  removeItem: (item: number) => void;
}
interface Total {
  calculateTotal: () => React.ReactNode;
  setNav: React.Dispatch<React.SetStateAction<string>>;
  cart:DataType[]
}
interface COInput {
  label:string;
  InputType:string;
  Placeholder:string;
  InputName?:string;
  className?:string
}
interface Billing {
  formik:any;
  setValue:React.Dispatch<React.SetStateAction<string>>;
  countries:CountriesType[];
  states:states[]
}

interface FormValues {
  firstName: string;
  lastName: string;
  Address: string;
  zip: string;
  email: string;
  phoneNumber: string;
  state: string;
  country: string;
}

interface CheckoutCard {
  cart:DataType[];
  calculateTotal: () => React.ReactNode;
  calculateSubtotal: (item: DataType) => React.ReactNode;
  paymentMethod:string;
  handlePaymentMethodChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}