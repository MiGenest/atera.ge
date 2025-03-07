export default function ContactForm() {
    return (
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">დაგვიკავშირდით</h2>
        <form className="mt-6">
          <label className="block text-gray-700">სახელი</label>
          <input type="text" className="w-full p-3 border rounded-lg mt-2" />
  
          <label className="block text-gray-700 mt-4">Email</label>
          <input type="email" className="w-full p-3 border rounded-lg mt-2" />
  
          <label className="block text-gray-700 mt-4">შეტყობინება</label>
          <textarea className="w-full p-3 border rounded-lg mt-2 h-32"></textarea>
  
          <button type="submit" className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700">
            გაგზავნა
          </button>
        </form>
      </div>
    );
  }