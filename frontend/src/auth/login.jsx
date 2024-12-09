function Login() {
  return (
    <>
      <div className="h-screen w-screen bg-gray-400 flex justify-center items-center">
        <div className="h-3/6 w-2/6 bg-white rounded-md">
          <h3 className="text-gray-800 p-5 text-center text-2xl font-semibold">LOGIN FORM</h3>
          <div className="p-6 ">
            <label className="text-md text-gray-800 block md-1">Email</label>
            <input
              type="text"
              className="w-full p-2 rounded-md bg-gray-200 mb-3 "
            />
            <label className="text-md text-gray-800 block md-1">Password</label>
            <input
              type="password"
              className="w-full p-2 rounded-md bg-gray-200 mb-3 "
            />
          </div>
          <div  className="flex justify-center items-center ">
          <button className="py-2 px-4 bg-blue-500 text-white rounded-md">submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
