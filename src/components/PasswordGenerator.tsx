
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PasswordDisplay from "./PasswordDisplay";
import PasswordOptions from "./PasswordOptions";
import PasswordStrength from "./PasswordStrength";
import { 
  generatePassword, 
  calculatePasswordStrength,
  CharacterTypes 
} from "@/utils/passwordGenerator";
import { Key } from "lucide-react";

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [characterTypes, setCharacterTypes] = useState<CharacterTypes>({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });
  const [strength, setStrength] = useState({ score: 0, label: "None" });

  // Generate a password on initial load
  useEffect(() => {
    handleGeneratePassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Calculate password strength when password or character types change
  useEffect(() => {
    const newStrength = calculatePasswordStrength(password, characterTypes);
    setStrength(newStrength);
  }, [password, characterTypes]);

  const handleGeneratePassword = () => {
    const newPassword = generatePassword({
      length,
      characterTypes,
    });
    setPassword(newPassword);
  };

  return (
    <Card className="w-full max-w-md shadow-lg border-opacity-50 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Key className="h-6 w-6 text-primary" />
            Password Generator
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <PasswordDisplay password={password} />
        
        <PasswordStrength strength={strength} />
        
        <PasswordOptions
          length={length}
          setLength={setLength}
          characterTypes={characterTypes}
          setCharacterTypes={setCharacterTypes}
        />
        
        <Button 
          className="w-full" 
          onClick={handleGeneratePassword} 
          size="lg"
        >
          Generate Password
        </Button>
      </CardContent>
    </Card>
  );
};

export default PasswordGenerator;
