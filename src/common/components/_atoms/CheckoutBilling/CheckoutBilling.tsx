const CheckoutBilling = (props: Billing) => {
  const { formik, setValue, countries, states } = props;
  return (
    <form className="checkout container p-6 w-[50%]">
      <h2 className="text-2xl font-bold mb-6">Billing Information</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 font-medium">First name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Your first name"
              className="w-full p-2 border rounded-md"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <p className="text-red-500">{formik.errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 font-medium">Last name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Your first name"
              className="w-full p-2 border rounded-md"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.lastName && formik.touched.lastName && (
              <p className="text-red-500">{formik.errors.lastName}</p>
            )}
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
            name="Adress"
            placeholder="Email"
            className="w-full p-2 border rounded-md"
            value={formik.values.Adress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.Adress && formik.touched.Adress && (
            <p className="text-red-500">{formik.errors.Adress}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 font-medium">Country / Region</label>
            <select
              name="country"
              value={formik.values.country}
              className="w-full p-2 border rounded-md"
              onChange={(e) => {
                formik.handleChange(e);
                setValue(e.target.value);
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
            {formik.errors.country && formik.touched.country && (
              <p className="text-red-500">{formik.errors.country}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 font-medium">State</label>
            <select
              name="state"
              onChange={formik.handleChange}
              value={formik.values.state}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Select</option>
              {states.map((item, index) => {
                return (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            {formik.errors.state && formik.touched.state && (
              <p className="text-red-500">{formik.errors.state}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 font-medium">Zip Code</label>
            <input
              type="text"
              name="zip"
              placeholder="Zip Code"
              className="w-full p-2 border rounded-md"
              required
              value={formik.values.zip}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.zip && formik.touched.zip && (
              <p className="text-red-500">{formik.errors.zip}</p>
            )}
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
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500">{formik.errors.email}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 font-medium">Phone</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone number"
              className="w-full p-2 border rounded-md"
              required
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
              <p className="text-red-500">{formik.errors.phoneNumber}</p>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <label>Ship to a different address</label>
        </div>
      </div>
    </form>
  );
};

export default CheckoutBilling;
