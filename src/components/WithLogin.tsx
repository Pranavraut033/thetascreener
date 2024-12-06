"use client"
import { useAppKitAccount } from "@reown/appkit/react";
import type { ReactNode } from "react";
import Login from "./Login";

type Props = {
  children: ReactNode
}

const WithLogin: React.FC<Props> = ({ children }) => {
  const { isConnected } = useAppKitAccount()

  if (isConnected) {
    return children
  }

  return <Login />
}

export default WithLogin
