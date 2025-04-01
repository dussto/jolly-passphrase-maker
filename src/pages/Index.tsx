
import React from "react";
import PasswordGenerator from "@/components/PasswordGenerator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="w-full max-w-md">
        <PasswordGenerator />
      </div>
      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>Create strong, secure passwords with ease</p>
      </footer>
    </div>
  );
};

export default Index;
