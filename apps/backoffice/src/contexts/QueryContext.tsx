// @ts-nocheck
import { memo } from 'react';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import type { ChildrenProps } from 'mui-react-common';

const queryCache = new QueryCache();
const mutationCache = new MutationCache();

const config = {
  queryCache,
  mutationCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
};

const queryClient = new QueryClient(config);

function QueryProvider({ children }: ChildrenProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  );
}

export default memo(QueryProvider);
