const Attendence = () => {
  return (
    <>
    <div className="bg-white py-8 px-4 md:px-8 rounded-lg mt-14 md:mx-8 my-6">
      <form action="">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="border rounded-lg px-2 py-1 w-full md:w-40 mb-4 md:mb-0 text-black mr-3">
            <label htmlFor="subject" className="text-gray-500 text-sm">
              Subject<br></br>
            </label>
            <select name="subject" id="subject" className="w-full text-sm ">
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
          <div className="border rounded-lg px-2 py-1   w-full md:w-40  mb-4 md:mb-0 text-black mr-3">
            <label htmlFor="subject" className="text-gray-500 text-sm">
              Date<br></br>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full text-sm"
            />
          </div>
          <div className="flex justify-center md:justify-start">
            <button className="text-white text-sm  rounded-xl bg-blue-500 px-4 py-2 shadow-lg mt-2 md:ml-4">
              Generate Sheet
            </button>
          </div>
        </div>
      </form>
    </div>
  
  <div className="bg-white rounded-lg mt-14 mx-4 md:mx-8 my-6 overflow-hidden">
        <h1 className="text-blue-900 font-semibold m-3 pt-4">Subject Report</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-slate-100 shadow-md">
              <tr className="text-gray-700 text-sm">
                <th className="px-2 py-2 text-center"> #</th>
                <th className="px-2 py-2 text-center">Student Name</th>
                <th className="px-2 py-2 text-center">Semester</th>
                <th className="px-2 py-2 text-center">Total Present Day</th>
                <th className="px-2 py-2 text-center">Total Absent Day</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-gray-500 text-sm">
                <td className="px-2 py-2 text-center">1</td>
                <td className="px-2 py-2 text-center">MariaDB</td>
                <td className="px-2 py-2 text-center">First</td>
                <td className="px-2 py-2 text-center">10</td>
                <td className="px-2 py-2 text-center">5</td>
              </tr>
              <tr className="text-gray-500 text-sm">
                <td className="px-2 py-2 text-center">2</td>
                <td className="px-2 py-2 text-center">MariaDB</td>
                <td className="px-2 py-2 text-center">first</td>
                <td className="px-2 py-2 text-center">8</td>
                <td className="px-2 py-2 text-center">3</td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center md:justify-start">
        <button className="text-white rounded-xl bg-blue-500 px-4 w-32 py-2 my-3 md:ml-7 shadow-lg">
          Submit
        </button>
      </div>

      </>

  );
};

export default Attendence;
