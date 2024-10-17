export default function Button({ children, ...props }) {
  return (
    <button {...props} className='mx-6 mb-4 inline-flex items-center py-3 px-4 text-sm font-medium text-white bg-gray-600 rounded-lg hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700'>{children}</button>
  );
}
