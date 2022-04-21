import Logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav class="border-gray-200 px-2 sm:px-4 py-2.5 fixed w-full">
        <div class="container flex flex-wrap justify-between items-center mx-auto px-6 py-2">
            <div class="flex items-center">
                <img src={Logo} class="mr-3 h-6 sm:h-9" alt="Charity Zone Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white hover:text-gray-300 cursor-pointer">Charity Zone</span>
            </div>
            <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
                <li>
                <a href="#" class="block py-2 pr-4 pl-3 text-white rounded md:hover:text-gray-300 md:bg-transparent md:p-0" aria-current="page">Register</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
