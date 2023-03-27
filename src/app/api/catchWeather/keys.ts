import { QueryKey } from "react-query";

export const createKey = (city: string): QueryKey => ["city", city]