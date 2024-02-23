import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Email submitted:", email);
        }}
        className="flex flex-col"
        >
        <label htmlFor="email">Email address</label>

        <input
          className="border border-gray-300 p-3 rounded-lg mb-5"
          placeholder="email@company.com"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Submit button */}
        <button type="submit" className="bg">Subscribe to monthly newsletter</button>
      </form>
    </div>
  );
}

export default Form;
