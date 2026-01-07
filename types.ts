
export type Status = 'active' | 'expiring' | 'expired' | 'processing' | 'paid' | 'unpaid';

export interface Domain {
  id: string;
  name: string;
  status: Status;
  expiryDate: string;
  autoRenew: boolean;
  price: number;
}

export interface HostingPlan {
  id: string;
  name: string;
  price: number;
  type: string;
  features: string[];
  isPopular?: boolean;
}

export interface CartItem {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  type: 'domain' | 'hosting' | 'addon';
}

export interface UserProfile {
  name: string;
  email: string;
  clientId: string;
  avatar: string;
}
