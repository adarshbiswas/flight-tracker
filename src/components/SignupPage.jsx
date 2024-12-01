import React from "react";

const SignupPage = () => {
  return <div className="signup w-full h-full bg-red-300 flex items-center justify-center">
<div className="signup_content w-[500px] h-[80%] py-4">
    <div className="title text-center">
        <h1 className="text-2xl font-semibold">Create your account</h1>
        <h2 className="text-xl font-light">Get started for free</h2>
    </div>
    <form className="form_content flex flex-col w-full gap-3 items-center mt-10">
        <input className="form_input_box w-[65%] p-3 bg-transparent outline-none rounded-md text-black" type="email" placeholder="Email address" />
        <input className="form_input_box w-[65%] p-3 bg-transparent outline-none rounded-md text-black" type="password" placeholder="Password" />
        <div className="checkbox">
            <h2 className="flex items-center gap-1 text-xs"><input type="checkbox" name="" id="" /> Remember me</h2>
            
        </div>
    </form>
</div>
  </div>;
};

export default SignupPage;
