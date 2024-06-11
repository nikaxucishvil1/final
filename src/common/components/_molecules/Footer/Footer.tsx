import {
  FaCcApplePay,
  FaCcDiscover,
  FaCcMastercard,
  FaCcVisa,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-customBlack text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items center gap-3 mb-4">
              <img src="../../../../../public/assets/leaf.svg" alt="" />
              <h2 className="text-2xl font-bold">Ecobazar</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <p className="text-gray-400">
              (219) 555-0114 or{" "}
              <a href="mailto:Proxy@gmail.com" className="text-green-500">
                Proxy@gmail.com
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2">My Account</h3>
              <ul>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Order History
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Shopping Cart
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Wishlist
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Helps</h3>
              <ul>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2">Proxy</h3>
              <ul>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Product
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Track Order
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Categories</h3>
              <ul>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Fruit & Vegetables
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Meat & Fish
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Bread & Bakery
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Beauty & Health
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; Ecobazar eCommerce © 2021. All Rights Reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaCcApplePay fontSize={40} />
            <FaCcVisa fontSize={40} />
            <FaCcDiscover fontSize={40} />
            <FaCcMastercard fontSize={40} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
