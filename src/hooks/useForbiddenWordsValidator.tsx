
import * as z from 'zod'
const useCustomTextValidator = (forbiddenWords: string[]): z.ZodSchema<string> => {
  return z.string()
    .min(3)
    .refine(
      (value) => {
        return !forbiddenWords.some((word) =>
          value.toLowerCase().includes(word.toLowerCase()),
        );
      },
      {
        message: 'این کلمه مجاز نیست',
      },
    );
};

export default useCustomTextValidator;