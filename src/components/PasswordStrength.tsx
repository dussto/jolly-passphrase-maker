
import React from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface PasswordStrengthProps {
  strength: {
    score: number;
    label: string;
  };
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ strength }) => {
  const { score, label } = strength;
  const maxScore = 7; // Maximum possible score
  const percentage = (score / maxScore) * 100;

  // Determine the color based on the strength
  const getColorClass = () => {
    switch (label) {
      case "Weak":
        return "bg-password-weak";
      case "Medium":
        return "bg-password-medium";
      case "Strong":
        return "bg-password-strong";
      case "Very Strong":
        return "bg-password-very";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className="space-y-2 w-full">
      <div className="flex justify-between items-center">
        <p className="text-sm font-medium">Password Strength</p>
        <p
          className={cn(
            "text-sm font-medium",
            label === "Weak" && "text-password-weak",
            label === "Medium" && "text-password-medium",
            label === "Strong" && "text-password-strong",
            label === "Very Strong" && "text-password-very"
          )}
        >
          {label}
        </p>
      </div>
      <Progress
        value={percentage}
        className="h-2 bg-gray-200"
        indicatorClassName={cn(getColorClass())}
      />
    </div>
  );
};

export default PasswordStrength;
