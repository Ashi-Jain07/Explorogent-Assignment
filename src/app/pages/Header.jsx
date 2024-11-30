function Header() {
  return (
    <>
      <header className="bg-blue-100 py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">ShopLogo</h1>
        <nav>
          <ul className="lsm:flex gap-8">
            <li><a href="#" className="text-gray-700 hover:text-blue-500 text-2xl">Home</a></li>
            <li><a href="#FAQ" className="text-gray-700 hover:text-blue-500 text-2xl">FAQs</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-500 text-2xl">Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
};

export default Header;