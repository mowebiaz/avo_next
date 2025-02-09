'use client'

import { useRouter } from "next/navigation";
import { RouterProvider } from "react-aria-components";

export function ReactAriaRouter({ children }) {
  let router = useRouter()

  return (
    <RouterProvider navigate={router.push} >
      {children}
    </RouterProvider>
  )

}