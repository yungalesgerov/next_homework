'use client'

import { FC, PropsWithChildren, useState } from 'react'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const Provider: FC<PropsWithChildren> = ({ children }) => {

  

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
