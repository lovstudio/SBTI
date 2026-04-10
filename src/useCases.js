import { CASES } from '../cases/registry';

export default function useCases() {
  return { cases: CASES, error: null };
}
