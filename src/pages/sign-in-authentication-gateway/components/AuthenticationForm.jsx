// /home/ubuntu/app/chemai_lab/src/pages/sign-in-authentication-gateway/components/AuthenticationForm.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const AuthenticationForm = ({ onSubmit, isSubmitting, authError }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="space-y-6">
      {/* Social Authentication Options */}
      <div className="space-y-3">
        <button 
          type="button" 
          className="w-full flex items-center justify-center py-2.5 px-4 border border-border rounded-molecular text-text-primary bg-white hover:bg-surface transition-colors scientific-transition"
        >
          <Icon name="Google" size={20} className="mr-3" />
          Sign in with Google
        </button>
        
        <button 
          type="button" 
          className="w-full flex items-center justify-center py-2.5 px-4 border border-border rounded-molecular text-text-primary bg-white hover:bg-surface transition-colors scientific-transition"
        >
          <Icon name="Database" size={20} className="mr-3" />
          Sign in with ORCID
        </button>
      </div>
      
      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border-light"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-text-secondary">Or continue with</span>
        </div>
      </div>
      
      {/* Authentication Error */}
      {authError && (
        <div className="p-3 bg-error-50 border border-error-100 text-error rounded-molecular flex items-start">
          <Icon name="AlertTriangle" size={20} className="mr-2 flex-shrink-0 mt-0.5" />
          <span>{authError}</span>
        </div>
      )}
      
      {/* Email/Password Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium text-text-primary">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="Mail" size={18} className="text-text-tertiary" />
            </div>
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className={`block w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-error' : 'border-border'} rounded-molecular bg-surface-50 focus:ring-primary focus:border-primary scientific-transition`}
              placeholder="you@example.com"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-error">{errors.email?.message}</p>
          )}
        </div>
        
        <div className="space-y-1">
          <label htmlFor="password" className="block text-sm font-medium text-text-primary">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="Lock" size={18} className="text-text-tertiary" />
            </div>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters'
                }
              })}
              className={`block w-full pl-10 pr-10 py-2 border ${errors.password ? 'border-error' : 'border-border'} rounded-molecular bg-surface-50 focus:ring-primary focus:border-primary scientific-transition`}
              placeholder="••••••••"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              <Icon 
                name={showPassword ? 'EyeOff' : 'Eye'} 
                size={18} 
                className="text-text-tertiary hover:text-text-primary scientific-transition" 
              />
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-error">{errors.password?.message}</p>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-primary focus:ring-primary border-border rounded scientific-transition"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-text-secondary">
              Remember me
            </label>
          </div>
          
          <div className="text-sm">
            <Link to="/reset-password" className="font-medium text-primary hover:text-primary-600 scientific-transition">
              Forgot password?
            </Link>
          </div>
        </div>
        
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-molecular shadow-molecular text-sm font-medium text-white bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 scientific-transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Icon name="Loader2" className="animate-spin mr-2" size={18} />
                Processing...
              </>
            ) : (
              <>
                <Icon name="LogIn" className="mr-2" size={18} />
                Sign In to Lab
              </>
            )}
          </button>
        </div>
      </form>
      
      {/* Create Account Link */}
      <div className="text-sm text-center pt-4">
        <span className="text-text-secondary">Don't have an account? </span>
        <Link to="/create-account" className="font-medium text-primary hover:text-primary-600 scientific-transition">
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default AuthenticationForm;