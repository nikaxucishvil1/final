import  { useContext, useState, useEffect } from "react";
import { GlobalState } from "../../_organisms/Mainlayout";

const CheckoutComponent = () => {
  const context = useContext(GlobalState);
  if (!context) return null;
  const { countries } = context;
  const [value, setValue] = useState("");
  const [states, setStates] = useState([]);

  useEffect(() => {
    const filteredStates = countries
      .filter((item) => item.name === value)
      .flatMap((item) => item.states);
    setStates(filteredStates);
  }, [value, countries]);
  

  return (
    <div className="checkout container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Billing Information</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 font-medium">First name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Your first name"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Last name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Your last name"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">
              Company name (optional)
            </label>
            <input
              type="text"
              name="companyName"
              placeholder="Company name"
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 font-medium">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            placeholder="Street Address"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 font-medium">Country / Region</label>
            <select
              name="country"
              className="w-full p-2 border rounded-md"
              onChange={(e) => {
                const value = e.target.value;
                setValue(value);
              }}
              required
            >
              <option value="">Select</option>
              {countries.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium">State</label>
            <select
              name="state"
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Select</option>
              {states.map((item,index) => {
                return <option key={index} value={item.name}>{item.name}</option>;
              })}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <label>Ship to a different address</label>
        </div>
      </form>
    </div>
  );
};

export default CheckoutComponent;
