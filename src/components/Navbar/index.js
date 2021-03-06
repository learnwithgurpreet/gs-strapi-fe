import Link from "next/link";

const Navbar = ({ data, isOpen, onClickHandler }) => {
  return (
    <header className="flex p-4 justify-between shadow-md fixed w-full bg-white z-10 top-0">
      <h1 className="flex items-center">
        <Link href="/">
          <a className="no-hover">EGG</a>
        </Link>
      </h1>
      <div className="hidden md:block">
        {data.map((o) => (
          <Link key={o.label} href={o.link}>
            <a className="ml-4 hover:text-yellow-500">{o.label}</a>
          </Link>
        ))}
      </div>
      <div className="relative block md:hidden">
        <button
          className="w-14 h-8 relative focus:outline-none rounded"
          onClick={onClickHandler}
        >
          <div className="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              className={`block absolute h-0.5 w-7 bg-current transform transition duration-500 ease-in-out ${
                isOpen ? `rotate-45` : `-translate-y-1.5`
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isOpen && `opacity-0`
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-7 bg-current transform transition duration-500 ease-in-out ${
                isOpen ? `-rotate-45` : `translate-y-1.5`
              }`}
            ></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
