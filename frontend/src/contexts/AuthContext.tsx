import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

interface CustomUser {
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: {
    creationTime?: string;
    lastSignInTime?: string;
  };
  providerData: Array<{
    providerId: string;
    uid: string;
    displayName: string | null;
    email: string | null;
    phoneNumber: string | null;
    photoURL: string | null;
  }>;
  refreshToken: string;
  tenantId: string | null;
  uid: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: CustomUser | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<CustomUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const customUser: CustomUser = {
          email: firebaseUser.email || '',
          emailVerified: firebaseUser.emailVerified,
          isAnonymous: firebaseUser.isAnonymous,
          metadata: {
            creationTime: firebaseUser.metadata.creationTime,
            lastSignInTime: firebaseUser.metadata.lastSignInTime,
          },
          providerData: firebaseUser.providerData.map(provider => ({
            providerId: provider.providerId,
            uid: provider.uid,
            displayName: provider.displayName,
            email: provider.email,
            phoneNumber: provider.phoneNumber,
            photoURL: provider.photoURL,
          })),
          refreshToken: firebaseUser.refreshToken,
          tenantId: firebaseUser.tenantId,
          uid: firebaseUser.uid,
        };
        setUser(customUser);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    });

    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    // TODO: Implement actual login logic
    const mockUser: CustomUser = {
      email,
      emailVerified: true,
      isAnonymous: false,
      metadata: {
        creationTime: new Date().toISOString(),
        lastSignInTime: new Date().toISOString(),
      },
      providerData: [{
        providerId: 'password',
        uid: email,
        displayName: null,
        email,
        phoneNumber: null,
        photoURL: null,
      }],
      refreshToken: 'mock-refresh-token',
      tenantId: null,
      uid: email,
    };
    setIsAuthenticated(true);
    setUser(mockUser);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const signup = async (email: string, password: string) => {
    // TODO: Implement actual signup logic
    const mockUser: CustomUser = {
      email,
      emailVerified: false,
      isAnonymous: false,
      metadata: {
        creationTime: new Date().toISOString(),
      },
      providerData: [{
        providerId: 'password',
        uid: email,
        displayName: null,
        email,
        phoneNumber: null,
        photoURL: null,
      }],
      refreshToken: 'mock-refresh-token',
      tenantId: null,
      uid: email,
    };
    setIsAuthenticated(true);
    setUser(mockUser);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 