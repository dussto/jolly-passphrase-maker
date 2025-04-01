
export type CharacterTypes = {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
};

export interface PasswordOptions {
  length: number;
  characterTypes: CharacterTypes;
}

export const generatePassword = (options: PasswordOptions): string => {
  const { length, characterTypes } = options;
  const { uppercase, lowercase, numbers, symbols } = characterTypes;

  // Define character sets
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

  // Create a pool of allowed characters based on selected types
  let charPool = '';
  if (uppercase) charPool += uppercaseChars;
  if (lowercase) charPool += lowercaseChars;
  if (numbers) charPool += numberChars;
  if (symbols) charPool += symbolChars;

  // Fallback to lowercase if no character type is selected
  if (charPool === '') charPool = lowercaseChars;

  // Generate the password
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }

  return password;
};

export const calculatePasswordStrength = (
  password: string,
  characterTypes: CharacterTypes
): { score: number; label: string } => {
  if (!password) {
    return { score: 0, label: 'None' };
  }

  let score = 0;
  const { uppercase, lowercase, numbers, symbols } = characterTypes;

  // Add points for length
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (password.length >= 16) score += 1;

  // Add points for character variety
  if (uppercase) score += 1;
  if (lowercase) score += 1;
  if (numbers) score += 1;
  if (symbols) score += 1;

  // Determine strength label
  let label = 'Weak';
  if (score >= 3) label = 'Medium';
  if (score >= 5) label = 'Strong';
  if (score >= 7) label = 'Very Strong';

  return { score, label };
};
