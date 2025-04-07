import React from 'react';

function Contact() {
  return (
    <>
      {/* Background with no scroll issues */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

      {/* Centered content */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <h1 className="text-4xl font-bold text-center text-black">Contact Us</h1>
        <a href="" target="_blank"></a>
      </div>
    </>
  );
}

export default Contact;
