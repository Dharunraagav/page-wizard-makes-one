
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useLanguage } from '@/hooks/useLanguage';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { toast } = useToast();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login API call
    setTimeout(() => {
      // For demo purposes, accept any login
      if (username && password) {
        // Store login info if remember me is checked
        if (rememberMe) {
          localStorage.setItem('kisanUsername', username);
        }
        
        // Show success message
        toast({
          title: t('login.successTitle'),
          description: t('login.successMessage'),
        });
        
        // Navigate to welcome page first
        navigate('/welcome');
      } else {
        toast({
          title: t('login.errorTitle'),
          description: t('login.errorMessage'),
          variant: 'destructive',
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-e-dark text-white flex flex-col">
      {/* Login Form Section */}
      <div className="flex-1 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md p-8 rounded-lg bg-gradient-to-b from-gray-800/70 to-gray-900/90 border border-gray-700 shadow-xl"
        >
          {/* Logo/Branding */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-e-green">Kharif Knights</h1>
            <p className="text-gray-300 mt-2">{t('login.subtitle')}</p>
          </div>
          
          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-gray-300">
                {t('login.username')}
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  id="username"
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder={t('login.usernamePlaceholder')}
                  className="pl-10 bg-gray-800 border-gray-700 text-white"
                  autoComplete="username"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300">
                {t('login.password')}
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  id="password"
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t('login.passwordPlaceholder')}
                  className="pl-10 bg-gray-800 border-gray-700 text-white"
                  autoComplete="current-password"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remember" 
                  checked={rememberMe} 
                  onCheckedChange={(checked) => setRememberMe(checked === true)}
                />
                <Label 
                  htmlFor="remember" 
                  className="text-sm text-gray-300 cursor-pointer"
                >
                  {t('login.rememberMe')}
                </Label>
              </div>
              <Link to="/forgot-password" className="text-sm text-e-green hover:underline">
                {t('login.forgotPassword')}
              </Link>
            </div>
            
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-e-green hover:bg-e-green/90 text-black font-semibold py-6 flex items-center justify-center gap-2 transition-all"
            >
              {isLoading ? t('login.loggingIn') : t('login.loginButton')}
              {!isLoading && <ArrowRight className="ml-1" />}
            </Button>
            
            <div className="text-center text-gray-400 text-sm">
              {t('login.noAccount')}{' '}
              <Link to="/register" className="text-e-green hover:underline">
                {t('login.register')}
              </Link>
            </div>
          </form>
          
          {/* Kisan Specific Note */}
          <div className="mt-8 p-4 border border-gray-700 rounded bg-gray-800/50">
            <h3 className="text-e-green font-medium">{t('login.kisanNote')}</h3>
            <p className="text-gray-300 text-sm mt-2">{t('login.kisanMessage')}</p>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <div className="py-4 text-center text-sm text-gray-400">
        <p>© 2025 Kharif Knights. {t('login.rightsReserved')}</p>
      </div>
    </div>
  );
};

export default Login;
