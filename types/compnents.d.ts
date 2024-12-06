
declare global {
  namespace JSX {
    import { AppKitConnectButton, AppKitNetworkButton } from "@reown/appkit";
  
    interface IntrinsicElements {
      'appkit-network-button': AppKitNetworkButton;
      'appkit-connect-button': AppKitConnectButton;
    }
  }
}