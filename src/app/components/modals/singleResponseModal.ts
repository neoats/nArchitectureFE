import { ResponseModal } from "./responseModal";

export interface SingleResponseModal<T> extends ResponseModal{
  data:T
}
