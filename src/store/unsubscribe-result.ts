import { writable } from 'svelte/store';
import { Api } from '../api';
import type { UnsubscribeResult } from '../api/api-unsubscribe';

export interface ErrorResult<TErrorType> {
  message?: string;
  type: TErrorType;
}

interface ILoadable<TData> {
  data: TData;
  error?: ErrorResult<UnsubscribeResult>;
  isLoading: boolean;
}

function createUnsubscribeResultStore() {
  const { subscribe, update } = writable<ILoadable<null>>({
    data: null,
    error: undefined,
    isLoading: true
  });

  const unsubscribe = async (token: string): Promise<void> => {
    update((state) => ({
      ...state,
      isLoading: true
    }));

    const result = await Api.unsubscribe(token);

    if (result === 'ok') {
      update((state) => ({
        ...state,
        error: undefined,
        isLoading: false
      }));

      return;
    }

    update((state) => ({
      ...state,
      error: {
        type: result
      },
      isLoading: false
    }));
  }

  return { unsubscribe, subscribe };
}

export const unsubscribeResultStore = createUnsubscribeResultStore();
