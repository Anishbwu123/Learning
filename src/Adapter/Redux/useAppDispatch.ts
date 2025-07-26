import { useDispatch } from 'react-redux';
import type { AppDispatch } from './Store/Store';

export const useAppDispatch: () => AppDispatch = useDispatch;
