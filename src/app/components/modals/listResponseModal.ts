import { ResponseModal } from "./responseModal";

export interface ListResponseModal<T> extends ResponseModal{
  data: T[];
}
