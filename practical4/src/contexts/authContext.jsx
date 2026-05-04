'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import supabase from '@/lib/supabase';
import apiClient from '@/lib/api-config';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active session in Supabase
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session) {
        setUser({
          id: session.user.id,
          email: session.user.email,
          username: session.user.user_metadata?.username || session.user.email,
          name: session.user.user_metadata?.name || session.user.email,
        });
        // Also store token for Express backend if needed
        localStorage.setItem('token', session.access_token);
      }
      setLoading(false);
    };
    
    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setUser({
          id: session.user.id,
          email: session.user.email,
          username: session.user.user_metadata?.username || session.user.email,
        });
        localStorage.setItem('token', session.access_token);
      } else {
        setUser(null);
        localStorage.removeItem('token');
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) throw error;
      
      const userData = {
        id: data.user.id,
        email: data.user.email,
        username: data.user.user_metadata?.username || data.user.email,
      };
      
      setUser(userData);
      localStorage.setItem('token', data.session.access_token);
      toast.success('Logged in successfully');
      return true;
    } catch (err) {
      toast.error(err.message || 'Login failed');
      return false;
    }
  };

  const register = async (username, email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username: username,
            name: username,
          },
        },
      });
      
      if (error) throw error;
      
      toast.success('Account created successfully');
      return true;
    } catch (err) {
      toast.error(err.message || 'Registration failed');
      return false;
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    localStorage.removeItem('token');
    toast.success('Logged out');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};