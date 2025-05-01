
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const { login, register } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const validateLogin = () => {
    const newErrors: Record<string, string> = {};
    if (!loginData.username.trim()) {
      newErrors.loginUsername = "Username is required";
    }
    if (!loginData.password) {
      newErrors.loginPassword = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateRegister = () => {
    const newErrors: Record<string, string> = {};
    if (!registerData.username.trim()) {
      newErrors.registerUsername = "Username is required";
    }
    if (!registerData.email.trim()) {
      newErrors.registerEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(registerData.email)) {
      newErrors.registerEmail = "Email is invalid";
    }
    if (!registerData.password) {
      newErrors.registerPassword = "Password is required";
    } else if (registerData.password.length < 6) {
      newErrors.registerPassword = "Password must be at least 6 characters";
    }
    if (registerData.password !== registerData.confirmPassword) {
      newErrors.registerConfirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateLogin()) return;
    
    setIsLoading(true);
    try {
      const success = await login(loginData.username, loginData.password);
      if (success) {
        toast({
          title: "Login successful",
          description: "You have been logged in successfully.",
        });
        navigate("/");
      } else {
        toast({
          title: "Login failed",
          description: "Invalid username or password.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Login failed",
        description: "An error occurred during login.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateRegister()) return;
    
    setIsLoading(true);
    try {
      const success = await register(
        registerData.username,
        registerData.email,
        registerData.password
      );
      if (success) {
        toast({
          title: "Registration successful",
          description: "Your account has been created and you are now logged in.",
        });
        navigate("/");
      } else {
        toast({
          title: "Registration failed",
          description: "Username or email already exists.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "An error occurred during registration.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to Sweet Treat Haven
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Sign in to your account or create a new one
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    value={loginData.username}
                    onChange={handleLoginChange}
                  />
                  {errors.loginUsername && (
                    <p className="text-red-500 text-sm">{errors.loginUsername}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link 
                      to="/forgot-password"
                      className="text-sm text-dessert hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                  />
                  {errors.loginPassword && (
                    <p className="text-red-500 text-sm">{errors.loginPassword}</p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  className="w-full dessert-button"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Signing in...
                    </>
                  ) : (
                    "Sign in"
                  )}
                </Button>
                
                <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                  <p>
                    Demo accounts: <br />
                    User: username "user", password "password" <br />
                    Admin: username "admin", password "admin"
                  </p>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-username">Username</Label>
                  <Input
                    id="register-username"
                    name="username"
                    placeholder="Choose a username"
                    value={registerData.username}
                    onChange={handleRegisterChange}
                  />
                  {errors.registerUsername && (
                    <p className="text-red-500 text-sm">{errors.registerUsername}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <Input
                    id="register-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                  />
                  {errors.registerEmail && (
                    <p className="text-red-500 text-sm">{errors.registerEmail}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <Input
                    id="register-password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                  />
                  {errors.registerPassword && (
                    <p className="text-red-500 text-sm">{errors.registerPassword}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={registerData.confirmPassword}
                    onChange={handleRegisterChange}
                  />
                  {errors.registerConfirmPassword && (
                    <p className="text-red-500 text-sm">{errors.registerConfirmPassword}</p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  className="w-full dessert-button"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Creating account...
                    </>
                  ) : (
                    "Create account"
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
