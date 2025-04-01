
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Copy } from "lucide-react";

interface PasswordDisplayProps {
  password: string;
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password }) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      toast.success("Password copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy password");
      console.error("Failed to copy: ", error);
    }
  };

  return (
    <div className="relative w-full">
      <Input
        className="pr-12 text-lg font-mono h-12 bg-white/50 backdrop-blur-sm shadow-md"
        value={password}
        readOnly
        placeholder="Your password will appear here"
      />
      <Button
        size="sm"
        variant="ghost"
        className="absolute right-1 top-1/2 -translate-y-1/2 h-10 px-3 hover:bg-primary/10"
        onClick={copyToClipboard}
        title="Copy to clipboard"
      >
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default PasswordDisplay;
