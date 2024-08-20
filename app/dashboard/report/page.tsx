const Report = () => {
  return (
    <div className="bg-white py-8 px-4 md:px-8 rounded-lg mt-14 md:mx-8 my-6">
      <form action="">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="border rounded-lg px-2 py-1 w-full md:w-40 mb-4 md:mb-0 text-black mr-3">
            <label htmlFor="subject" className="text-gray-500 text-sm">
              Subject<br></br>
            </label>
            <select name="subject" id="subject" className="w-full text-sm">
              <option value="1">Advance java</option>
              <option value="1">B</option>
              <option value="2">Python</option>
              <option value="2">Kotlin</option>
              <option value="2">java</option>
              <option value="2">Database</option>
            </select>
          </div>
          <div className="border rounded-lg px-2 py-1 w-full md:w-40 mb-4 md:mb-0 text-black mr-3">
            <label htmlFor="subject" className="text-gray-500 text-sm">
              Section<br></br>
            </label>
            <select name="subject" id="subject" className="w-full text-sm">
              <option value="1">A</option>
              <option value="1">B</option>
              <option value="2">C</option>
              <option value="2">D</option>
              <option value="2">E</option>
              <option value="2">D</option>
            </select>
          </div>
          <div className="border rounded-lg px-2 py-1 w-full md:w-40 mb-4 md:mb-0 text-black mr-3">
            <label htmlFor="subject" className="text-gray-500 text-sm">
              Month<br></br>
            </label>
            <select name="subject" id="subject" className="w-full text-sm">
              <option value="1">jan</option>
              <option value="1">feb</option>
              <option value="2">Mar</option>
              <option value="2">Apr</option>
              <option value="2">May</option>
              <option value="2">Jun</option>
            </select>
          </div>

          <div className="border rounded-lg px-2 py-1 w-full md:w-40 mb-4 md:mb-0 text-black mr-3">
            <label htmlFor="subject" className="text-gray-500 text-sm">
              Year<br></br>
            </label>
            <select name="subject" id="subject" className="w-full text-sm">
              <option value="1">2023</option>
              <option value="1">2022</option>
              <option value="2">2021</option>
              <option value="2">2020</option>
              <option value="2">2019</option>
              <option value="2">2018</option>
            </select>
          </div>

          <div className="flex justify-center md:justify-start">
            <button className="text-white text-sm  rounded-xl bg-blue-500 px-4 py-2 shadow-lg mt-2 md:ml-4">
              Generate Sheet
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Report;

