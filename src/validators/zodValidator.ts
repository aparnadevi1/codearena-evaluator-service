import { NextFunction, Request, Response } from "express";
import { ZodType } from "zod";

import {
  CreateSubmissionDto,
  createSubmissionZodSchema,
} from "../dtos/CreateSubmissionDto";

export const validateCreateSubmissionDto = (schema: ZodType<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({ ...req.body });
      next();
    } catch (error) {
      console.error("Validation Error:", error);
      return res.status(400).json({
        success: false,
        message: "Invalid request params received",
        data: {},
        error: error,
      });
    }
  };
};
