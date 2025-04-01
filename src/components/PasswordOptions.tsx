
import React from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { CharacterTypes } from "@/utils/passwordGenerator";

interface PasswordOptionsProps {
  length: number;
  setLength: (length: number) => void;
  characterTypes: CharacterTypes;
  setCharacterTypes: (types: CharacterTypes) => void;
}

const PasswordOptions: React.FC<PasswordOptionsProps> = ({
  length,
  setLength,
  characterTypes,
  setCharacterTypes,
}) => {
  const handleToggleCharType = (type: keyof CharacterTypes) => {
    setCharacterTypes({
      ...characterTypes,
      [type]: !characterTypes[type],
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label htmlFor="length">Password Length</Label>
          <span className="text-sm font-medium">{length}</span>
        </div>
        <Slider
          id="length"
          min={8}
          max={32}
          step={1}
          value={[length]}
          onValueChange={(value) => setLength(value[0])}
          className="cursor-pointer"
        />
      </div>

      <div className="space-y-3">
        <h3 className="font-medium">Character Types</h3>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="uppercase" className="cursor-pointer">
              Include Uppercase Letters
            </Label>
            <Switch
              id="uppercase"
              checked={characterTypes.uppercase}
              onCheckedChange={() => handleToggleCharType("uppercase")}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="lowercase" className="cursor-pointer">
              Include Lowercase Letters
            </Label>
            <Switch
              id="lowercase"
              checked={characterTypes.lowercase}
              onCheckedChange={() => handleToggleCharType("lowercase")}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="numbers" className="cursor-pointer">
              Include Numbers
            </Label>
            <Switch
              id="numbers"
              checked={characterTypes.numbers}
              onCheckedChange={() => handleToggleCharType("numbers")}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="symbols" className="cursor-pointer">
              Include Symbols
            </Label>
            <Switch
              id="symbols"
              checked={characterTypes.symbols}
              onCheckedChange={() => handleToggleCharType("symbols")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordOptions;
