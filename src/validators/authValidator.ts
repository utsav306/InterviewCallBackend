import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const signupSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const validateSignup = (req: Request, res: Response, next: NextFunction): void => {
  try {
    signupSchema.parse(req.body);
    next();
  } catch (err: any) {
    res.status(400).json({ message: err.errors?.[0]?.message || 'Invalid input' });
    return; 
  }
};

export const validateLogin = (req: Request, res: Response, next: NextFunction): void => {
  try {
    loginSchema.parse(req.body);
    next();
  } catch (err: any) {
    res.status(400).json({ message: err.errors?.[0]?.message || 'Invalid input' });
    return;
  }
};
