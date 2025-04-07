import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const [passwordArray, setPasswordArray] = useState([]);
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const ref = useRef();
  const passRef = useRef();

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const savePassword = () => {
    const newPassword = { ...form, id: uuidv4() };
    const updatedArray = [...passwordArray, newPassword];
    setPasswordArray(updatedArray);
    localStorage.setItem("passwords", JSON.stringify(updatedArray));
    setForm({ site: "", username: "", password: "" });
  };

  const deletePassword = (id) => {
    if (!confirm("Are you sure you want to delete this password?")) return;
    const updated = passwordArray.filter((item) => item.id !== id);
    setPasswordArray(updated);
    localStorage.setItem("passwords", JSON.stringify(updated));
  };

  const editPassword = (id) => {
    const selected = passwordArray.find((item) => item.id === id);
    if (!selected) return;
    setForm({
      site: selected.site || "",
      username: selected.username || "",
      password: selected.password || "",
    });
    const filtered = passwordArray.filter((item) => item.id !== id);
    setPasswordArray(filtered);
  };

  const showPassword = () => {
    const input = passRef.current;
    input.type = input.type === "password" ? "text" : "password";
    ref.current.src = input.type === "password" ? "icons/eye.png" : "icons/hidden.png";
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      <div className="p-4 max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-black mt-5">
          <span className="text-purple-500">&lt;</span>
          Pass
          <span className="text-purple-500">Man/&gt;</span>
        </h1>

        {/* Form Section */}
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 items-center border border-purple-300 rounded-lg shadow-xl p-4 bg-white mt-8">
          <input
            required
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            name="site"
            className="w-full flex-1 min-w-[250px] rounded-xl p-2 px-3 border border-purple-300 shadow focus:border-purple-900 focus:outline-none"
            type="text"
          />

          <input
            required
            value={form.username}
            onChange={handleChange}
            placeholder="Enter Username"
            name="username"
            className="w-full flex-1 min-w-[250px] rounded-lg p-2 px-3 border border-purple-300 shadow focus:border-purple-900 focus:outline-none"
            type="text"
          />

          <div className="relative w-full md:w-auto flex-1 min-w-[250px]">
            <input
              required
              ref={passRef}
              value={form.password}
              onChange={handleChange}
              placeholder="Enter Password"
              name="password"
              className="w-full rounded-lg p-2 pr-10 px-3 border border-purple-300 shadow focus:border-purple-900 focus:outline-none"
              type="password"
            />
            <span
              onClick={showPassword}
              className="absolute right-2 top-2 cursor-pointer"
            >
              <img ref={ref} className="p-1" width={26} src="icons/eye.png" alt="show" />
            </span>
          </div>

          <button
            onClick={savePassword}
            className="mt-3 text-black flex items-center justify-center w-fit border border-purple-300 rounded-lg font-bold p-2 px-4 shadow hover:border-purple-950 transition bg-purple-200 hover:bg-purple-100 gap-2"
          >
            <lord-icon
              src="https://cdn.lordicon.com/tsrgicte.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#121331,secondary:#8930e8"
              style={{ width: 30, height: 30 }}
            ></lord-icon>
            Save
          </button>
        </div>

        {/* Password List */}
        <div className="text-center text-black mt-10">
          <h1 className="font-bold text-2xl mb-4">Your Passwords</h1>
          {passwordArray.length === 0 ? (
            <p className="text-lg font-semibold tracking-wide">No Passwords Found!</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="table-auto w-full md:w-2/3 mx-auto border border-purple-300 rounded-md shadow-xl bg-white">
                <thead className="bg-purple-400 text-black">
                  <tr>
                    <th className="p-2">Site</th>
                    <th className="p-2">Username</th>
                    <th className="p-2">Password</th>
                    <th className="p-2">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-purple-200 text-black">
                  {passwordArray.map((item) => (
                    <tr key={item.id}>
                      <td className="text-center p-2 border border-purple-300">
                        {item.site}
                      </td>
                      <td className="text-center p-2 border border-purple-300">
                        {item.username}
                      </td>
                      <td className="text-center p-2 border border-purple-300">
                        {item.password}
                      </td>
                      <td className="text-center p-2 border border-purple-300">
                        <span onClick={() => editPassword(item.id)} className="cursor-pointer mx-1">
                          <lord-icon
                            src="https://cdn.lordicon.com/vwzukuhn.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#545454,tertiary:#8930e8,quaternary:#ebe6ef"
                            style={{ width: 25, height: 25 }}
                          ></lord-icon>
                        </span>
                        <span onClick={() => deletePassword(item.id)} className="cursor-pointer mx-1">
                          <lord-icon
                            src="https://cdn.lordicon.com/hwjcdycb.json"
                            trigger="hover"
                            colors="primary:#000000,secondary:#a866ee"
                            style={{ width: 25, height: 25 }}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
