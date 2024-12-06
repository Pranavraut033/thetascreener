
"use client";

import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { type AppKitNetwork, arbitrum, mainnet, solana } from '@reown/appkit/networks'
import type { ReactNode } from 'react';

// 1. Get projectId
const projectId = 'ce5db695dce6d51c2f2edd093809db2b';

// 2. Set the networks
const networks: [AppKitNetwork, ...AppKitNetwork[]] = [arbitrum, mainnet, solana,];

// 3. Create a metadata object - optional
const metadata = {
  name: 'Thetascreener',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit', // origin must match your domain & subdomain
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

// 4. Create a AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata,
  projectId,
  features: {
    socials: false,
    email: false,
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

type Props = {
  children?: ReactNode
}

const AppKit: React.FC<Props> = ({ children }) => {
  return <>{children}</>
}

export default AppKit