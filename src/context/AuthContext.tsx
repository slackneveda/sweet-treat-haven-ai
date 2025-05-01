
import { createContext, useState, useContext, useEffect } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

// Mock user data for demo purposes
const mockUsers = [
  {
    id: 1,
    username: "admin",
    email: "admin@sweettreathaven.com",
    password: "admin",
    isAdmin: true
  },
  {
    id: 2,
    username: "user",
    email: "user@example.com",
    password: "password",
    isAdmin: false
  }
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    }
    return null;
  });

  const isAuthenticated = user !== null;
  const isAdmin = user?.isAdmin || false;

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = async (username: string, password: string): Promise<boolean> => {
    // In a real app, this would be an API call
    const foundUser = mockUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    // In a real app, this would be an API call
    const userExists = mockUsers.some(
      (u) => u.username === username || u.email === email
    );

    if (userExists) {
      return false;
    }

    // In a real app, this would create a user in the database
    const newUser = {
      id: mockUsers.length + 1,
      username,
      email,
      isAdmin: false
    };

    setUser(newUser);
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        isAuthenticated,
        isAdmin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
